import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Heart } from "lucide-react";
import { IslandNavbar } from "./IslandNavbar";
import { DesignerCard } from "./DesignerCard";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { mockDesigners } from "@/data/designers";
import ModelGallery from "./ModelGallery";

export const DiscoveryPage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [style, setStyle] = useState("all");
  const [sort, setSort] = useState("relevance");
  const [currency, setCurrency] = useState("USD");

  // Filter designers
  const filteredDesigners = mockDesigners.filter((designer) => {
    const matchesSearch =
      search === "" ||
      designer.name.toLowerCase().includes(search.toLowerCase()) ||
      designer.tagline.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "all" || designer.specialization.includes(category);

    const matchesStyle =
      style === "all" || designer.style.includes(style);

    return matchesSearch && matchesCategory && matchesStyle;
  });

  // Sort designers
  const sortedDesigners = [...filteredDesigners].sort((a, b) => {
    switch (sort) {
      case "rating":
        return b.rating - a.rating;
      case "price-low":
        return a.budget - b.budget;
      case "price-high":
        return b.budget - a.budget;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Model Gallery */}
      <div className="h-screen w-full">
        <ModelGallery />
      </div>
      
      {/* Spacer */}
      <div className="h-16 bg-white"></div>
      
      {/* Logo in top-left corner */}
      <Link to="/" className="fixed top-4 left-6 z-50">
        <img src="/sewna.png" alt="SEWNA" className="h-20 w-auto" />
      </Link>

      {/* Sidebar Menu */}
      <div className="fixed top-4 right-6 z-50">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12 border border-border/50 hover:border-primary hover:bg-primary/5 transition-all"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="w-80">
            <nav className="space-y-6 mt-8">
              <div className="space-y-4">
                <Button
                  variant="ghost"
                  className="w-full justify-start text-lg font-semibold bg-primary/10 text-primary hover:bg-primary/20"
                >
                  Explore
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-lg"
                >
                  Chats
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-lg"
                >
                  Orders
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-lg"
                >
                  Custom Requests
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-lg"
                >
                  Profile
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start text-lg flex items-center gap-2"
                >
                  <Heart className="w-5 h-5" />
                  Favourites
                </Button>
              </div>

              <div className="pt-6 border-t">
                <Button variant="outline" className="w-full">
                  Support
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Island Navbar */}
      <IslandNavbar
        search={search}
        onSearchChange={setSearch}
        category={category}
        onCategoryChange={setCategory}
        style={style}
        onStyleChange={setStyle}
        sort={sort}
        onSortChange={setSort}
        currency={currency}
        onCurrencyChange={setCurrency}
      />

      {/* Designers Grid */}
      <div className="px-8 pb-24">
        {sortedDesigners.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {sortedDesigners.map((designer) => (
              <DesignerCard key={designer.id} designer={designer} />
            ))}
          </div>
        ) : (
          <div className="text-center py-32 space-y-6 max-w-md mx-auto">
            <div className="text-5xl opacity-40">🔍</div>
            <h3 className="text-xl font-semibold text-foreground">No designers found</h3>
            <p className="text-muted-foreground text-sm">
              Try adjusting your filters to see more results
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
