import { Department } from '@/types/competency';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface DepartmentCardProps {
  department: Department;
  onClick: () => void;
  isSelected?: boolean;
}

export function DepartmentCard({ department, onClick, isSelected }: DepartmentCardProps) {
  return (
    <Card
      className={cn(
        'cursor-pointer card-hover group overflow-hidden',
        'border-2 transition-all duration-300',
        isSelected 
          ? 'border-primary bg-accent shadow-lg' 
          : 'border-transparent hover:border-primary/30'
      )}
      onClick={onClick}
    >
      <CardContent className="p-6 flex flex-col items-center text-center">
        {/* Pixel Art Icon */}
        <div className="w-32 h-32 mb-4 relative">
          <img
            src={department.icon}
            alt={department.name}
            className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        
        {/* Department Name */}
        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {department.name}
        </h3>
        
        {/* Description */}
        <p className="text-sm text-muted-foreground line-clamp-2">
          {department.description}
        </p>
        
        {/* Positions count badge */}
        <div className="mt-4 px-3 py-1 bg-secondary rounded-full text-xs font-medium text-secondary-foreground">
          {department.positions.length} stanowisk
        </div>
      </CardContent>
    </Card>
  );
}
