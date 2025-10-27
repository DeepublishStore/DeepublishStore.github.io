import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookCard } from "@/components/home/BookCard";
import book1 from "@/assets/book1.jpg";
import book2 from "@/assets/book2.jpg";
import book3 from "@/assets/book3.jpg";
import book4 from "@/assets/book4.jpg";
import book5 from "@/assets/book5.jpg";
import book6 from "@/assets/book6.jpg";
import { Badge } from "@/components/ui/badge";

const Promotions = () => {
  const books = [
    { id: "1", title: "Information Systems Analysis and Design", price: 77, originalPrice: 150, rating: 5, image: book1, onSale: true },
    { id: "2", title: "Cyber Notary and Digital Signatures", price: 136, originalPrice: 250, rating: 5, image: book2, onSale: true },
    { id: "3", title: "Artificial Intelligence and Law", price: 105, originalPrice: 200, rating: 5, image: book3, onSale: true },
    { id: "4", title: "AI Implementation", price: 158, originalPrice: 280, rating: 5, image: book4, onSale: true },
    { id: "5", title: "Microsoft Office Guide", price: 109, originalPrice: 180, rating: 5, image: book5, onSale: true },
    { id: "6", title: "Research Methodology", price: 93, originalPrice: 160, rating: 5, image: book6, onSale: true },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="bg-gradient-to-br from-primary via-primary to-secondary py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <Badge className="bg-white text-primary mb-4 text-base px-4 py-2">
              🔥 LIMITED TIME OFFER
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">PAYDAY SALE</h1>
            <p className="text-2xl md:text-3xl font-semibold mb-2">DISCOUNT UP TO 90%</p>
            <p className="text-lg opacity-90">Hurry! Offer ends soon</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Deals</h2>
            <p className="text-muted-foreground">Don't miss out on these incredible savings</p>
          </div>

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

export default Promotions;
