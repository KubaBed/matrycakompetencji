import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getDepartmentById } from '@/data/departments';
import { seniorityLevelConfig, SeniorityLevel, Position } from '@/types/competency';
import { branding } from '@/config/branding';
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const PositionSelect = () => {
  const { departmentId } = useParams<{ departmentId: string }>();
  const navigate = useNavigate();
  
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);
  const [selectedLevel, setSelectedLevel] = useState<SeniorityLevel | null>(null);
  
  const department = departmentId ? getDepartmentById(departmentId) : null;
  
  useEffect(() => {
    if (!department) {
      navigate('/');
    }
  }, [department, navigate]);

  if (!department) {
    return null;
  }

  const currentPosition = department.positions.find(p => p.id === selectedPosition);
  const availableLevels = currentPosition?.levels || [];

  const handleContinue = () => {
    if (selectedPosition && selectedLevel) {
      navigate(`/assessment/${departmentId}/${selectedPosition}/${selectedLevel}`);
    }
  };

  const getSeniorityOrder = (level: SeniorityLevel) => seniorityLevelConfig[level].order;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="font-bold text-lg text-foreground">{branding.appName}</h1>
          </div>
          
          <Button variant="ghost" size="sm" onClick={() => navigate('/')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Powrót
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Department Header */}
        <div className="flex items-center gap-4 mb-8">
          <img 
            src={department.icon} 
            alt={department.name}
            className="w-20 h-20 object-contain"
          />
          <div>
            <h1 className="text-3xl font-bold text-foreground">{department.name}</h1>
            <p className="text-muted-foreground">{department.description}</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Position Selection */}
          <div>
            <h2 className="text-xl font-semibold mb-4">1. Wybierz stanowisko</h2>
            <div className="space-y-3">
              {department.positions.map((position) => (
                <Card
                  key={position.id}
                  className={cn(
                    'cursor-pointer transition-all duration-200',
                    'border-2 hover:border-primary/50',
                    selectedPosition === position.id 
                      ? 'border-primary bg-accent' 
                      : 'border-transparent'
                  )}
                  onClick={() => {
                    setSelectedPosition(position.id);
                    setSelectedLevel(null);
                  }}
                >
                  <CardContent className="p-4 flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-foreground">{position.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {position.levels.length} poziomów seniority
                      </p>
                    </div>
                    {selectedPosition === position.id && (
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Seniority Level Selection */}
          <div>
            <h2 className="text-xl font-semibold mb-4">2. Wybierz poziom seniority</h2>
            
            {selectedPosition ? (
              <div className="relative">
                {/* Career Ladder Visualization */}
                <div className="absolute left-6 top-8 bottom-8 w-0.5 bg-border" />
                
                <div className="space-y-4">
                  {availableLevels
                    .sort((a, b) => getSeniorityOrder(b) - getSeniorityOrder(a))
                    .map((level, index) => {
                      const config = seniorityLevelConfig[level];
                      const isSelected = selectedLevel === level;
                      const totalLevels = availableLevels.length;
                      
                      return (
                        <div key={level} className="relative flex items-center gap-4">
                          {/* Ladder dot */}
                          <div 
                            className={cn(
                              'w-12 h-12 rounded-full flex items-center justify-center z-10 transition-all',
                              'border-2 font-bold text-lg',
                              isSelected 
                                ? 'bg-primary border-primary text-primary-foreground scale-110' 
                                : 'bg-card border-border text-muted-foreground hover:border-primary/50'
                            )}
                          >
                            {totalLevels - index}
                          </div>
                          
                          {/* Level card */}
                          <Card
                            className={cn(
                              'flex-1 cursor-pointer transition-all duration-200',
                              'border-2 hover:border-primary/50',
                              isSelected 
                                ? 'border-primary bg-accent shadow-md' 
                                : 'border-transparent'
                            )}
                            onClick={() => setSelectedLevel(level)}
                          >
                            <CardContent className="p-4 flex items-center justify-between">
                              <div>
                                <h3 className="font-semibold text-foreground">{config.name}</h3>
                                <p className="text-sm text-muted-foreground">
                                  Poziom {config.order}
                                </p>
                              </div>
                              {isSelected && (
                                <CheckCircle2 className="w-5 h-5 text-primary" />
                              )}
                            </CardContent>
                          </Card>
                        </div>
                      );
                    })}
                </div>
              </div>
            ) : (
              <Card className="border-dashed">
                <CardContent className="p-8 text-center text-muted-foreground">
                  <p>Najpierw wybierz stanowisko z listy po lewej</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Continue Button */}
        <div className="mt-12 flex justify-center">
          <Button
            size="lg"
            disabled={!selectedPosition || !selectedLevel}
            onClick={handleContinue}
            className="min-w-[200px]"
          >
            Przejdź do samooceny
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </main>
    </div>
  );
};

export default PositionSelect;
