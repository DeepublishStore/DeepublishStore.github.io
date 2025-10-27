import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, BookOpen } from "lucide-react";
import book1 from "@/assets/book1.jpg";
import book2 from "@/assets/book2.jpg";
import book3 from "@/assets/book3.jpg";

const freeBooks = [
  {
    id: "1",
    title: "Introduction to Information Systems",
    description: "A comprehensive guide to understanding modern information systems",
    image: book1,
    pages: 120,
    downloads: 5420,
  },
  {
    id: "2",
    title: "Digital Literacy Basics",
    description: "Essential skills for navigating the digital world",
    image: book2,
    pages: 95,
    downloads: 3890,
  },
  {
    id: "3",
    title: "AI for Beginners",
    description: "Your first steps into artificial intelligence",
    image: book3,
    pages: 150,
    downloads: 7250,
  },
];

const FreeBooks = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-gradient-to-br from-secondary/20 via-background to-primary/20 py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Free Books</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Access our collection of free educational resources - no purchase necessary
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {freeBooks.map((book) => (
              <Card key={book.id} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-[3/4] bg-muted">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      FREE
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{book.title}</h3>
                  <p className="text-muted-foreground mb-4">{book.description}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4" />
                      <span>{book.pages} pages</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Download className="h-4 w-4" />
                      <span>{book.downloads.toLocaleString()} downloads</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button className="w-full" variant="gradient">
                    <Download className="mr-2 h-4 w-4" />
                    Download Free
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

export default FreeBooks;
