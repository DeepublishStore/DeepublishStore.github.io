
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft } from "lucide-react";

const blogPosts = {
  "1": {
    title: "The Future of AI in Academic Publishing",
    content: "Artificial intelligence is revolutionizing the way we create, distribute, and consume academic content. From automated peer review systems to AI-powered research assistants, the landscape of academic publishing is evolving rapidly. This transformation brings both opportunities and challenges for researchers, publishers, and readers alike.",
    author: "Dr. Sarah Johnson",
    date: "October 25, 2025",
    category: "Technology",
  },
  "2": {
    title: "Top 10 Research Methodology Books for 2025",
    content: "Discover the essential reading list for anyone conducting academic research this year. These books cover everything from quantitative and qualitative methods to mixed-methods approaches and ethical considerations in research.",
    author: "Prof. Michael Chen",
    date: "October 20, 2025",
    category: "Education",
  },
  "3": {
    title: "Digital Transformation in Legal Practice",
    content: "Technology is reshaping the legal profession in unprecedented ways. From AI-powered contract analysis to blockchain-based smart contracts, lawyers must adapt to stay relevant in this digital age.",
    author: "Attorney Lisa Martinez",
    date: "October 15, 2025",
    category: "Law",
  },
  "4": {
    title: "Best Practices for Online Learning",
    content: "Proven strategies to maximize your learning outcomes in digital education environments. Learn about effective time management, engagement techniques, and tools that can enhance your online learning experience.",
    author: "Dr. James Wilson",
    date: "October 10, 2025",
    category: "Education",
  },
  "5": {
    title: "Business Analytics: A Beginner's Guide",
    content: "Everything you need to know to start your journey in business data analysis. From basic statistical concepts to advanced predictive modeling, this guide covers all the essentials.",
    author: "Emma Thompson",
    date: "October 5, 2025",
    category: "Business",
  },
  "6": {
    title: "The Rise of Cybersecurity in Finance",
    content: "Understanding the critical role of cybersecurity in modern financial institutions. As digital banking and fintech solutions grow, so do the security challenges that must be addressed.",
    author: "Robert Davis",
    date: "September 30, 2025",
    category: "Technology",
  },
};

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts[id as keyof typeof blogPosts];

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
            <Button asChild>
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-gradient-to-br from-secondary/20 via-background to-primary/20 py-16">
          <div className="container mx-auto px-4">
            <Button asChild variant="ghost" className="mb-6">
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              {post.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <article className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed">{post.content}</p>
              <p className="text-lg leading-relaxed mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="text-lg leading-relaxed mt-6">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
