import { useState, useMemo, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { getDepartmentById } from '@/data/departments';
import { getCompetenciesForDepartment, getRequirementsForPosition } from '@/data/competencies';
import { 
  SeniorityLevel, 
  Competency, 
  CompetencyAssessment,
  DepartmentId,
  categoryConfig,
  competencyLevelConfig,
  seniorityLevelConfig
} from '@/types/competency';
import { branding } from '@/config/branding';
import { ArrowLeft, ArrowRight, ChevronDown, ChevronUp, CheckCircle2, FileText, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

const validLevels: SeniorityLevel[] = ['junior', 'mid', 'senior', 'lead', 'expert'];

const Assessment = () => {
  const { departmentId, positionId, level } = useParams<{ 
    departmentId: string; 
    positionId: string; 
    level: string;
  }>();
  const navigate = useNavigate();
  
  const department = departmentId ? getDepartmentById(departmentId) : null;
  const position = department?.positions.find(p => p.id === positionId);
  const seniorityLevel = level as SeniorityLevel;

  // Validate URL params
  const isValidLevel = level && validLevels.includes(level as SeniorityLevel);

  const draftKey = `assessment-draft-${departmentId}-${positionId}-${level}`;

  const [assessments, setAssessments] = useState<Record<string, number>>(() => {
    try {
      const saved = sessionStorage.getItem(draftKey);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });
  const [activeCategory, setActiveCategory] = useState<string>('hard');
  const [expandedCompetency, setExpandedCompetency] = useState<string | null>(null);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  // Redirect on invalid params
  useEffect(() => {
    if (!isValidLevel || !department || !position) {
      toast.error('Nieprawidłowy link. Spróbuj ponownie.');
      navigate('/');
    }
  }, [isValidLevel, department, position, navigate]);

  // Auto-save to sessionStorage
  useEffect(() => {
    if (Object.keys(assessments).length > 0) {
      sessionStorage.setItem(draftKey, JSON.stringify(assessments));
    }
  }, [assessments, draftKey]);

  // Get competencies based on department
  const competencies = useMemo(() => {
    if (!departmentId) return [];
    return getCompetenciesForDepartment(departmentId as DepartmentId);
  }, [departmentId]);

  const requirements = useMemo(() => {
    if (!departmentId || !positionId || !level) return [];
    return getRequirementsForPosition(departmentId as DepartmentId, positionId, level);
  }, [departmentId, positionId, level]);

  // Group competencies by category
  const competenciesByCategory = useMemo(() => {
    return competencies.reduce((acc, comp) => {
      if (!acc[comp.category]) acc[comp.category] = [];
      acc[comp.category].push(comp);
      return acc;
    }, {} as Record<string, Competency[]>);
  }, [competencies]);

  // Calculate progress
  const totalCompetencies = competencies.length;
  const assessedCount = Object.keys(assessments).length;
  const progressPercent = (assessedCount / totalCompetencies) * 100;

  const handleRating = (competencyId: string, rating: number) => {
    setAssessments(prev => ({
      ...prev,
      [competencyId]: rating
    }));
  };

  const getRequiredLevel = (competencyId: string): number => {
    const req = requirements.find(r => r.competencyId === competencyId);
    return req?.requiredLevel || 0;
  };

  const toggleExpanded = (competencyId: string) => {
    setExpandedCompetency(prev => prev === competencyId ? null : competencyId);
  };

  const handleSubmit = () => {
    const assessmentData: CompetencyAssessment[] = Object.entries(assessments).map(
      ([competencyId, selfRating]) => ({ competencyId, selfRating })
    );
    
    sessionStorage.setItem('assessment', JSON.stringify({
      departmentId,
      positionId,
      seniorityLevel,
      assessments: assessmentData,
      createdAt: new Date().toISOString()
    }));
    
    // Clear draft after successful submit
    sessionStorage.removeItem(draftKey);
    
    navigate('/results');
  };

  if (!department || !position || !isValidLevel) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-lg text-foreground">{branding.appName}</h1>
            </div>
            
            <Button variant="ghost" size="sm" onClick={() => navigate(`/assessment/${departmentId}`)}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Powrót
            </Button>
          </div>
          
          {/* Progress bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">
                {position.name} • {seniorityLevelConfig[seniorityLevel].name}
              </span>
              <span className="font-medium">
                {assessedCount} / {totalCompetencies} kompetencji
              </span>
            </div>
            <Progress value={progressPercent} className="h-2" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-2">Samoocena kompetencji</h1>
          <p className="text-muted-foreground mb-4">
            Kliknij na kompetencję, żeby zobaczyć szczegółowe opisy każdego poziomu. 
            Wybierz poziom, który najlepiej opisuje Twoje umiejętności.
          </p>

          {/* Link to detailed competency matrix - conditional */}
          {branding.competencyMatrixUrl && (
            <Alert className="mb-8 border-primary/20 bg-primary/5">
              <FileText className="h-4 w-4 text-primary" />
              <AlertDescription className="flex items-center justify-between flex-wrap gap-2">
                <span>
                  Potrzebujesz szczegółowych opisów kompetencji? Sprawdź pełną macierz.
                </span>
                <a 
                  href={branding.competencyMatrixUrl}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary font-medium hover:underline"
                >
                  Otwórz macierz kompetencji
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </AlertDescription>
            </Alert>
          )}

          {/* Category Tabs */}
          <Tabs value={activeCategory} onValueChange={setActiveCategory}>
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {Object.entries(categoryConfig).map(([key, config]) => {
                const categoryCompetencies = competenciesByCategory[key] || [];
                const assessed = categoryCompetencies.filter(c => assessments[c.id]).length;
                return (
                  <TabsTrigger key={key} value={key} className="text-sm relative">
                    {config.name}
                    {assessed === categoryCompetencies.length && categoryCompetencies.length > 0 && (
                      <CheckCircle2 className="w-4 h-4 text-green-500 ml-1" />
                    )}
                  </TabsTrigger>
                );
              })}
            </TabsList>

            {Object.entries(categoryConfig).map(([categoryKey, categoryInfo]) => (
              <TabsContent key={categoryKey} value={categoryKey} className="space-y-4">
                <p className="text-sm text-muted-foreground mb-4">
                  {categoryInfo.description}
                </p>
                
                {competenciesByCategory[categoryKey]?.map((competency) => {
                  const requiredLevel = getRequiredLevel(competency.id);
                  const currentRating = assessments[competency.id];
                  const isExpanded = expandedCompetency === competency.id;
                  
                  return (
                    <Card key={competency.id} className={cn(
                      "overflow-hidden transition-all duration-200",
                      currentRating && "border-primary/30",
                      !isExpanded && "hover:shadow-md hover:border-primary/50"
                    )}>
                      {/* Competency Header - Clickable to expand */}
                      <CardHeader 
                        className={cn(
                          "cursor-pointer transition-all duration-200",
                          isExpanded 
                            ? "bg-primary/5" 
                            : "hover:bg-accent group"
                        )}
                        onClick={() => toggleExpanded(competency.id)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-lg flex items-center gap-2">
                              {competency.name}
                              {currentRating && (
                                <CheckCircle2 className="w-5 h-5 text-green-500" />
                              )}
                            </CardTitle>
                            <CardDescription className="mt-1">{competency.description}</CardDescription>
                            {/* Expand hint */}
                            {!isExpanded && (
                              <div className="mt-2 flex items-center gap-1.5 text-xs text-primary font-medium opacity-70 group-hover:opacity-100 transition-opacity">
                                <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
                                <span>Kliknij, żeby zobaczyć szczegóły i wybrać poziom</span>
                              </div>
                            )}
                          </div>
                          <div className="flex items-center gap-3">
                            {currentRating && (
                              <div className="text-right">
                                <span className="text-xs text-muted-foreground block mb-1">Twoja ocena</span>
                                <div className={cn(
                                  'px-3 py-1 rounded text-sm font-bold',
                                  competencyLevelConfig[currentRating]?.color,
                                  'text-white'
                                )}>
                                  {currentRating}
                                </div>
                              </div>
                            )}
                            <div className={cn(
                              "w-8 h-8 rounded-full flex items-center justify-center transition-colors",
                              isExpanded ? "bg-primary text-primary-foreground" : "bg-secondary group-hover:bg-primary/20"
                            )}>
                              {isExpanded ? (
                                <ChevronUp className="w-5 h-5" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-muted-foreground group-hover:text-primary" />
                              )}
                            </div>
                          </div>
                        </div>
                      </CardHeader>

                      {/* Expanded Level Details */}
                      {isExpanded && (
                        <CardContent className="pt-0 border-t">
                          <div className="space-y-3 mt-4">
                            {competency.levels.map((levelInfo) => {
                              const isSelected = currentRating === levelInfo.level;
                              const levelConfig = competencyLevelConfig[levelInfo.level];
                              
                              return (
                                <div
                                  key={levelInfo.level}
                                  onClick={() => handleRating(competency.id, levelInfo.level)}
                                  className={cn(
                                    'p-4 rounded-lg cursor-pointer transition-all duration-200',
                                    'border-2 hover:border-primary/50',
                                    isSelected
                                      ? 'border-primary bg-accent shadow-md'
                                      : 'border-transparent bg-secondary/50 hover:bg-secondary'
                                  )}
                                >
                                  <div className="flex items-start gap-4">
                                    {/* Level Badge */}
                                    <div className={cn(
                                      'w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0',
                                      'font-bold text-lg text-white',
                                      levelConfig.color
                                    )}>
                                      {levelInfo.level}
                                    </div>
                                    
                                    {/* Level Description */}
                                    <div className="flex-1">
                                      <div className="flex items-center gap-2 mb-1">
                                        <h4 className="font-semibold text-foreground">
                                          {levelInfo.name}
                                        </h4>
                                        {isSelected && (
                                          <CheckCircle2 className="w-4 h-4 text-primary" />
                                        )}
                                      </div>
                                      <p className="text-sm text-muted-foreground leading-relaxed">
                                        {levelInfo.description}
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </CardContent>
                      )}

                      {/* Quick Rating Buttons (when collapsed) */}
                      {!isExpanded && (
                        <CardContent className="pt-0">
                          <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map((rating) => {
                              const levelConfig = competencyLevelConfig[rating];
                              const isSelected = currentRating === rating;
                              
                              return (
                                <button
                                  key={rating}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleRating(competency.id, rating);
                                  }}
                                  className={cn(
                                    'flex-1 py-3 px-2 rounded-lg transition-all duration-200',
                                    'border-2 font-medium',
                                    isSelected
                                      ? `${levelConfig.color} text-white border-transparent shadow-md scale-105`
                                      : 'bg-secondary border-transparent hover:border-primary/30 text-secondary-foreground'
                                  )}
                                >
                                  <div className="text-lg font-bold">{rating}</div>
                                  <div className="text-xs opacity-80 hidden sm:block">
                                    {levelConfig.name}
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </CardContent>
                      )}
                    </Card>
                  );
                })}
              </TabsContent>
            ))}
          </Tabs>

          {/* Navigation Button */}
          {(() => {
            const categoryKeys = Object.keys(categoryConfig);
            const currentIndex = categoryKeys.indexOf(activeCategory);
            const isLastCategory = currentIndex === categoryKeys.length - 1;
            const currentCategoryCompetencies = competenciesByCategory[activeCategory] || [];
            const currentCategoryAssessed = currentCategoryCompetencies.filter(c => assessments[c.id]).length;
            const isCurrentCategoryComplete = currentCategoryAssessed === currentCategoryCompetencies.length && currentCategoryCompetencies.length > 0;
            const nextCategoryKey = categoryKeys[currentIndex + 1];
            const nextCategoryName = nextCategoryKey ? categoryConfig[nextCategoryKey as keyof typeof categoryConfig]?.name : '';

            return (
              <div className="mt-12 flex flex-col items-center gap-4">
                {!isLastCategory ? (
                  <>
                    <Button
                      size="lg"
                      disabled={!isCurrentCategoryComplete}
                      onClick={() => setActiveCategory(nextCategoryKey)}
                      className="min-w-[200px]"
                    >
                      Przejdź do: {nextCategoryName}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    {!isCurrentCategoryComplete && (
                      <p className="text-sm text-muted-foreground">
                        Oceń wszystkie kompetencje w tej kategorii, żeby przejść dalej
                        ({currentCategoryCompetencies.length - currentCategoryAssessed} pozostało)
                      </p>
                    )}
                  </>
                ) : (
                  <>
                    <Button
                      size="lg"
                      disabled={assessedCount < totalCompetencies}
                      onClick={() => setShowConfirmDialog(true)}
                      className="min-w-[200px]"
                    >
                      Zobacz wyniki
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    {assessedCount < totalCompetencies && (
                      <p className="text-sm text-muted-foreground">
                        Oceń wszystkie {totalCompetencies} kompetencji, żeby zobaczyć wyniki 
                        ({totalCompetencies - assessedCount} pozostało)
                      </p>
                    )}
                  </>
                )}
              </div>
            );
          })()}
        </div>
      </main>

      {/* Confirm Dialog */}
      <AlertDialog open={showConfirmDialog} onOpenChange={setShowConfirmDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Potwierdzenie samooceny</AlertDialogTitle>
            <AlertDialogDescription>
              Czy na pewno chcesz zakończyć samoocenę? Oceniłeś/aś {assessedCount} kompetencji.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Wróć do edycji</AlertDialogCancel>
            <AlertDialogAction onClick={handleSubmit}>Zobacz wyniki</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Assessment;
