import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { DepartmentCard } from '@/components/DepartmentCard';
import { departments } from '@/data/departments';
import { branding } from '@/config/branding';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(null);
  const actionButtonsRef = useRef<HTMLDivElement>(null);

  // Scroll to action buttons when department is selected
  useEffect(() => {
    if (selectedDepartment && actionButtonsRef.current) {
      setTimeout(() => {
        actionButtonsRef.current?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }, 150);
    }
  }, [selectedDepartment]);

  const handleContinue = () => {
    if (selectedDepartment) {
      navigate(`/assessment/${selectedDepartment}`);
    }
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-accent/30 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      </div>

      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-md sticky top-0 z-50 relative">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h1 className="font-bold text-lg text-foreground">{branding.appName}</h1>
          </div>
          
{/* Logowanie tymczasowo wyłączone */}
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 relative">
        <div className="container mx-auto text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            {branding.tagline}
          </h1>
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Sprawdź swoje kompetencje, zidentyfikuj obszary do rozwoju 
            i zaplanuj kolejne kroki w karierze.
          </p>
        </div>
      </section>

      {/* Department Selection */}
      <section className="pb-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-2">Wybierz swój dział</h2>
          <p className="text-muted-foreground text-center mb-8">
            Kliknij na kartę działu, w którym pracujesz
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {departments.map((dept) => (
              <DepartmentCard
                key={dept.id}
                department={dept}
                onClick={() => setSelectedDepartment(dept.id)}
                isSelected={selectedDepartment === dept.id}
              />
            ))}
          </div>

          {/* Action Buttons */}
          {selectedDepartment && (
            <div 
              ref={actionButtonsRef}
              className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in"
            >
              <Button
                size="lg"
                onClick={() => handleContinue()}
                className="w-full sm:w-auto"
              >
                Rozpocznij
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-secondary/50">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-semibold mb-2">Samoocena kompetencji</h3>
              <p className="text-sm text-muted-foreground">
                Oceń swoje umiejętności w porównaniu z wymaganiami na Twoim stanowisku
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-semibold mb-2">Wizualizacja wyników</h3>
              <p className="text-sm text-muted-foreground">
                Zobacz swój profil kompetencji na interaktywnych wykresach
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📄</span>
              </div>
              <h3 className="font-semibold mb-2">Raport PDF</h3>
              <p className="text-sm text-muted-foreground">
                Pobierz szczegółowy raport ze ścieżką rozwoju
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} {branding.appName}. Wszystkie prawa zastrzeżone.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
