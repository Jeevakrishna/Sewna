import { useState } from "react";
import { QuizStart } from "./QuizStart";
import { QuizQuestion } from "./QuizQuestion";
import { QuizResults } from "./QuizResults";
import { Designer, mockDesigners } from "@/data/designers";

export type QuizAnswer = {
  projectType: string;
  style: string;
  budget: number;
};

const questions = [
  {
    id: "projectType",
    title: "What type of project do you need?",
    options: [
      { value: "Fashion", emoji: "👗", label: "Fashion Design" },
      { value: "UI/UX", emoji: "💻", label: "UI/UX Design" },
      { value: "Branding", emoji: "🎨", label: "Brand Identity" },
      { value: "Motion", emoji: "🎬", label: "Motion Graphics" },
      { value: "Packaging", emoji: "📦", label: "Packaging Design" },
    ],
  },
  {
    id: "style",
    title: "What style speaks to you?",
    options: [
      { value: "Minimal", emoji: "⚪", label: "Minimal" },
      { value: "Bold", emoji: "⚡", label: "Bold" },
      { value: "Elegant", emoji: "✨", label: "Elegant" },
      { value: "Modern", emoji: "🚀", label: "Modern" },
      { value: "Playful", emoji: "🎪", label: "Playful" },
    ],
  },
  {
    id: "budget",
    title: "What's your budget range?",
    options: [
      { value: "1", emoji: "$", label: "Budget", description: "Under $500" },
      { value: "2", emoji: "$$", label: "Standard", description: "$500 - $1,500" },
      { value: "3", emoji: "$$$", label: "Premium", description: "$1,500 - $5,000" },
      { value: "4", emoji: "$$$$", label: "Luxury", description: "$5,000+" },
    ],
  },
];

export const QuizFlow = () => {
  const [step, setStep] = useState<"start" | "questions" | "results">("start");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Partial<QuizAnswer>>({});
  const [matches, setMatches] = useState<Array<{ designer: Designer; score: number }>>([]);

  const handleStart = () => {
    setStep("questions");
  };

  const handleAnswer = (questionId: string, value: string) => {
    const newAnswers = { ...answers, [questionId]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      // Calculate matches
      calculateMatches(newAnswers as QuizAnswer);
      setStep("results");
    }
  };

  const calculateMatches = (finalAnswers: QuizAnswer) => {
    const scoredDesigners = mockDesigners.map((designer) => {
      let score = 0;

      // Style match (40 points)
      if (designer.style.includes(finalAnswers.style)) {
        score += 40;
      }

      // Budget match (30 points)
      const budgetDiff = Math.abs(designer.budget - Number(finalAnswers.budget));
      score += Math.max(0, 30 - budgetDiff * 10);

      // Project type match (20 points)
      if (designer.specialization.includes(finalAnswers.projectType)) {
        score += 20;
      }

      // Rating bonus (10 points)
      score += (designer.rating / 5) * 10;

      // Featured bonus
      if (designer.featured) {
        score += 10;
      }

      return { designer, score };
    });

    // Filter and sort by score
    const topMatches = scoredDesigners
      .filter((match) => match.score > 50)
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);

    setMatches(topMatches);
  };

  const handleRestart = () => {
    setStep("start");
    setCurrentQuestion(0);
    setAnswers({});
    setMatches([]);
  };

  if (step === "start") {
    return <QuizStart onStart={handleStart} />;
  }

  if (step === "questions") {
    return (
      <QuizQuestion
        question={questions[currentQuestion]}
        currentStep={currentQuestion + 1}
        totalSteps={questions.length}
        onAnswer={handleAnswer}
      />
    );
  }

  return <QuizResults matches={matches} onRestart={handleRestart} />;
};
