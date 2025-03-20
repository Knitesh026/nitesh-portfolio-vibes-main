
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <div className="glass rounded-xl shadow-lg p-8 md:p-12 max-w-md w-full text-center">
        <h1 className="text-9xl font-display font-bold text-primary/20 mb-4">404</h1>
        <h2 className="text-2xl font-display font-medium mb-4">Page Not Found</h2>
        <p className="text-muted-foreground mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <a 
          href="/" 
          className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium shadow-sm hover:shadow transition-all"
        >
          <Home size={18} className="mr-2" />
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
