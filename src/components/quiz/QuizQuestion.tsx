import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface QuizQuestionProps {
  question: {
    id: string;
    title: string;
    options: Array<{
      value: string;
      emoji: string;
      label: string;
      description?: string;
    }>;
  };
  currentStep: number;
  totalSteps: number;
  onAnswer: (questionId: string, value: string) => void;
}

export const QuizQuestion = ({
  question,
  currentStep,
  totalSteps,
  onAnswer,
}: QuizQuestionProps) => {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8 relative">
      {/* Logo */}
      <Link to="/" className="fixed top-6 left-6 z-50">
        <img src="/sewna.png" alt="SEWNA" className="h-16 w-auto" />
      </Link>

      <div className="max-w-3xl w-full space-y-12">
        {/* Progress bar */}
        <div className="space-y-2">
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Question {currentStep} of {totalSteps}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="text-center space-y-12 animate-fade-up">
          <h2 className="text-5xl font-black tracking-tight">
            {question.title}
          </h2>

          {/* Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {question.options.map((option) => (
              <Button
                key={option.value}
                variant="outline"
                onClick={() => onAnswer(question.id, option.value)}
                className="h-auto p-8 flex flex-col items-center gap-4 rounded-2xl border-2 hover:border-primary hover:bg-primary/5 hover:scale-105 transition-all duration-300 group"
              >
                <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
                  {option.emoji}
                </div>
                <div className="space-y-1">
                  <div className="text-lg font-bold">{option.label}</div>
                  {option.description && (
                    <div className="text-sm text-muted-foreground">
                      {option.description}
                    </div>
                  )}
                </div>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
