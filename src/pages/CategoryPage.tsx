import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookCard } from "@/components/home/BookCard";
import { useParams } from "react-router-dom";
import book1 from "@/assets/book1.jpg";
import book2 from "@/assets/book2.jpg";
import book3 from "@/assets/book3.jpg";
import book4 from "@/assets/book4.jpg";

const categoryData: Record<string, { title: string; description: string }> = {
  technology: {
    title: "Technology Books",
    description: "Explore our collection of technology, programming, AI, and computer science books",
  },
  business: {
    title: "Business Books",
    description: "Discover books on management, finance, economics, and entrepreneurship",
  },
  education: {
    title: "Education Books",
    description: "Academic textbooks and educational resources for students and educators",
  },
  law: {
    title: "Law Books",
    description: "Legal studies, practice guides, and jurisprudence publications",
  },
  research: {
    title: "Research Books",
    description: "Research methodology, academic writing, and scholarly publications",
  },
  economics: {
    title: "Economics Books",
    description: "Economic theory, policy, and practical applications",
  },
};

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = categoryData[slug || ""] || { title: "Category", description: "" };

  const books = [
    { id: "1", title: "Information Systems Analysis and Design", price: 77, originalPrice: 150, rating: 5, image: book1, onSale: true },
    { id: "2", title: "Cyber Notary and Digital Signatures", price: 136, originalPrice: 250, rating: 5, image: book2, onSale: true },
    { id: "3", title: "Artificial Intelligence and Law", price: 105, originalPrice: 200, rating: 5, image: book3, onSale: true },
    { id: "4", title: "AI Implementation Guide", price: 158, originalPrice: 280, rating: 5, image: book4, onSale: true },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-gradient-to-br from-secondary/20 via-background to-primary/20 py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.title}</h1>
            <p className="text-lg text-muted-foreground">{category.description}</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {books.map((book) => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoryPage;
