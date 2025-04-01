
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
  description?: string;
  viewAllLink?: string;
  backgroundColor?: string;
}

const ProductSection = ({ 
  title, 
  products, 
  category, 
  description, 
  viewAllLink = `/category/${category}`,
  backgroundColor = "bg-white" 
}: ProductSectionProps) => {
  return (
    <section className={`py-16 ${backgroundColor}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10">
          <div className="max-w-2xl">
            <h2 className="section-title mb-3">{title}</h2>
            {description && (
              <p className="text-fg-darkGray/80 mb-4 md:mb-0 max-w-xl">{description}</p>
            )}
          </div>
          <Link
            to={viewAllLink}
            className="text-fg-black font-medium text-sm uppercase tracking-wider hover:underline mt-4 md:mt-0"
          >
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8">
          {products.length > 0 ? (
            products.map((product) => (
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
            ))
          ) : (
            <div className="col-span-full py-12 text-center">
              <p className="text-lg text-fg-darkGray">No products available in this category yet.</p>
              <Link 
                to="/shop" 
                className="inline-block mt-4 bg-fg-black text-fg-white px-4 py-2 rounded-sm text-sm font-medium"
              >
                Browse All Products
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
