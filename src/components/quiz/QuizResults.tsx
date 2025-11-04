import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, MessageCircle } from "lucide-react";
import { Designer } from "@/data/designers";

interface QuizResultsProps {
  matches: Array<{ designer: Designer; score: number }>;
  onRestart: () => void;
}

export const QuizResults = ({ matches, onRestart }: QuizResultsProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background p-8 relative">
      {/* Logo */}
      <Link to="/" className="fixed top-6 left-6 z-50">
        <img src="/sewna.png" alt="SEWNA" className="h-16 w-auto" />
      </Link>

      <div className="max-w-6xl mx-auto pt-24 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 animate-fade-up">
          <div className="text-6xl mb-4">✨</div>
          <h1 className="text-6xl font-black tracking-tight">
            Your Perfect Matches
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We found {matches.length} designers who match your style and needs
          </p>
        </div>

        {/* Matches */}
        {matches.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {matches.map(({ designer, score }, index) => (
              <div
                key={designer.id}
                className="bg-card rounded-2xl overflow-hidden border-2 border-primary shadow-glow animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Match percentage badge */}
                <div className="relative">
                  <img
                    src={designer.image}
                    alt={designer.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground rounded-full px-4 py-2 font-bold text-lg shadow-lg">
                    {Math.round(score)}% Match
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="text-sm font-bold">{designer.rating}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-black mb-2">{designer.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {designer.tagline}
                    </p>
                  </div>

                  {/* Specializations */}
                  <div className="flex flex-wrap gap-2">
                    {designer.specialization.map((spec) => (
                      <Badge
                        key={spec}
                        variant="secondary"
                        className="rounded-full"
                      >
                        {spec}
                      </Badge>
                    ))}
                  </div>

                  {/* Location and price */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{designer.location.split(",")[0]}</span>
                    </div>
                    <div className="text-foreground font-semibold">
                      {designer.priceRange}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 pt-2">
                    <Button
                      className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl font-bold"
                    >
                      View Profile
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-2xl border-2 hover:border-primary hover:bg-primary/5"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 space-y-4">
            <div className="text-6xl">😔</div>
            <h3 className="text-2xl font-bold">No perfect matches yet</h3>
            <p className="text-muted-foreground">
              Try adjusting your preferences or browse all designers
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <Button
            size="lg"
            variant="outline"
            onClick={onRestart}
            className="rounded-2xl px-8 py-6 text-lg border-2 hover:border-primary hover:bg-primary/5"
          >
            Take Quiz Again
          </Button>
          <Button
            size="lg"
            onClick={() => navigate("/discover")}
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-2xl px-8 py-6 text-lg font-bold"
          >
            Browse All Designers
          </Button>
        </div>
      </div>
    </div>
  );
};
