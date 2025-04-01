
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  isNew?: boolean;
  discount?: number;
}

interface ProductSectionProps {
  title: string;
  products: Product[];
  category: string;
}

const ProductSection = ({ title, products, category }: ProductSectionProps) => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="section-title">{title}</h2>
          <Link
            to={`/category/${category}`}
            className="text-fg-black font-medium hover:underline"
          >
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              originalPrice={product.originalPrice}
              image={product.image}
              isNew={product.isNew}
              discount={product.discount}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
