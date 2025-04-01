
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

// Collection data with more details
const collections = [
  {
    id: "new-arrivals",
    title: "New Arrivals",
    description: "Discover the latest additions to our collection, featuring cutting-edge designs and seasonal must-haves.",
    image: "https://images.unsplash.com/photo-1601762603339-fd61e28b698a?w=800&auto=format&fit=crop&q=60",
    products: 42,
    featured: true,
  },
  {
    id: "best-sellers",
    title: "Best Sellers",
    description: "Our most popular items loved by customers worldwide. Quality pieces that stand the test of time.",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=800&auto=format&fit=crop&q=60",
    products: 36,
    featured: true,
  },
  {
    id: "season-specials",
    title: "Season Specials",
    description: "Curated selection of weather-appropriate clothing to keep you stylish regardless of the season.",
    image: "https://images.unsplash.com/photo-1467043198406-dc953a3defa0?w=800&auto=format&fit=crop&q=60",
    products: 28,
    featured: true,
  },
  {
    id: "limited-edition",
    title: "Limited Edition",
    description: "Exclusive designs available for a limited time only. Once they're gone, they're gone forever.",
    image: "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?w=800&auto=format&fit=crop&q=60",
    products: 18,
    featured: true,
  },
  {
    id: "basics",
    title: "Timeless Basics",
    description: "Essential wardrobe staples that form the foundation of every stylish outfit.",
    image: "https://images.unsplash.com/photo-1479064555552-3ef4979f8908?w=800&auto=format&fit=crop&q=60",
    products: 32,
    featured: false,
  },
  {
    id: "monochrome",
    title: "Monochrome Edit",
    description: "Sophisticated black and white pieces for a timeless, elegant look.",
    image: "https://images.unsplash.com/photo-1580651315530-69c8e0026377?w=800&auto=format&fit=crop&q=60",
    products: 24,
    featured: false,
  },
  {
    id: "loungewear",
    title: "Luxury Loungewear",
    description: "Comfortable yet stylish pieces perfect for relaxing at home or casual outings.",
    image: "https://images.unsplash.com/photo-1582418702059-97ebafb35d09?w=800&auto=format&fit=crop&q=60",
    products: 29,
    featured: false,
  },
  {
    id: "workwear",
    title: "Modern Workwear",
    description: "Professional attire designed for the contemporary workplace.",
    image: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=800&auto=format&fit=crop&q=60",
    products: 27,
    featured: false,
  },
];

const Collections = () => {
  // Separate featured collections
  const featuredCollections = collections.filter(collection => collection.featured);
  const regularCollections = collections.filter(collection => !collection.featured);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        {/* Hero Banner */}
        <div className="relative bg-fg-black text-white overflow-hidden h-[50vh] md:h-[60vh]">
          <div className="absolute inset-0 opacity-40">
            <img 
              src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?w=1200&auto=format&fit=crop&q=60" 
              alt="Collections Banner"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="container mx-auto h-full flex flex-col justify-center items-center relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-playfair mb-4 tracking-tight">Our Collections</h1>
            <p className="text-lg md:text-xl max-w-3xl opacity-90 mb-8">
              Explore our carefully curated collections designed to elevate your style and reflect your unique personality.
            </p>
          </div>
        </div>
        
        {/* Featured Collections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="section-title mb-12">Featured Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
              {featuredCollections.map((collection) => (
                <Link 
                  to={`/collections/${collection.id}`} 
                  key={collection.id}
                  className="group block"
                >
                  <div className="relative overflow-hidden rounded-lg aspect-[16/9]">
                    <img
                      src={collection.image}
                      alt={collection.title}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <h3 className="text-2xl md:text-3xl font-playfair text-white mb-2">{collection.title}</h3>
                      <p className="text-white/80 mb-3 line-clamp-2">{collection.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-white/70 text-sm">{collection.products} Products</span>
                        <span className="text-white font-medium text-sm uppercase tracking-wider group-hover:underline">
                          Explore
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
        
        {/* All Collections */}
        <section className="py-16 bg-fg-gray/10">
          <div className="container mx-auto px-4">
            <h2 className="section-title mb-12">All Collections</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {regularCollections.map((collection) => (
                <Link 
                  to={`/collections/${collection.id}`} 
                  key={collection.id}
                  className="group bg-white border border-fg-gray/30 rounded-md overflow-hidden hover:shadow-md transition-all duration-300"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={collection.image}
                      alt={collection.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-playfair text-xl mb-2">{collection.title}</h3>
                    <p className="text-fg-darkGray/80 text-sm line-clamp-2 mb-3">{collection.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-fg-darkGray/70 text-sm">{collection.products} Products</span>
                      <span className="text-fg-black font-medium text-sm uppercase tracking-wider group-hover:underline">
                        View
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Collections;
