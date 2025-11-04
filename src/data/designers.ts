export interface Designer {
  id: string;
  name: string;
  tagline: string;
  specialization: string[];
  location: string;
  priceRange: string;
  rating: number;
  image: string;
  style: string[];
  budget: number; // 1-4 ($-$$$$)
  featured: boolean;
}

export const mockDesigners: Designer[] = [
  {
    id: "1",
    name: "Priya Sharma",
    tagline: "Minimalist fashion designer crafting timeless elegance",
    specialization: ["Fashion", "Branding"],
    location: "Mumbai, India",
    priceRange: "$$$",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
    style: ["Minimal", "Elegant"],
    budget: 3,
    featured: true,
  },
  {
    id: "2",
    name: "Arjun Patel",
    tagline: "Bold designer pushing creative boundaries",
    specialization: ["UI/UX", "Motion"],
    location: "Bangalore, India",
    priceRange: "$$",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    style: ["Bold", "Modern"],
    budget: 2,
    featured: false,
  },
  {
    id: "3",
    name: "Neha Kapoor",
    tagline: "Creating playful brand identities that inspire",
    specialization: ["Branding", "Fashion"],
    location: "Delhi, India",
    priceRange: "$$$$",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
    style: ["Playful", "Bold"],
    budget: 4,
    featured: true,
  },
  {
    id: "4",
    name: "Vikram Singh",
    tagline: "Modern aesthetics meet traditional craftsmanship",
    specialization: ["Fashion", "Packaging"],
    location: "Jaipur, India",
    priceRange: "$$$",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
    style: ["Modern", "Elegant"],
    budget: 3,
    featured: false,
  },
  {
    id: "5",
    name: "Aisha Khan",
    tagline: "Elegant UI/UX designer with a minimalist touch",
    specialization: ["UI/UX", "Branding"],
    location: "Hyderabad, India",
    priceRange: "$$",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop",
    style: ["Minimal", "Elegant"],
    budget: 2,
    featured: false,
  },
  {
    id: "6",
    name: "Rohan Desai",
    tagline: "Bold fashion statements for the modern era",
    specialization: ["Fashion", "Motion"],
    location: "Pune, India",
    priceRange: "$$$",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop",
    style: ["Bold", "Modern"],
    budget: 3,
    featured: true,
  },
  {
    id: "7",
    name: "Kavya Reddy",
    tagline: "Playful designs with a touch of sophistication",
    specialization: ["Branding", "Packaging"],
    location: "Chennai, India",
    priceRange: "$$",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=500&fit=crop",
    style: ["Playful", "Modern"],
    budget: 2,
    featured: false,
  },
  {
    id: "8",
    name: "Siddharth Joshi",
    tagline: "Minimalist UI architect for digital experiences",
    specialization: ["UI/UX", "Motion"],
    location: "Ahmedabad, India",
    priceRange: "$$$$",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=500&fit=crop",
    style: ["Minimal", "Modern"],
    budget: 4,
    featured: true,
  },
];
