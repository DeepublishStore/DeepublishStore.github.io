import { BookCard } from "./BookCard";
import book1 from "@/assets/book1.jpg";
import book2 from "@/assets/book2.jpg";
import book3 from "@/assets/book3.jpg";
import book4 from "@/assets/book4.jpg";
import book5 from "@/assets/book5.jpg";
import book6 from "@/assets/book6.jpg";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const featuredBooks = [
  {
    id: "1",
    title: "Information Systems Analysis and Design",
    price: 77,
    originalPrice: 150,
    rating: 5,
    image: book1,
    onSale: true,
  },
  {
    id: "2",
    title: "Cyber Notary and Digital Signatures",
    price: 136,
    originalPrice: 250,
    rating: 5,
    image: book2,
    onSale: true,
  },
  {
    id: "3",
    title: "Artificial Intelligence and Law in the Future",
    price: 105,
    originalPrice: 200,
    rating: 5,
    image: book3,
    onSale: true,
  },
  {
    id: "4",
    title: "AI and Its Implementation",
    price: 158,
    originalPrice: 280,
    rating: 5,
    image: book4,
    onSale: true,
  },
  {
    id: "5",
    title: "Learning Microsoft Office from Scratch",
    price: 109,
    originalPrice: 180,
    rating: 5,
    image: book5,
    onSale: true,
  },
  {
    id: "6",
    title: "Understanding Research Methodology",
    price: 93,
    originalPrice: 160,
    rating: 5,
    image: book6,
    onSale: true,
  },
];

export const FeaturedBooks = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              PAYDAY SALE. DISCOUNT UP TO 90%. LIMITED TIME!
            </h2>
            <p className="text-muted-foreground">Don't miss out on these incredible deals</p>
          </div>
          <Button asChild variant="ghost" className="hidden md:flex">
            <Link to="/shop">
              See More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredBooks.map((book) => (
            <BookCard key={book.id} {...book} />
          ))}
        </div>
        <div className="text-center mt-8 md:hidden">
          <Button asChild variant="outline">
            <Link to="/shop">
              See More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
