import { Star, ShoppingCart } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useCart } from "@/lib/cart-context";

interface BookCardProps {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  rating: number;
  image: string;
  onSale?: boolean;
}

export const BookCard = ({ id, title, price, originalPrice, rating, image, onSale }: BookCardProps) => {
  const { addItem } = useCart();
  const discount = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  const handleAddToCart = () => {
    addItem({ id, title, price, originalPrice, image });
  };

  return (
    <Card className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
      <Link to={`/book/${id}`}>
        <div className="relative overflow-hidden bg-muted aspect-[3/4]">
          {onSale && (
            <Badge className="absolute top-3 left-3 z-10 bg-gradient-to-r from-primary to-secondary text-white font-semibold">
              🔥 PAY DAY SALE
            </Badge>
          )}
          {discount > 0 && (
            <Badge className="absolute top-3 right-3 z-10 bg-destructive text-destructive-foreground font-bold">
              -{discount}%
            </Badge>
          )}
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </Link>
      <CardContent className="p-4">
        <Link to={`/book/${id}`}>
          <h3 className="font-semibold text-base line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
        </Link>
        <div className="flex items-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < Math.floor(rating)
                  ? "fill-secondary text-secondary"
                  : "fill-muted text-muted"
              }`}
            />
          ))}
          <span className="text-sm text-muted-foreground ml-1">({rating})</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="flex flex-col">
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ${originalPrice}
            </span>
          )}
          <span className="text-xl font-bold text-primary">${price}</span>
        </div>
        <Button size="sm" variant="default" className="gap-2" onClick={handleAddToCart}>
          <ShoppingCart className="h-4 w-4" />
          Add
        </Button>
      </CardFooter>
    </Card>
  );
};
