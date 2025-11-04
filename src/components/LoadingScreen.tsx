import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const duration = 3000;
    const interval = 30;
    const increment = (interval / duration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setIsComplete(true);
          // Start the slide-up animation and then call onComplete
          setTimeout(() => {
            onComplete();
          }, 800); // Match this with the slide-up duration
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-all duration-700 ease-in-out ${isComplete ? 'opacity-0 -translate-y-10' : 'opacity-100'}`}>
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-primary/10 animate-float" />
        <div className="absolute bottom-32 right-32 w-24 h-24 rounded-full bg-primary/5 animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 right-20 w-40 h-40 rounded-full bg-primary/5 animate-float" style={{ animationDelay: "2s" }} />
      </div>

      {/* Main content */}
      <div className="relative text-center space-y-8 animate-slide-up">
        <div className="space-y-6">
          <div className="flex justify-center">
            <img 
              src="/sewna.png" 
              alt="SEWNA" 
              className="h-60 w-auto object-contain"
            />
          </div>
          <p className="text-xl text-muted-foreground font-medium">
            Designer Marketplace
          </p>
        </div>

        {/* Progress counter */}
        <div className="space-y-4">
          <div className="text-6xl font-black text-primary">
            {Math.round(progress)}%
          </div>
          <div className="w-64 h-2 mx-auto bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
