import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { getDepartmentById } from '@/data/departments';
import { getCompetenciesForDepartment, getRequirementsForPosition } from '@/data/competencies';
import { 
  SelfAssessment, 
  AssessmentResult,
  DepartmentId,
  categoryConfig,
  competencyLevelConfig,
  seniorityLevelConfig,
  SeniorityLevel
} from '@/types/competency';
import { branding } from '@/config/branding';
import { generatePDFReport } from '@/utils/pdfGenerator';
import { ArrowLeft, Download, Home, TrendingUp, TrendingDown, Minus, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Results = () => {
  const navigate = useNavigate();
  const [assessment, setAssessment] = useState<SelfAssessment | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem('assessment');
    if (stored) {
      setAssessment(JSON.parse(stored));
    } else {
      navigate('/');
    }
  }, [navigate]);

  const department = assessment?.departmentId ? getDepartmentById(assessment.departmentId) : null;
  const position = department?.positions.find(p => p.id === assessment?.positionId);

  // Get competencies for the department
  const competencies = useMemo(() => {
    if (!assessment?.departmentId) return [];
    return getCompetenciesForDepartment(assessment.departmentId as DepartmentId);
  }, [assessment?.departmentId]);

  const requirements = useMemo(() => {
    if (!assessment?.departmentId || !assessment?.positionId || !assessment?.seniorityLevel) return [];
    return getRequirementsForPosition(
      assessment.departmentId as DepartmentId, 
      assessment.positionId, 
      assessment.seniorityLevel
    );
  }, [assessment]);

  // Calculate next seniority level
  const nextLevel = useMemo((): SeniorityLevel | null => {
    if (!assessment?.seniorityLevel || !position) return null;
    const levelOrder: SeniorityLevel[] = ['junior', 'mid', 'senior', 'lead', 'expert'];
    const currentIndex = levelOrder.indexOf(assessment.seniorityLevel);
    if (currentIndex === -1 || currentIndex >= levelOrder.length - 1) return null;
    
    const potentialNext = levelOrder[currentIndex + 1];
    // Check if the position supports this next level
    if (position.levels.includes(potentialNext)) {
      return potentialNext;
    }
    return null;
  }, [assessment?.seniorityLevel, position]);

  // Get requirements for next level
  const nextLevelRequirements = useMemo(() => {
    if (!nextLevel || !assessment?.departmentId || !assessment?.positionId) return [];
    return getRequirementsForPosition(
      assessment.departmentId as DepartmentId, 
      assessment.positionId, 
      nextLevel
    );
  }, [nextLevel, assessment?.departmentId, assessment?.positionId]);

  const results = useMemo(() => {
    if (!assessment || competencies.length === 0) return null;

    const assessmentResults: AssessmentResult[] = assessment.assessments.map(a => {
      const comp = competencies.find(c => c.id === a.competencyId);
      const req = requirements.find(r => r.competencyId === a.competencyId);
      const requiredLevel = req?.requiredLevel || 0;
      
      return {
        competencyId: a.competencyId,
        competencyName: comp?.name || '',
        category: comp?.category || 'hard',
        selfRating: a.selfRating,
        requiredLevel,
        gap: a.selfRating - requiredLevel,
      };
    });

    // Calculate overall match percentage
    const resultsWithRequirements = assessmentResults.filter(r => r.requiredLevel > 0);
    const totalRequired = resultsWithRequirements.reduce((sum, r) => sum + r.requiredLevel, 0);
    const totalSelf = resultsWithRequirements.reduce((sum, r) => sum + Math.min(r.selfRating, r.requiredLevel), 0);
    const matchPercentage = totalRequired > 0 ? Math.round((totalSelf / totalRequired) * 100) : 0;

    // Find strengths and development areas
    const strengths = assessmentResults
      .filter(r => r.gap > 0 && r.requiredLevel > 0)
      .sort((a, b) => b.gap - a.gap)
      .slice(0, 3);

    const developmentAreas = assessmentResults
      .filter(r => r.gap < 0)
      .sort((a, b) => a.gap - b.gap)
      .slice(0, 3);

    return {
      results: assessmentResults,
      matchPercentage,
      strengths,
      developmentAreas,
      overallScore: Math.round(assessmentResults.reduce((sum, r) => sum + r.selfRating, 0) / assessmentResults.length * 20),
    };
  }, [assessment, competencies, requirements]);

  // Prepare chart data for current level
  const chartData = useMemo(() => {
    if (!results) return [];
    return results.results.map(r => ({
      competency: r.competencyName.length > 15 
        ? r.competencyName.substring(0, 15) + '...' 
        : r.competencyName,
      'Twoja ocena': r.selfRating,
      'Wymagane': r.requiredLevel,
      fullMark: 5,
    }));
  }, [results]);

  // Prepare chart data for next level comparison
  const nextLevelChartData = useMemo(() => {
    if (!results || !nextLevelRequirements.length) return [];
    return results.results.map(r => {
      const nextReq = nextLevelRequirements.find(req => req.competencyId === r.competencyId);
      return {
        competency: r.competencyName.length > 15 
          ? r.competencyName.substring(0, 15) + '...' 
          : r.competencyName,
        'Twoja ocena': r.selfRating,
        'Wymagane (następny poziom)': nextReq?.requiredLevel || 0,
        fullMark: 5,
      };
    });
  }, [results, nextLevelRequirements]);

  if (!assessment || !results || !position || !department) {
    return null;
  }

  const getGapIcon = (gap: number) => {
    if (gap > 0) return <TrendingUp className="w-4 h-4 text-green-500" />;
    if (gap < 0) return <TrendingDown className="w-4 h-4 text-red-500" />;
    return <Minus className="w-4 h-4 text-muted-foreground" />;
  };

  const handleDownloadPDF = () => {
    generatePDFReport({
      positionName: position.name,
      seniorityLevel: assessment.seniorityLevel as SeniorityLevel,
      departmentName: department.name,
      date: new Date().toLocaleDateString('pl-PL'),
      results: results.results,
      competencies,
      matchPercentage: results.matchPercentage,
      overallScore: results.overallScore,
      strengths: results.strengths,
      developmentAreas: results.developmentAreas,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="font-bold text-lg text-foreground">{branding.appName}</h1>
          </div>
          
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => navigate('/')}>
              <Home className="w-4 h-4 mr-2" />
              Start
            </Button>
            <Button size="sm" onClick={handleDownloadPDF}>
              <Download className="w-4 h-4 mr-2" />
              Pobierz PDF
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Summary Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Wyniki Twojej samooceny</h1>
            <p className="text-muted-foreground">
              {position.name} • {seniorityLevelConfig[assessment.seniorityLevel as SeniorityLevel].name}
            </p>
          </div>

          {/* Score Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-primary mb-2">
                  {results.matchPercentage}%
                </div>
                <p className="text-sm text-muted-foreground">
                  Dopasowanie do stanowiska
                </p>
                <Progress value={results.matchPercentage} className="mt-4 h-2" />
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-green-500 mb-2">
                  {results.strengths.length}
                </div>
                <p className="text-sm text-muted-foreground">
                  Mocne strony
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Kompetencje powyżej wymagań
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6 text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  {results.developmentAreas.length}
                </div>
                <p className="text-sm text-muted-foreground">
                  Obszary do rozwoju
                </p>
                <p className="text-xs text-muted-foreground mt-2">
                  Kompetencje poniżej wymagań
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Radar Chart */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Profil kompetencji</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={chartData}>
                    <PolarGrid />
                    <PolarAngleAxis 
                      dataKey="competency" 
                      tick={{ fontSize: 11 }}
                    />
                    <PolarRadiusAxis 
                      angle={90} 
                      domain={[0, 5]} 
                      tick={{ fontSize: 10 }}
                    />
                    <Radar
                      name="Twoja ocena"
                      dataKey="Twoja ocena"
                      stroke="hsl(var(--primary))"
                      fill="hsl(var(--primary))"
                      fillOpacity={0.3}
                      strokeWidth={2}
                    />
                    <Radar
                      name="Wymagane"
                      dataKey="Wymagane"
                      stroke="hsl(var(--muted-foreground))"
                      fill="hsl(var(--muted-foreground))"
                      fillOpacity={0.1}
                      strokeWidth={2}
                      strokeDasharray="5 5"
                    />
                    <Legend />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Second Radar Chart - Next Level Comparison */}
          {nextLevel && nextLevelChartData.length > 0 && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-primary" />
                  Ścieżka rozwoju - {seniorityLevelConfig[nextLevel].name}
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  Porównanie Twoich kompetencji z wymaganiami na poziomie {seniorityLevelConfig[nextLevel].name}
                </p>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={nextLevelChartData}>
                      <PolarGrid />
                      <PolarAngleAxis 
                        dataKey="competency" 
                        tick={{ fontSize: 11 }}
                      />
                      <PolarRadiusAxis 
                        angle={90} 
                        domain={[0, 5]} 
                        tick={{ fontSize: 10 }}
                      />
                      <Radar
                        name="Twoja ocena"
                        dataKey="Twoja ocena"
                        stroke="hsl(var(--primary))"
                        fill="hsl(var(--primary))"
                        fillOpacity={0.3}
                        strokeWidth={2}
                      />
                      <Radar
                        name="Wymagane (następny poziom)"
                        dataKey="Wymagane (następny poziom)"
                        stroke="hsl(221 83% 53%)"
                        fill="hsl(221 83% 53%)"
                        fillOpacity={0.1}
                        strokeWidth={2}
                        strokeDasharray="5 5"
                      />
                      <Legend />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Message when at highest level */}
          {!nextLevel && assessment?.seniorityLevel && (
            <Card className="mb-8 border-primary/20 bg-primary/5">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-primary" />
                  <div>
                    <p className="font-medium">Jesteś na najwyższym poziomie dla tej roli!</p>
                    <p className="text-sm text-muted-foreground">
                      Poziom {seniorityLevelConfig[assessment.seniorityLevel as SeniorityLevel].name} to najwyższy dostępny poziom dla stanowiska {position?.name}.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Detailed Results */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Strengths */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-green-600">
                  <TrendingUp className="w-5 h-5" />
                  Mocne strony
                </CardTitle>
              </CardHeader>
              <CardContent>
                {results.strengths.length > 0 ? (
                  <ul className="space-y-3">
                    {results.strengths.map((r) => (
                      <li key={r.competencyId} className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950/20 rounded-lg">
                        <span className="font-medium">{r.competencyName}</span>
                        <span className="text-sm text-green-600">
                          +{r.gap} powyżej wymagań
                        </span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground text-center py-4">
                    Brak kompetencji znacząco powyżej wymagań
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Development Areas */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-orange-600">
                  <TrendingDown className="w-5 h-5" />
                  Obszary do rozwoju
                </CardTitle>
              </CardHeader>
              <CardContent>
                {results.developmentAreas.length > 0 ? (
                  <ul className="space-y-3">
                    {results.developmentAreas.map((r) => {
                      const comp = competencies.find(c => c.id === r.competencyId);
                      const targetLevel = comp?.levels.find(l => l.level === r.requiredLevel);
                      return (
                        <li key={r.competencyId} className="p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-medium">{r.competencyName}</span>
                            <span className="text-sm text-orange-600">
                              {r.gap} poniżej wymagań
                            </span>
                          </div>
                          {targetLevel && (
                            <p className="text-xs text-muted-foreground">
                              Cel: {targetLevel.description}
                            </p>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <p className="text-muted-foreground text-center py-4">
                    Gratulacje! Spełniasz wszystkie wymagania
                  </p>
                )}
              </CardContent>
            </Card>
          </div>

          {/* All Results Table */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Szczegółowe wyniki</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-2">Kompetencja</th>
                      <th className="text-center py-3 px-2">Kategoria</th>
                      <th className="text-center py-3 px-2">Twoja ocena</th>
                      <th className="text-center py-3 px-2">Wymagane</th>
                      <th className="text-center py-3 px-2">Różnica</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.results.map((r) => (
                      <tr key={r.competencyId} className="border-b last:border-0">
                        <td className="py-3 px-2 font-medium">{r.competencyName}</td>
                        <td className="py-3 px-2 text-center">
                          <span className="text-xs bg-secondary px-2 py-1 rounded">
                            {categoryConfig[r.category].name}
                          </span>
                        </td>
                        <td className="py-3 px-2 text-center">
                          <span className={cn(
                            'inline-flex items-center justify-center w-8 h-8 rounded-full text-white font-bold',
                            competencyLevelConfig[r.selfRating]?.color
                          )}>
                            {r.selfRating}
                          </span>
                        </td>
                        <td className="py-3 px-2 text-center">
                          <span className="font-medium">{r.requiredLevel || '-'}</span>
                        </td>
                        <td className="py-3 px-2">
                          <div className="flex items-center justify-center gap-1">
                            {getGapIcon(r.gap)}
                            <span className={cn(
                              'font-medium',
                              r.gap > 0 && 'text-green-500',
                              r.gap < 0 && 'text-red-500'
                            )}>
                              {r.gap > 0 ? '+' : ''}{r.gap}
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={handleDownloadPDF}>
              <Download className="w-4 h-4 mr-2" />
              Pobierz pełny raport PDF
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/')}>
              <Home className="w-4 h-4 mr-2" />
              Wróć do strony głównej
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Results;
