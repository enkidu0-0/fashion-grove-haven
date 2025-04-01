
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import ScrollToTop from "@/components/ScrollToTop";
import { tshirts, hoodies, trending } from "@/data/mockData";

// Collection data
const collections = {
  "new-arrivals": {
    title: "New Arrivals",
    description: "Discover the latest additions to our collection, featuring cutting-edge designs and seasonal must-haves. These pieces have just landed and represent the very best of contemporary fashion.",
    image: "https://images.unsplash.com/photo-1601762603339-fd61e28b698a?w=1200&auto=format&fit=crop&q=60",
    heroImage: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1200&auto=format&fit=crop&q=60",
  },
  "best-sellers": {
    title: "Best Sellers",
    description: "Our most popular items loved by customers worldwide. Quality pieces that stand the test of time and continue to be favorites season after season.",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1200&auto=format&fit=crop&q=60",
    heroImage: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&auto=format&fit=crop&q=60",
  },
  "season-specials": {
    title: "Season Specials",
    description: "Curated selection of weather-appropriate clothing to keep you stylish regardless of the season. Specially designed pieces that combine function with fashion.",
    image: "https://images.unsplash.com/photo-1467043198406-dc953a3defa0?w=1200&auto=format&fit=crop&q=60",
    heroImage: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=1200&auto=format&fit=crop&q=60",
  },
  "limited-edition": {
    title: "Limited Edition",
    description: "Exclusive designs available for a limited time only. Once they're gone, they're gone forever. These rare pieces are crafted in small quantities to ensure exclusivity.",
    image: "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?w=1200&auto=format&fit=crop&q=60",
    heroImage: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=1200&auto=format&fit=crop&q=60",
  },
  "basics": {
    title: "Timeless Basics",
    description: "Essential wardrobe staples that form the foundation of every stylish outfit. High-quality basics designed to last and complement any look.",
    image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=1200&auto=format&fit=crop&q=60",
    heroImage: "https://images.unsplash.com/photo-1485462537344-1a15bed0ee5e?w=1200&auto=format&fit=crop&q=60",
  },
  "monochrome": {
    title: "Monochrome Edit",
    description: "Sophisticated black and white pieces for a timeless, elegant look. The perfect collection for those who appreciate the power of simplicity.",
    image: "https://images.unsplash.com/photo-1580651315530-69c8e0026377?w=1200&auto=format&fit=crop&q=60",
    heroImage: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=1200&auto=format&fit=crop&q=60",
  },
  "loungewear": {
    title: "Luxury Loungewear",
    description: "Comfortable yet stylish pieces perfect for relaxing at home or casual outings. Crafted from soft, premium fabrics for the ultimate in relaxed luxury.",
    image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=1200&auto=format&fit=crop&q=60",
    heroImage: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=1200&auto=format&fit=crop&q=60",
  },
  "workwear": {
    title: "Modern Workwear",
    description: "Professional attire designed for the contemporary workplace. Sophisticated pieces that transition seamlessly from office to evening.",
    image: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=1200&auto=format&fit=crop&q=60",
    heroImage: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=1200&auto=format&fit=crop&q=60",
  },
};

// All products combined
const allProducts = [...tshirts, ...hoodies, ...trending].filter(
  (product, index, self) =>
    index === self.findIndex((p) => p.id === product.id)
);

const CollectionDetail = () => {
  const { id } = useParams<{ id: string }>();
  const collection = collections[id as keyof typeof collections];
  
  // Randomly assign products to this collection (in a real app, products would be properly categorized)
  const collectionProducts = allProducts
    .sort(() => 0.5 - Math.random()) // Shuffle the array
    .slice(0, 12); // Take first 12 items
  
  if (!collection) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-16 flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-3xl font-playfair mb-4">Collection Not Found</h1>
            <p>The collection you're looking for doesn't exist.</p>
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
        {/* Hero Banner */}
        <div className="relative bg-fg-black text-white overflow-hidden h-[50vh] md:h-[60vh]">
          <div className="absolute inset-0 opacity-60">
            <img 
              src={collection.heroImage || collection.image} 
              alt={collection.title}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="container mx-auto h-full flex flex-col justify-center relative z-10 p-6 md:p-12">
            <h1 className="text-3xl md:text-5xl font-playfair mb-3 md:mb-4 max-w-2xl">{collection.title}</h1>
            <p className="text-white/90 text-lg max-w-2xl">{collection.description}</p>
          </div>
        </div>
        
        {/* Collection Products */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-8 flex justify-between items-end">
              <div>
                <h2 className="text-2xl font-playfair">Collection Products</h2>
                <p className="text-fg-darkGray/70">
                  Showing {collectionProducts.length} products
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-fg-darkGray/70">Sort by:</span>
                <select className="border-fg-gray border p-2 rounded bg-white">
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Popularity</option>
                </select>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {collectionProducts.map((product) => (
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
        
        {/* Styling Tips */}
        <section className="py-16 bg-fg-gray/10">
          <div className="container mx-auto px-4">
            <h2 className="section-title mb-10">Styling Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg border border-fg-gray/30">
                <h3 className="font-playfair text-xl mb-3">Layering Techniques</h3>
                <p className="text-fg-darkGray/80 mb-4">
                  Master the art of layering with these versatile pieces. Combine different textures 
                  and lengths for a sophisticated look that transitions seamlessly between seasons.
                </p>
                <a href="#" className="text-fg-black font-medium text-sm uppercase tracking-wider hover:underline">
                  Read More
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg border border-fg-gray/30">
                <h3 className="font-playfair text-xl mb-3">Accessorizing</h3>
                <p className="text-fg-darkGray/80 mb-4">
                  Elevate your outfit with carefully chosen accessories. Learn how to select 
                  the perfect pieces to complement your look without overwhelming it.
                </p>
                <a href="#" className="text-fg-black font-medium text-sm uppercase tracking-wider hover:underline">
                  Read More
                </a>
              </div>
              <div className="bg-white p-6 rounded-lg border border-fg-gray/30">
                <h3 className="font-playfair text-xl mb-3">Color Coordination</h3>
                <p className="text-fg-darkGray/80 mb-4">
                  Discover the power of color theory and how to create harmonious combinations 
                  that enhance your personal style and make a statement.
                </p>
                <a href="#" className="text-fg-black font-medium text-sm uppercase tracking-wider hover:underline">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default CollectionDetail;
