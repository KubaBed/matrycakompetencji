import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Ups! Strona nie została znaleziona</p>
        <Button onClick={() => navigate('/')}>
          <Home className="w-4 h-4 mr-2" />
          Wróć do strony głównej
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
