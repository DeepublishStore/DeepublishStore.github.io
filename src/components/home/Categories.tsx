import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { BookOpen, Briefcase, GraduationCap, Scale, Code, TrendingUp } from "lucide-react";

const categories = [
  {
    name: "Technology",
    icon: Code,
    count: 120,
    color: "from-blue-500 to-cyan-500",
    slug: "technology",
  },
  {
    name: "Business",
    icon: Briefcase,
    count: 85,
    color: "from-orange-500 to-red-500",
    slug: "business",
  },
  {
    name: "Education",
    icon: GraduationCap,
    count: 150,
    color: "from-green-500 to-emerald-500",
    slug: "education",
  },
  {
    name: "Law",
    icon: Scale,
    count: 65,
    color: "from-purple-500 to-pink-500",
    slug: "law",
  },
  {
    name: "Research",
    icon: BookOpen,
    count: 95,
    color: "from-yellow-500 to-orange-500",
    slug: "research",
  },
  {
    name: "Economics",
    icon: TrendingUp,
    count: 70,
    color: "from-indigo-500 to-blue-500",
    slug: "economics",
  },
];

export const Categories = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Browse by Category</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse collection of books across multiple disciplines
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link key={category.slug} to={`/categories/${category.slug}`}>
                <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.count} books</p>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
