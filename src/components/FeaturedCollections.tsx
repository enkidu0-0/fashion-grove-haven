
import { Link } from "react-router-dom";

interface Collection {
  id: string;
  title: string;
  image: string;
  link: string;
}

const collections: Collection[] = [
  {
    id: "new-arrivals",
    title: "New Arrivals",
    image: "https://images.unsplash.com/photo-1601762603339-fd61e28b698a?w=500&auto=format&fit=crop&q=60",
    link: "/collections/new-arrivals",
  },
  {
    id: "best-sellers",
    title: "Best Sellers",
    image: "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=500&auto=format&fit=crop&q=60",
    link: "/collections/best-sellers",
  },
  {
    id: "season-specials",
    title: "Season Specials",
    image: "https://images.unsplash.com/photo-1467043198406-dc953a3defa0?w=500&auto=format&fit=crop&q=60",
    link: "/collections/season-specials",
  },
  {
    id: "limited-edition",
    title: "Limited Edition",
    image: "https://images.unsplash.com/photo-1543087903-1ac2ec7aa8c5?w=500&auto=format&fit=crop&q=60",
    link: "/collections/limited-edition",
  },
];

const FeaturedCollections = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {collections.map((collection) => (
            <div key={collection.id} className="group relative overflow-hidden rounded-md">
              <div className="aspect-[4/5] overflow-hidden bg-fg-gray">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-300">
                <h3 className="text-white text-2xl font-bold mb-4">{collection.title}</h3>
                <Link
                  to={collection.link}
                  className="bg-fg-white text-fg-black px-4 py-2 rounded-sm font-medium opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                >
                  View Collection
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
