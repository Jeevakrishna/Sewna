import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useEffect } from "react";

interface QuizStartProps {
  onStart: () => void;
}

export const QuizStart = ({ onStart }: QuizStartProps) => {
  useEffect(() => {
    // Set the background image
    document.body.style.backgroundImage = "url('/model3.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundAttachment = "fixed";
    
    // Cleanup function to reset the background when component unmounts
    return () => {
      document.body.style.backgroundImage = "";
      document.body.style.backgroundSize = "";
      document.body.style.backgroundPosition = "";
      document.body.style.backgroundAttachment = "";
    };
  }, []);

  return (
    <div className="min-h-screen bg-black/30 bg-blend-overlay flex items-center justify-center p-8 relative">
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 z-0"></div>
      
      {/* Logo */}
      <Link to="/" className="fixed top-6 left-6 z-50">
        <img src="/sewna.png" alt="SEWNA" className="h-16 w-auto" />
      </Link>

      <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-12 shadow-2xl max-w-4xl w-full mx-6">
        <div className="max-w-2xl mx-auto text-center space-y-8 animate-fade-up relative z-10 text-gray-900">
          <div className="inline-block p-4 bg-primary/10 rounded-full animate-glow">
            <Sparkles className="w-16 h-16 text-primary" />
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-black tracking-tight leading-tight">
              Let's find your perfect match
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg mx-auto">
              Answer a few quick questions and we'll connect you with designers who match your style and needs
            </p>
          </div>

          <div className="flex flex-col items-center gap-5 pt-4">
            <Button
              size="lg"
              onClick={onStart}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl px-12 py-6 text-xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Start Match Quiz
            </Button>
            <p className="text-sm text-gray-500">
              Takes less than 2 minutes!!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
