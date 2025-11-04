import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface SplitZoneProps {
  type: "designer" | "client";
}

export const SplitZone = ({ type }: SplitZoneProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAnyHovered, setIsAnyHovered] = useState(false);
  const navigate = useNavigate();

  const isDesigner = type === "designer";

  // Listen for hover events from both sections
  useEffect(() => {
    const handleHover = (e: Event) => {
      const customEvent = e as CustomEvent;
      setIsAnyHovered(customEvent.detail.isHovered);
    };

    window.addEventListener('sectionHover', handleHover as EventListener);
    return () => {
      window.removeEventListener('sectionHover', handleHover as EventListener);
    };
  }, []);

  const handleClick = () => {
    if (isDesigner) {
      // Future: Navigate to portfolio creation
      console.log("Designer portfolio creation - coming soon");
    } else {
      navigate("/discover");
    }
  };

  // Get the parent container to control hover state for both sections
  return (
    <div
      className={`relative overflow-hidden transition-all duration-700 ease-out ${
        isHovered ? "flex-[2]" : "flex-1"
      }`}
      onMouseEnter={() => {
        // When hovering over this section, set isHovered to true for both sections
        const event = new CustomEvent('sectionHover', { detail: { isHovered: true } });
        window.dispatchEvent(event);
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        // When leaving this section, set isHovered to false for both sections
        const event = new CustomEvent('sectionHover', { detail: { isHovered: false } });
        window.dispatchEvent(event);
        setIsHovered(false);
      }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        {isDesigner ? (
          <div
            className={`w-full h-full bg-cover bg-center transition-all duration-700 ${
              isHovered ? 'grayscale-0' : 'grayscale'
            }`}
            style={{
              backgroundImage: "url('/designer.jpeg')",
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'
            }}
          />
        ) : (
          <div 
            className="w-full h-full bg-cover bg-center transition-all duration-700"
            style={{
              backgroundImage: "url('/client.png')",
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              filter: isHovered ? 'grayscale(0%)' : 'grayscale(100%)',
              transition: 'filter 0.7s ease',
            }}
          />
        )}
        <div className={`absolute inset-0 transition-all duration-700 ${
          isHovered ? 'bg-transparent' : 'bg-gradient-to-t from-black/60 to-transparent'
        }`} />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center p-12 space-y-8">
        <div
          className={`transition-all duration-700 ${
            isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-6xl font-black text-black mb-6 leading-tight drop-shadow-lg">
            {isDesigner ? "I'm a Designer" : "I Need a Designer"}
          </h2>
          <p className="text-2xl md:text-3xl text-black/90 mb-10 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow">
            {isDesigner
              ? "Showcase your portfolio and connect with clients who value your craft"
              : "Discover talented designers and bring your creative vision to life"}
          </p>
          <Button
            size="lg"
            onClick={handleClick}
            className="bg-[#00b67f] hover:bg-[#00996b] text-white text-xl md:text-2xl px-10 py-7 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            {isDesigner ? "Create Portfolio" : "Browse Designers"}
          </Button>
        </div>
      </div>




      {/* Logo - Only show in designer section when not hovered */}
      {!isAnyHovered && isDesigner && (
        <Link to="/" className="fixed top-6 left-6 z-50">
          <img src="/sewna.png" alt="SEWNA" className="h-16 w-auto" />
        </Link>
      )}

      {/* Designer section - image on rightmost with centered top text */}
      {!isAnyHovered && isDesigner && (
        <div className="absolute inset-0 flex flex-col items-end justify-center pointer-events-none">
          <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 text-6xl md:text-8xl font-black text-[#00b67f] [text-shadow:_0_9px_10px_rgba(0,0,0,0.9)]">
  I'M A
</div><img 
  src="/d1.png" 
  alt="Designer" 
  className="h-[900px] sm:h-[950px] md:h-[960px] w-auto object-contain opacity-90 transition-all duration-300 hover:scale-105 translate-y-[160px]"
/>

        </div>
      )}

      {/* Client section - image on leftmost with centered top text */}
      {!isAnyHovered && !isDesigner && (
        <div className="absolute inset-0 flex flex-col items-start justify-center pointer-events-none">
          <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 text-6xl md:text-8xl font-black text-[#00b67f] [text-shadow:_0_9px_10px_rgba(0,0,0,0.9)]">
  I NEED A
</div>

<img 
  src="/d2.png"
  alt="Client"
  className="h-[900px] sm:h-[950px] md:h-[960px] w-auto object-contain opacity-90 transition-all duration-300 hover:scale-105 translate-y-[160px]"
/>

        </div>
      )}




    </div>
  );
};
