import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, ArrowLeft, BookOpen, FileText, Calendar } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import book1 from "@/assets/book1.jpg";
import book2 from "@/assets/book2.jpg";
import book3 from "@/assets/book3.jpg";
import book4 from "@/assets/book4.jpg";
import book5 from "@/assets/book5.jpg";
import book6 from "@/assets/book6.jpg";

const bookDatabase = {
  "1": {
    id: "1",
    title: "Information Systems Analysis and Design",
    price: 77,
    originalPrice: 150,
    rating: 5,
    image: book1,
    onSale: true,
    author: "Dr. James Anderson",
    publisher: "DeepublishStore",
    publishDate: "2024",
    pages: 450,
    isbn: "978-1-234-56789-0",
    category: "Computer Science",
    description: "A comprehensive guide to information systems analysis and design. This book covers the fundamental concepts, methodologies, and best practices for developing robust information systems. Perfect for students, professionals, and anyone interested in understanding how modern information systems are designed and implemented.",
    fullDescription: "This authoritative textbook provides an in-depth exploration of information systems analysis and design. Covering both traditional and agile methodologies, it guides readers through the entire system development lifecycle. Topics include requirements gathering, system modeling, database design, user interface design, and project management. With real-world case studies and practical examples, this book prepares readers for the challenges of modern IT projects.",
  },
  "2": {
    id: "2",
    title: "Cyber Notary and Digital Signatures",
    price: 136,
    originalPrice: 250,
    rating: 5,
    image: book2,
    onSale: true,
    author: "Prof. Sarah Mitchell",
    publisher: "DeepublishStore",
    publishDate: "2024",
    pages: 380,
    isbn: "978-1-234-56789-1",
    category: "Law & Technology",
    description: "An essential guide to understanding cyber notary services and digital signature technology. This book explores the legal framework, technical implementation, and practical applications of digital authentication in the modern digital economy.",
    fullDescription: "This comprehensive resource examines the intersection of law and technology in the digital authentication space. Readers will learn about cryptographic principles, public key infrastructure, legal requirements for digital signatures, and the role of cyber notaries in establishing trust in electronic transactions. The book includes detailed case studies from various jurisdictions and practical guidance for implementing secure digital signature systems.",
  },
  "3": {
    id: "3",
    title: "Artificial Intelligence and Law in the Future",
    price: 105,
    originalPrice: 200,
    rating: 5,
    image: book3,
    onSale: true,
    author: "Dr. Michael Chen",
    publisher: "DeepublishStore",
    publishDate: "2024",
    pages: 420,
    isbn: "978-1-234-56789-2",
    category: "Law & AI",
    description: "Explore the future intersection of artificial intelligence and legal systems. This forward-thinking book examines how AI is transforming legal practice, regulatory frameworks, and access to justice.",
    fullDescription: "As artificial intelligence continues to evolve, its impact on the legal profession becomes increasingly profound. This book examines AI applications in legal research, contract analysis, predictive analytics, and automated decision-making. It addresses critical questions about liability, ethics, and regulation of AI systems, while exploring how the legal profession must adapt to remain relevant in an AI-driven world.",
  },
  "4": {
    id: "4",
    title: "AI and Its Implementation",
    price: 158,
    originalPrice: 280,
    rating: 5,
    image: book4,
    onSale: true,
    author: "Dr. Emily Rodriguez",
    publisher: "DeepublishStore",
    publishDate: "2024",
    pages: 520,
    isbn: "978-1-234-56789-3",
    category: "Computer Science",
    description: "A practical guide to implementing artificial intelligence solutions in real-world applications. This book bridges the gap between AI theory and practice with hands-on examples and case studies.",
    fullDescription: "This comprehensive guide takes readers from AI fundamentals to advanced implementation strategies. Covering machine learning, deep learning, natural language processing, and computer vision, the book provides practical code examples, architectural patterns, and best practices for deploying AI systems at scale. Whether you're building recommendation engines, chatbots, or predictive models, this book offers the insights needed for successful AI implementation.",
  },
  "5": {
    id: "5",
    title: "Learning Microsoft Office from Scratch",
    price: 109,
    originalPrice: 180,
    rating: 5,
    image: book5,
    onSale: true,
    author: "Jennifer Thompson",
    publisher: "DeepublishStore",
    publishDate: "2024",
    pages: 350,
    isbn: "978-1-234-56789-4",
    category: "Computer Skills",
    description: "Master Microsoft Office applications from the ground up. This beginner-friendly guide covers Word, Excel, PowerPoint, and Outlook with step-by-step tutorials and practical exercises.",
    fullDescription: "Whether you're a student, professional, or complete beginner, this book will help you master the Microsoft Office suite. Learn to create professional documents in Word, analyze data with Excel, deliver compelling presentations in PowerPoint, and manage communications efficiently with Outlook. Each chapter includes hands-on exercises, tips, and real-world scenarios to build practical skills quickly.",
  },
  "6": {
    id: "6",
    title: "Understanding Research Methodology",
    price: 93,
    originalPrice: 160,
    rating: 5,
    image: book6,
    onSale: true,
    author: "Dr. Robert Williams",
    publisher: "DeepublishStore",
    publishDate: "2024",
    pages: 400,
    isbn: "978-1-234-56789-5",
    category: "Academic Research",
    description: "A comprehensive introduction to research methodology for students and researchers. Learn the principles of research design, data collection, analysis, and academic writing.",
    fullDescription: "This essential textbook guides readers through every stage of the research process. From formulating research questions to designing studies, collecting and analyzing data, and presenting findings, this book covers both qualitative and quantitative methodologies. With examples from various disciplines and practical guidance on ethical considerations, this resource is invaluable for anyone conducting academic or professional research.",
  },
};

const BookDetail = () => {
  const { id } = useParams();
  const { addItem } = useCart();

  const book = bookDatabase[id as keyof typeof bookDatabase];

  if (!book) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Book Not Found</h1>
            <Link to="/shop">
              <Button>Back to Shop</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const discount = book.originalPrice ? Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100) : 0;

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
          <Link to="/shop" className="inline-flex items-center text-primary hover:underline mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Shop
          </Link>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Book Image */}
            <div className="relative">
              <Card className="overflow-hidden">
                {book.onSale && (
                  <Badge className="absolute top-4 left-4 z-10 bg-gradient-to-r from-primary to-secondary text-white font-semibold">
                    🔥 PAY DAY SALE
                  </Badge>
                )}
                {discount > 0 && (
                  <Badge className="absolute top-4 right-4 z-10 bg-destructive text-destructive-foreground font-bold text-lg">
                    -{discount}%
                  </Badge>
                )}
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-auto object-cover"
                />
              </Card>
            </div>

            {/* Book Details */}
            <div className="space-y-6">
              <div>
                <Badge className="mb-2">{book.category}</Badge>
                <h1 className="text-3xl md:text-4xl font-bold mb-4">{book.title}</h1>
                <p className="text-lg text-muted-foreground mb-2">by {book.author}</p>

                <div className="flex items-center gap-2 mb-4">
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
                  <span className="text-muted-foreground">({book.rating} out of 5)</span>
                </div>
              </div>

              <Separator />

              <div>
                <h2 className="text-xl font-semibold mb-3">Description</h2>
                <p className="text-muted-foreground leading-relaxed">{book.description}</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3">About This Book</h2>
                <p className="text-muted-foreground leading-relaxed">{book.fullDescription}</p>
              </div>

              <Separator />

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-2">
                  <BookOpen className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Pages</p>
                    <p className="font-semibold">{book.pages}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Calendar className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Published</p>
                    <p className="font-semibold">{book.publishDate}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <FileText className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">ISBN</p>
                    <p className="font-semibold">{book.isbn}</p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <BookOpen className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground">Publisher</p>
                    <p className="font-semibold">{book.publisher}</p>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <div className="flex items-baseline gap-3">
                  {book.originalPrice && (
                    <span className="text-2xl text-muted-foreground line-through">
                      ${book.originalPrice}
                    </span>
                  )}
                  <span className="text-4xl font-bold text-primary">${book.price}</span>
                  {discount > 0 && (
                    <Badge variant="secondary" className="text-sm">
                      Save ${book.originalPrice! - book.price}
                    </Badge>
                  )}
                </div>

                <Button size="lg" className="w-full gap-2" onClick={handleAddToCart}>
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
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