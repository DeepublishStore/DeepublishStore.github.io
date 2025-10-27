import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookCard } from "@/components/home/BookCard";
import book1 from "@/assets/book1.jpg";
import book2 from "@/assets/book2.jpg";
import book3 from "@/assets/book3.jpg";
import book4 from "@/assets/book4.jpg";
import book5 from "@/assets/book5.jpg";
import book6 from "@/assets/book6.jpg";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

const allBooks = [
  { id: "1", title: "Information Systems Analysis and Design", price: 77, originalPrice: 150, rating: 5, image: book1, onSale: true },
  { id: "2", title: "Cyber Notary and Digital Signatures", price: 136, originalPrice: 250, rating: 5, image: book2, onSale: true },
  { id: "3", title: "Artificial Intelligence and Law in the Future", price: 105, originalPrice: 200, rating: 5, image: book3, onSale: true },
  { id: "4", title: "AI and Its Implementation", price: 158, originalPrice: 280, rating: 5, image: book4, onSale: true },
  { id: "5", title: "Learning Microsoft Office from Scratch", price: 109, originalPrice: 180, rating: 5, image: book5, onSale: true },
  { id: "6", title: "Understanding Research Methodology", price: 93, originalPrice: 160, rating: 5, image: book6, onSale: true },
  { id: "7", title: "Advanced Data Analytics", price: 125, originalPrice: 220, rating: 4.8, image: book1, onSale: true },
  { id: "8", title: "Digital Marketing Essentials", price: 89, originalPrice: 150, rating: 4.9, image: book2 },
];

const Shop = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-gradient-to-br from-secondary/20 via-background to-primary/20 py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Book Collection</h1>
            <p className="text-lg text-muted-foreground">Discover quality academic and professional publications</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-muted-foreground">Showing <span className="font-semibold text-foreground">{allBooks.length}</span> books</p>
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allBooks.map((book) => (
              <BookCard key={book.id} {...book} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Shop;
