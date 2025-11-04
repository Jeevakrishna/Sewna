import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface IslandNavbarProps {
  search: string;
  onSearchChange: (value: string) => void;
  category: string;
  onCategoryChange: (value: string) => void;
  style: string;
  onStyleChange: (value: string) => void;
  sort: string;
  onSortChange: (value: string) => void;
  currency: string;
  onCurrencyChange: (value: string) => void;
}

export const IslandNavbar = ({
  search,
  onSearchChange,
  category,
  onCategoryChange,
  style,
  onStyleChange,
  sort,
  onSortChange,
  currency = 'USD',
  onCurrencyChange = () => {},
}: IslandNavbarProps) => {
  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-40 animate-fade-in px-4">
      <div className="bg-card/98 backdrop-blur-xl rounded-3xl shadow-soft border border-border/50 p-5 max-w-5xl">
        <div className="flex items-center gap-3 flex-wrap">
          {/* Search */}
          <div className="relative flex-1 min-w-[240px]">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search designers..."
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-11 h-11 rounded-2xl border-border/50 focus:border-primary focus:ring-1 focus:ring-primary bg-background/50 transition-all"
            />
          </div>

          {/* Category */}
          <Select value={category} onValueChange={onCategoryChange}>
            <SelectTrigger className="w-[140px] h-11 rounded-2xl border-border/50 focus:border-primary focus:ring-1 focus:ring-primary bg-background/50 transition-all">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="Fashion">Fashion</SelectItem>
              <SelectItem value="UI/UX">UI/UX</SelectItem>
              <SelectItem value="Branding">Branding</SelectItem>
              <SelectItem value="Motion">Motion</SelectItem>
              <SelectItem value="Packaging">Packaging</SelectItem>
            </SelectContent>
          </Select>

          {/* Style */}
          <Select value={style} onValueChange={onStyleChange}>
            <SelectTrigger className="w-[140px] h-11 rounded-2xl border-border/50 focus:border-primary focus:ring-1 focus:ring-primary bg-background/50 transition-all">
              <SelectValue placeholder="Style" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Styles</SelectItem>
              <SelectItem value="Modern">Modern</SelectItem>
              <SelectItem value="Minimal">Minimal</SelectItem>
              <SelectItem value="Bold">Bold</SelectItem>
              <SelectItem value="Elegant">Elegant</SelectItem>
              <SelectItem value="Playful">Playful</SelectItem>
            </SelectContent>
          </Select>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <Select value={sort} onValueChange={onSortChange}>
              <SelectTrigger className="w-[140px] h-11 rounded-2xl border-border/50 focus:border-primary focus:ring-1 focus:ring-primary bg-background/50 transition-all">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Relevance</SelectItem>
                <SelectItem value="rating">Top Rated</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>

            <Select value={currency} onValueChange={onCurrencyChange}>
              <SelectTrigger className="w-[100px] h-11 rounded-2xl border-border/50 focus:border-primary focus:ring-1 focus:ring-primary bg-background/50 transition-all">
                <SelectValue placeholder="$" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="USD">USD $</SelectItem>
                <SelectItem value="INR">INR ₹</SelectItem>
                <SelectItem value="JPY">JPY ¥</SelectItem>
                <SelectItem value="EUR">EUR €</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};
