
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ScrollToTop from "@/components/ScrollToTop";
import { tshirts, hoodies, trending } from "@/data/mockData";

// Category data
const categories = {
  "tshirts": {
    title: "T-Shirts",
    description: "From classic crew necks to stylish graphic designs, discover our premium quality t-shirts for every occasion.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&auto=format&fit=crop&q=60"
  },
  "hoodies": {
    title: "Hoodies",
    description: "Stay warm and stylish with our collection of comfortable hoodies, perfect for layering or casual wear.",
    image: "https://images.unsplash.com/photo-1556172732-068a22d857c0?w=1200&auto=format&fit=crop&q=60"
  },
  "shirts": {
    title: "Shirts",
    description: "Elevate your wardrobe with our range of sophisticated shirts, from casual button-downs to formal dress shirts.",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=1200&auto=format&fit=crop&q=60"
  },
  "jeans": {
    title: "Jeans",
    description: "Find your perfect fit with our selection of premium denim, crafted for both style and comfort.",
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=1200&auto=format&fit=crop&q=60"
  },
  "dresses": {
    title: "Dresses",
    description: "From casual day dresses to elegant evening wear, our collection has the perfect dress for any occasion.",
    image: "https://images.unsplash.com/photo-1550639525-c97d455acf70?w=1200&auto=format&fit=crop&q=60"
  },
  "accessories": {
    title: "Accessories",
    description: "Complete your look with our carefully curated accessories, designed to complement and enhance your outfit.",
    image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=1200&auto=format&fit=crop&q=60"
  }
};

// All products combined
const allProducts = [...tshirts, ...hoodies, ...trending].filter(
  (product, index, self) =>
    index === self.findIndex((p) => p.id === product.id)
);

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  const categoryData = categories[category as keyof typeof categories];
  
  // Filter products to match the category (in a real app, this would be a proper filter)
  const categoryProducts = allProducts.filter(product => 
    (category === "tshirts" && product.id.includes("tshirt")) ||
    (category === "hoodies" && product.id.includes("hoodie")) ||
    (category === "shirts" && !product.id.includes("tshirt") && !product.id.includes("hoodie")) ||
    // For other categories, just show some products
    (["jeans", "dresses", "accessories"].includes(category || "") && Math.random() > 0.7)
  );
  
  if (!categoryData) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-16 flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-3xl font-playfair mb-4">Category Not Found</h1>
            <p>The category you're looking for doesn't exist.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        {/* Category Banner */}
        <div className="relative bg-fg-black text-white overflow-hidden h-[40vh]">
          <div className="absolute inset-0 opacity-50">
            <img 
              src={categoryData.image} 
              alt={categoryData.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="container mx-auto h-full flex flex-col justify-center relative z-10 p-6 md:p-12">
            <h1 className="text-3xl md:text-5xl font-playfair mb-3">{categoryData.title}</h1>
            <p className="text-white/90 text-lg max-w-2xl">{categoryData.description}</p>
          </div>
        </div>
        
        {/* Category Products */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex justify-between items-end">
              <div>
                <p className="text-fg-darkGray/70">
                  Showing {categoryProducts.length} products
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-fg-darkGray/70">Sort by:</span>
                <select className="border-fg-gray border p-2 rounded bg-white">
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Best Selling</option>
                </select>
              </div>
            </div>
            
            {categoryProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
                {categoryProducts.map((product) => (
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
            ) : (
              <div className="text-center py-16">
                <h3 className="font-playfair text-xl mb-2">No products found</h3>
                <p className="text-fg-darkGray/70">
                  We couldn't find any products in this category. Please check back later.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default CategoryPage;
