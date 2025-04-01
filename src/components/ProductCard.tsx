
import { Eye, Heart, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface ProductProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  isNew?: boolean;
  discount?: number;
}

const ProductCard = ({
  id,
  name,
  price,
  originalPrice,
  image,
  isNew = false,
  discount,
}: ProductProps) => {
  const { toast } = useToast();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart.`,
      duration: 3000,
    });
  };

  const handleAddToWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    toast({
      title: "Added to wishlist",
      description: `${name} has been added to your wishlist.`,
      duration: 3000,
    });
  };

  return (
    <Link to={`/product/${id}`} className="product-card">
      <div className="product-image-container">
        <img src={image} alt={name} className="product-image" />
        
        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {isNew && (
            <span className="bg-fg-black text-fg-white px-2 py-1 text-xs font-semibold">
              NEW
            </span>
          )}
          {discount && (
            <span className="bg-fg-black text-fg-white px-2 py-1 text-xs font-semibold">
              -{discount}%
            </span>
          )}
        </div>
        
        {/* Overlay with actions */}
        <div className="product-overlay">
          <div className="flex space-x-2">
            <button
              onClick={handleAddToCart}
              className="product-action-button flex items-center"
            >
              <ShoppingCart size={16} className="mr-1" />
              Add to Cart
            </button>
            <button
              onClick={handleAddToWishlist}
              className="bg-fg-white text-fg-black p-2 rounded transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0"
            >
              <Heart size={16} />
            </button>
            <button className="bg-fg-white text-fg-black p-2 rounded transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
              <Eye size={16} />
            </button>
          </div>
        </div>
      </div>
      
      {/* Product details */}
      <div className="p-4">
        <h3 className="text-fg-black font-medium text-base mb-1 truncate">{name}</h3>
        <div className="flex items-center">
          <span className="text-fg-black font-semibold">${price.toFixed(2)}</span>
          {originalPrice && (
            <span className="text-fg-darkGray line-through text-sm ml-2">
              ${originalPrice.toFixed(2)}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
