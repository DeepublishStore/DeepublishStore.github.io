import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: "1",
    title: "The Future of AI in Academic Publishing",
    excerpt: "Explore how artificial intelligence is revolutionizing the way we create, distribute, and consume academic content...",
    author: "Dr. Sarah Johnson",
    date: "October 25, 2025",
    category: "Technology",
  },
  {
    id: "2",
    title: "Top 10 Research Methodology Books for 2025",
    excerpt: "Discover the essential reading list for anyone conducting academic research this year...",
    author: "Prof. Michael Chen",
    date: "October 20, 2025",
    category: "Education",
  },
  {
    id: "3",
    title: "Digital Transformation in Legal Practice",
    excerpt: "How technology is reshaping the legal profession and what it means for future lawyers...",
    author: "Attorney Lisa Martinez",
    date: "October 15, 2025",
    category: "Law",
  },
  {
    id: "4",
    title: "Best Practices for Online Learning",
    excerpt: "Proven strategies to maximize your learning outcomes in digital education environments...",
    author: "Dr. James Wilson",
    date: "October 10, 2025",
    category: "Education",
  },
  {
    id: "5",
    title: "Business Analytics: A Beginner's Guide",
    excerpt: "Everything you need to know to start your journey in business data analysis...",
    author: "Emma Thompson",
    date: "October 5, 2025",
    category: "Business",
  },
  {
    id: "6",
    title: "The Rise of Cybersecurity in Finance",
    excerpt: "Understanding the critical role of cybersecurity in modern financial institutions...",
    author: "Robert Davis",
    date: "September 30, 2025",
    category: "Technology",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-gradient-to-br from-secondary/20 via-background to-primary/20 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Insights, tips, and news from the world of academic publishing
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20" />
                <CardContent className="p-6">
                  <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-3">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-bold mb-3 line-clamp-2 hover:text-primary transition-colors">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="text-muted-foreground line-clamp-3 mb-4">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="px-6 pb-6">
                  <Button asChild variant="ghost" className="w-full group">
                    <Link to={`/blog/${post.id}`}>
                      Read More 
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
