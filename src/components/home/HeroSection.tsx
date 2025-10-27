import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.jpg";

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 via-background to-primary/20" />
      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-block">
              <span className="bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-full text-sm font-semibold">
                🔥 PAYDAY SALE - UP TO 90% OFF
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Discover Your Next
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Great Read
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Explore our vast collection of academic and professional books. Quality publications for education, research, and professional development.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="gradient">
                <Link to="/shop">
                  Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/promotions">View Promotions</Link>
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Books Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Readers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">4.8★</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>
          <div className="relative animate-in fade-in slide-in-from-right duration-700">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroBanner}
                alt="Books collection"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
