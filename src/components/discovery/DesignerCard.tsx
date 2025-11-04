import { Star, MapPin, DollarSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Designer } from "@/data/designers";
import { useState } from "react";

interface DesignerCardProps {
  designer: Designer;
}

export const DesignerCard = ({ designer }: DesignerCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-card rounded-3xl overflow-hidden border border-border/40 transition-all duration-500 hover:shadow-hover hover:-translate-y-1 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Featured badge */}
      {designer.featured && (
        <div className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-xs font-semibold">
          Featured
        </div>
      )}

      {/* Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-muted/30">
        <img
          src={designer.image}
          alt={designer.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        
        {/* Hover overlay */}
        <div
          className={`absolute inset-0 bg-primary/10 backdrop-blur-[2px] flex items-center justify-center transition-all duration-500 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Button
            size="lg"
            className="bg-white text-foreground hover:bg-white/95 rounded-2xl font-semibold shadow-xl px-6 py-2.5 transition-all"
          >
            View Portfolio
          </Button>
        </div>

        {/* Rating badge */}
        <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md rounded-full px-3 py-1.5 flex items-center gap-1.5 shadow-sm">
          <Star className="w-3.5 h-3.5 fill-primary text-primary" />
          <span className="text-sm font-semibold text-foreground">{designer.rating}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-foreground">
            {designer.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {designer.tagline}
          </p>
        </div>

        {/* Specializations */}
        <div className="flex flex-wrap gap-2">
          {designer.specialization.map((spec) => (
            <Badge
              key={spec}
              variant="secondary"
              className="rounded-full text-xs font-medium bg-muted/50 hover:bg-muted"
            >
              {spec}
            </Badge>
          ))}
        </div>

        {/* Location and price */}
        <div className="flex items-center justify-between text-sm pt-2 border-t border-border/40">
          <div className="flex items-center gap-1.5 text-muted-foreground">
            <MapPin className="w-3.5 h-3.5" />
            <span>{designer.location.split(",")[0]}</span>
          </div>
          <div className="flex items-center gap-1 text-foreground font-semibold">
            <DollarSign className="w-3.5 h-3.5 text-primary" />
            <span>{designer.priceRange}</span>
          </div>
        </div>
      </div>

      {/* Hover border glow */}
      <div
        className={`absolute inset-0 border-2 border-primary rounded-3xl pointer-events-none transition-opacity duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{ boxShadow: "0 0 30px rgba(0, 182, 127, 0.3)" }}
      />
    </div>
  );
};
