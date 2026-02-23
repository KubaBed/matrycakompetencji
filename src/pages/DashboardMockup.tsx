import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { branding } from '@/config/branding';
import { departments } from '@/data/departments';
import { 
  Sparkles, 
  Users, 
  TrendingUp, 
  FileText, 
  Download, 
  Search,
  Filter,
  Calendar,
  BarChart3,
  PieChart,
  ArrowLeft,
  Eye,
  Mail,
  Building2,
  AlertTriangle,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Mock data for the dashboard
const mockEmployees = [
  { id: '1', name: 'Anna Kowalska', email: 'anna.k@example.com', department: 'mobile', position: 'iOS Developer', level: 'Senior', lastAssessment: '2025-01-15', matchScore: 92 },
  { id: '2', name: 'Piotr Nowak', email: 'piotr.n@example.com', department: 'mobile', position: 'Android Developer', level: 'Mid', lastAssessment: '2025-01-10', matchScore: 78 },
  { id: '3', name: 'Maria Wiśniewska', email: 'maria.w@example.com', department: 'web', position: 'Frontend Developer', level: 'Senior', lastAssessment: '2025-01-18', matchScore: 88 },
  { id: '4', name: 'Jan Kowalczyk', email: 'jan.k@example.com', department: 'pm', position: 'Project Manager', level: 'Lead', lastAssessment: '2025-01-05', matchScore: 95 },
  { id: '5', name: 'Katarzyna Zielińska', email: 'kasia.z@example.com', department: 'qa', position: 'QA Engineer', level: 'Mid', lastAssessment: null, matchScore: null },
  { id: '6', name: 'Tomasz Lewandowski', email: 'tomek.l@example.com', department: 'sales', position: 'Account Manager', level: 'Senior', lastAssessment: '2025-01-20', matchScore: 85 },
  { id: '7', name: 'Agnieszka Dąbrowska', email: 'aga.d@example.com', department: 'mobile', position: 'Flutter Developer', level: 'Junior', lastAssessment: '2025-01-12', matchScore: 65 },
  { id: '8', name: 'Michał Wójcik', email: 'michal.w@example.com', department: 'web', position: 'Backend Developer', level: 'Mid', lastAssessment: null, matchScore: null },
];

const mockTeamStats = {
  totalEmployees: 47,
  completedAssessments: 38,
  averageMatch: 82,
  pendingAssessments: 9,
};

const mockCompetencyHeatmap = [
  { competency: 'Programowanie', mobile: 4.2, web: 4.5, qa: 3.1, pm: 2.0, sales: 1.5 },
  { competency: 'Architektura', mobile: 3.8, web: 4.0, qa: 2.5, pm: 2.8, sales: 1.2 },
  { competency: 'Komunikacja', mobile: 3.5, web: 3.2, qa: 3.8, pm: 4.5, sales: 4.8 },
  { competency: 'Praca zespołowa', mobile: 3.9, web: 3.7, qa: 4.0, pm: 4.2, sales: 4.0 },
  { competency: 'Problem solving', mobile: 4.0, web: 4.2, qa: 4.5, pm: 3.8, sales: 3.5 },
];

const DashboardMockup = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');
  const [activeTab, setActiveTab] = useState('overview');

  const filteredEmployees = mockEmployees.filter(emp => {
    const matchesSearch = emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          emp.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || emp.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });

  const getScoreColor = (score: number | null) => {
    if (score === null) return 'bg-muted text-muted-foreground';
    if (score >= 90) return 'bg-green-500 text-white';
    if (score >= 75) return 'bg-sky-500 text-white';
    if (score >= 60) return 'bg-yellow-500 text-white';
    return 'bg-orange-500 text-white';
  };

  const getHeatmapColor = (value: number) => {
    if (value >= 4.5) return 'bg-green-500';
    if (value >= 4.0) return 'bg-green-400';
    if (value >= 3.5) return 'bg-yellow-400';
    if (value >= 3.0) return 'bg-yellow-500';
    if (value >= 2.5) return 'bg-orange-400';
    return 'bg-orange-500';
  };

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Mockup Banner */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-center text-sm">
        <span className="font-medium">📐 MOCKUP</span> - To jest podgląd dashboardu HR. Dane są przykładowe.
        <Button 
          variant="secondary" 
          size="sm" 
          className="ml-4"
          onClick={() => navigate('/')}
        >
          <ArrowLeft className="w-3 h-3 mr-1" />
          Wróć do aplikacji
        </Button>
      </div>

      {/* Sidebar + Content Layout */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 min-h-screen bg-card border-r p-4 hidden lg:block">
          <div className="flex items-center gap-2 mb-8">
            <h1 className="font-bold text-foreground">{branding.appName} - HR Dashboard</h1>
          </div>

          <nav className="space-y-2">
            <Button 
              variant={activeTab === 'overview' ? 'secondary' : 'ghost'} 
              className="w-full justify-start"
              onClick={() => setActiveTab('overview')}
            >
              <BarChart3 className="w-4 h-4 mr-2" />
              Przegląd
            </Button>
            <Button 
              variant={activeTab === 'employees' ? 'secondary' : 'ghost'} 
              className="w-full justify-start"
              onClick={() => setActiveTab('employees')}
            >
              <Users className="w-4 h-4 mr-2" />
              Pracownicy
            </Button>
            <Button 
              variant={activeTab === 'heatmap' ? 'secondary' : 'ghost'} 
              className="w-full justify-start"
              onClick={() => setActiveTab('heatmap')}
            >
              <PieChart className="w-4 h-4 mr-2" />
              Heatmapa kompetencji
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <FileText className="w-4 h-4 mr-2" />
              Raporty
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <Download className="w-4 h-4 mr-2" />
              Eksport danych
            </Button>
          </nav>

          <div className="mt-8 p-4 bg-accent rounded-lg">
            <p className="text-sm font-medium mb-1">Zalogowany jako:</p>
            <p className="text-sm text-muted-foreground">hr@example.com</p>
            <Badge className="mt-2 bg-primary">HR Admin</Badge>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold mb-1">Przegląd zespołu</h1>
                <p className="text-muted-foreground">Podsumowanie samoocen i kompetencji</p>
              </div>

              {/* Stats Cards */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Pracownicy</p>
                        <p className="text-3xl font-bold">{mockTeamStats.totalEmployees}</p>
                      </div>
                      <Users className="w-8 h-8 text-primary opacity-80" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Ukończone oceny</p>
                        <p className="text-3xl font-bold text-green-500">{mockTeamStats.completedAssessments}</p>
                      </div>
                      <CheckCircle2 className="w-8 h-8 text-green-500 opacity-80" />
                    </div>
                    <Progress value={(mockTeamStats.completedAssessments / mockTeamStats.totalEmployees) * 100} className="mt-3 h-2" />
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Średnie dopasowanie</p>
                        <p className="text-3xl font-bold text-sky-500">{mockTeamStats.averageMatch}%</p>
                      </div>
                      <TrendingUp className="w-8 h-8 text-sky-500 opacity-80" />
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Oczekujące</p>
                        <p className="text-3xl font-bold text-orange-500">{mockTeamStats.pendingAssessments}</p>
                      </div>
                      <Clock className="w-8 h-8 text-orange-500 opacity-80" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Charts Row */}
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Building2 className="w-5 h-5" />
                      Wyniki wg działów
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {departments.map((dept) => (
                        <div key={dept.id} className="flex items-center gap-4">
                          <img src={dept.icon} alt={dept.name} className="w-10 h-10 object-contain" />
                          <div className="flex-1">
                            <div className="flex justify-between mb-1">
                              <span className="font-medium">{dept.name}</span>
                              <span className="text-sm text-muted-foreground">
                                {[82, 88, 75, 91, 79][departments.indexOf(dept)] || 80}%
                              </span>
                            </div>
                            <Progress value={[78, 85, 70, 88, 74][departments.indexOf(dept)] || 75} className="h-2" />
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Obszary wymagające uwagi
                    </CardTitle>
                    <CardDescription>Kompetencje z najniższymi wynikami w zespole</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {[
                        { name: 'Testowanie automatyczne', dept: 'Mobile', gap: -1.8 },
                        { name: 'Dokumentacja techniczna', dept: 'Web', gap: -1.5 },
                        { name: 'Architektura systemów', dept: 'Mobile', gap: -1.2 },
                        { name: 'Prezentacje klienckie', dept: 'QA', gap: -1.0 },
                      ].map((item, i) => (
                        <div key={i} className="flex items-center justify-between p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                          <div>
                            <p className="font-medium">{item.name}</p>
                            <p className="text-sm text-muted-foreground">{item.dept}</p>
                          </div>
                          <Badge variant="destructive">{item.gap}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Recent Assessments */}
              <Card>
                <CardHeader>
                  <CardTitle>Ostatnie samooceny</CardTitle>
                  <CardDescription>Pracownicy, którzy ostatnio ukończyli samoocenę</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {mockEmployees.filter(e => e.lastAssessment).slice(0, 5).map((emp) => (
                      <div key={emp.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
                            {emp.name.split(' ').map(n => n[0]).join('')}
                          </div>
                          <div>
                            <p className="font-medium">{emp.name}</p>
                            <p className="text-sm text-muted-foreground">{emp.position} • {emp.level}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <p className="text-sm text-muted-foreground">{emp.lastAssessment}</p>
                          </div>
                          <Badge className={getScoreColor(emp.matchScore)}>
                            {emp.matchScore}%
                          </Badge>
                          <Button variant="ghost" size="sm">
                            <Eye className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Employees Tab */}
          {activeTab === 'employees' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-between">
                <div>
                  <h1 className="text-2xl font-bold mb-1">Pracownicy</h1>
                  <p className="text-muted-foreground">Lista wszystkich pracowników i ich wyniki</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline">
                    <Mail className="w-4 h-4 mr-2" />
                    Wyślij przypomnienie
                  </Button>
                  <Button>
                    <Download className="w-4 h-4 mr-2" />
                    Eksportuj
                  </Button>
                </div>
              </div>

              {/* Filters */}
              <Card>
                <CardContent className="pt-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input 
                        placeholder="Szukaj pracownika..." 
                        className="pl-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                    <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                      <SelectTrigger className="w-full sm:w-[200px]">
                        <Filter className="w-4 h-4 mr-2" />
                        <SelectValue placeholder="Dział" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">Wszystkie działy</SelectItem>
                        {departments.map(d => (
                          <SelectItem key={d.id} value={d.id}>{d.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Employees Table */}
              <Card>
                <CardContent className="pt-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-2">Pracownik</th>
                          <th className="text-left py-3 px-2">Dział</th>
                          <th className="text-left py-3 px-2">Stanowisko</th>
                          <th className="text-center py-3 px-2">Poziom</th>
                          <th className="text-center py-3 px-2">Ostatnia ocena</th>
                          <th className="text-center py-3 px-2">Wynik</th>
                          <th className="text-center py-3 px-2">Akcje</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredEmployees.map((emp) => {
                          const dept = departments.find(d => d.id === emp.department);
                          return (
                            <tr key={emp.id} className="border-b last:border-0 hover:bg-muted/50">
                              <td className="py-3 px-2">
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
                                    {emp.name.split(' ').map(n => n[0]).join('')}
                                  </div>
                                  <div>
                                    <p className="font-medium">{emp.name}</p>
                                    <p className="text-xs text-muted-foreground">{emp.email}</p>
                                  </div>
                                </div>
                              </td>
                              <td className="py-3 px-2">
                                <div className="flex items-center gap-2">
                                  {dept && <img src={dept.icon} alt={dept.name} className="w-6 h-6" />}
                                  <span className="text-sm">{dept?.name}</span>
                                </div>
                              </td>
                              <td className="py-3 px-2">{emp.position}</td>
                              <td className="py-3 px-2 text-center">
                                <Badge variant="outline">{emp.level}</Badge>
                              </td>
                              <td className="py-3 px-2 text-center">
                                {emp.lastAssessment ? (
                                  <span className="text-sm">{emp.lastAssessment}</span>
                                ) : (
                                  <Badge variant="secondary" className="text-orange-600">
                                    <Clock className="w-3 h-3 mr-1" />
                                    Brak
                                  </Badge>
                                )}
                              </td>
                              <td className="py-3 px-2 text-center">
                                {emp.matchScore !== null ? (
                                  <Badge className={getScoreColor(emp.matchScore)}>
                                    {emp.matchScore}%
                                  </Badge>
                                ) : (
                                  <span className="text-muted-foreground">-</span>
                                )}
                              </td>
                              <td className="py-3 px-2 text-center">
                                <div className="flex justify-center gap-1">
                                  <Button variant="ghost" size="sm">
                                    <Eye className="w-4 h-4" />
                                  </Button>
                                  <Button variant="ghost" size="sm">
                                    <FileText className="w-4 h-4" />
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Heatmap Tab */}
          {activeTab === 'heatmap' && (
            <div className="space-y-6">
              <div>
                <h1 className="text-2xl font-bold mb-1">Heatmapa kompetencji</h1>
                <p className="text-muted-foreground">Średnie poziomy kompetencji w poszczególnych działach</p>
              </div>

              <Card>
                <CardContent className="pt-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left py-3 px-4">Kompetencja</th>
                          {departments.map(d => (
                            <th key={d.id} className="text-center py-3 px-4">
                              <div className="flex flex-col items-center gap-1">
                                <img src={d.icon} alt={d.name} className="w-8 h-8" />
                                <span className="text-xs">{d.name}</span>
                              </div>
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {mockCompetencyHeatmap.map((row, i) => (
                          <tr key={i} className="border-b last:border-0">
                            <td className="py-4 px-4 font-medium">{row.competency}</td>
                            {['mobile', 'web', 'qa', 'pm', 'sales'].map((dept) => {
                              const value = row[dept as keyof typeof row] as number;
                              return (
                                <td key={dept} className="py-4 px-4 text-center">
                                  <div className={cn(
                                    'w-12 h-12 rounded-lg flex items-center justify-center mx-auto',
                                    'font-bold text-white',
                                    getHeatmapColor(value)
                                  )}>
                                    {value.toFixed(1)}
                                  </div>
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Legend */}
                  <div className="mt-6 flex items-center justify-center gap-4 text-sm">
                    <span className="text-muted-foreground">Legenda:</span>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-orange-500" />
                      <span>1.0-2.5</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-yellow-500" />
                      <span>2.5-3.5</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-yellow-400" />
                      <span>3.5-4.0</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-green-400" />
                      <span>4.0-4.5</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-green-500" />
                      <span>4.5+</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default DashboardMockup;
