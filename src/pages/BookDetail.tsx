
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, ArrowLeft } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import book1 from "@/assets/book1.jpg";
import book2 from "@/assets/book2.jpg";
import book3 from "@/assets/book3.jpg";
import book4 from "@/assets/book4.jpg";
import book5 from "@/assets/book5.jpg";
import book6 from "@/assets/book6.jpg";

const booksData = {
  "1": {
    id: "1",
    title: "Information Systems Analysis and Design",
    price: 77,
    originalPrice: 150,
    rating: 5,
    image: book1,
    description: "Comprehensive guide to information systems analysis and design methodologies. Learn the latest techniques for developing robust information systems.",
    author: "Dr. James Anderson",
    pages: 450,
    publisher: "DeepublishStore",
    isbn: "978-1234567890",
  },
  "2": {
    id: "2",
    title: "Cyber Notary and Digital Signatures",
    price: 136,
    originalPrice: 250,
    rating: 5,
    image: book2,
    description: "Explore the world of digital authentication and cyber notary systems. Essential reading for legal and technology professionals.",
    author: "Prof. Maria Santos",
    pages: 380,
    publisher: "DeepublishStore",
    isbn: "978-1234567891",
  },
  "3": {
    id: "3",
    title: "Artificial Intelligence and Law in the Future",
    price: 105,
    originalPrice: 200,
    rating: 5,
    image: book3,
    description: "An in-depth look at how AI is transforming the legal profession and what the future holds for law and technology integration.",
    author: "Attorney Robert Chen",
    pages: 420,
    publisher: "DeepublishStore",
    isbn: "978-1234567892",
  },
  "4": {
    id: "4",
    title: "AI and Its Implementation",
    price: 158,
    originalPrice: 280,
    rating: 5,
    image: book4,
    description: "Practical guide to implementing AI solutions in business environments. From theory to real-world applications.",
    author: "Dr. Sarah Williams",
    pages: 520,
    publisher: "DeepublishStore",
    isbn: "978-1234567893",
  },
  "5": {
    id: "5",
    title: "Learning Microsoft Office from Scratch",
    price: 109,
    originalPrice: 180,
    rating: 5,
    image: book5,
    description: "Master Microsoft Office suite with this comprehensive beginner-friendly guide. Perfect for students and professionals.",
    author: "John Miller",
    pages: 350,
    publisher: "DeepublishStore",
    isbn: "978-1234567894",
  },
  "6": {
    id: "6",
    title: "Understanding Research Methodology",
    price: 93,
    originalPrice: 160,
    rating: 5,
    image: book6,
    description: "Essential guide for students and researchers covering both qualitative and quantitative research methods.",
    author: "Prof. Emily Johnson",
    pages: 400,
    publisher: "DeepublishStore",
    isbn: "978-1234567895",
  },
};

const BookDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addItem } = useCart();
  const book = booksData[id as keyof typeof booksData];

  if (!book) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Book Not Found</h1>
            <Button asChild>
              <Link to="/shop">Browse Books</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const discount = Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100);

  const handleAddToCart = () => {
    addItem({
      id: book.id,
      title: book.title,
      price: book.price,
      originalPrice: book.originalPrice,
      image: book.image,
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/shop">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Shop
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative">
              <div className="sticky top-24">
                <div className="relative overflow-hidden rounded-2xl bg-muted aspect-[3/4]">
                  <Badge className="absolute top-4 left-4 z-10 bg-gradient-to-r from-primary to-secondary text-white font-semibold">
                    🔥 PAY DAY SALE
                  </Badge>
                  <Badge className="absolute top-4 right-4 z-10 bg-destructive text-destructive-foreground font-bold">
                    -{discount}%
                  </Badge>
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold mb-4">{book.title}</h1>
                <p className="text-lg text-muted-foreground mb-4">by {book.author}</p>
                <div className="flex items-center gap-2 mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(book.rating)
                            ? "fill-secondary text-secondary"
                            : "fill-muted text-muted"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({book.rating}.0)</span>
                </div>
              </div>

              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-bold text-primary">${book.price}</span>
                <span className="text-2xl text-muted-foreground line-through">
                  ${book.originalPrice}
                </span>
                <Badge className="bg-destructive text-destructive-foreground">
                  Save {discount}%
                </Badge>
              </div>

              <div className="space-y-4 pt-6 border-t">
                <h2 className="text-2xl font-bold">Description</h2>
                <p className="text-lg leading-relaxed">{book.description}</p>
              </div>

              <div className="space-y-3 pt-6 border-t">
                <h2 className="text-2xl font-bold mb-4">Book Details</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Publisher</p>
                    <p className="font-semibold">{book.publisher}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Pages</p>
                    <p className="font-semibold">{book.pages}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">ISBN</p>
                    <p className="font-semibold">{book.isbn}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Author</p>
                    <p className="font-semibold">{book.author}</p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Button
                  size="lg"
                  className="w-full gap-2"
                  variant="gradient"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart - ${book.price}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BookDetail;
