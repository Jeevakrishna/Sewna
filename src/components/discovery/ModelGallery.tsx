import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const ModelGallery = () => {
  const navigate = useNavigate();
  const models = [
    { id: 1, name: 'Model 1', image: '/model1.jpg' },
    { id: 2, name: 'Model 2', image: '/model2.jpg' },
    { id: 3, name: 'Model 3', image: '/model3.jpg' },
    { id: 4, name: 'Model 4', image: '/model4.jpg' },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === models.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? models.length - 1 : prev - 1));
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <div 
      className="relative w-full h-screen overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Slides */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {models.map((model) => (
          <div 
            key={model.id}
            className="w-full flex-shrink-0 h-full relative"
          >
            <img 
              src={model.image} 
              alt={model.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex flex-col items-center justify-center text-center px-4">
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 drop-shadow-lg">
                Discover Top Designers
              </h2>
              <p className="text-2xl md:text-3xl text-white/90 mb-10 max-w-3xl drop-shadow">
                Connect with talented designers who bring your creative vision to life
              </p>
              <Button 
                onClick={() => navigate('/quiz')}
                className="bg-[#00b67f] hover:bg-[#00996b] text-white text-xl md:text-2xl px-10 py-7 rounded-2xl font-bold transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                Find Your Perfect Match
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {models.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ModelGallery;
