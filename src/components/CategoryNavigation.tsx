
import { TShirt, Shirt, AlertCircle, Pants, Dress, Watch } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  link: string;
}

const categories: Category[] = [
  {
    id: "tshirts",
    name: "T-shirts",
    icon: <TShirt size={24} />,
    link: "/category/tshirts",
  },
  {
    id: "hoodies",
    name: "Hoodies",
    icon: <AlertCircle size={24} />,
    link: "/category/hoodies",
  },
  {
    id: "shirts",
    name: "Shirts",
    icon: <Shirt size={24} />,
    link: "/category/shirts",
  },
  {
    id: "jeans",
    name: "Jeans",
    icon: <Pants size={24} />,
    link: "/category/jeans",
  },
  {
    id: "dresses",
    name: "Dresses",
    icon: <Dress size={24} />,
    link: "/category/dresses",
  },
  {
    id: "accessories",
    name: "Accessories",
    icon: <Watch size={24} />,
    link: "/category/accessories",
  },
];

const CategoryNavigation = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-fg-black text-fg-white py-3">
      <div className="container mx-auto px-4 relative">
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-fg-black/80 text-fg-white p-1 rounded-full"
        >
          &lt;
        </button>
        <div
          ref={scrollContainer}
          className="flex overflow-x-auto hide-scrollbar space-x-6 py-2 px-6 scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {categories.map((category) => (
            <Link to={category.link} key={category.id} className="flex-shrink-0">
              <div className="category-item">
                <div className="mb-1">{category.icon}</div>
                <span className="text-sm whitespace-nowrap">{category.name}</span>
              </div>
            </Link>
          ))}
        </div>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-fg-black/80 text-fg-white p-1 rounded-full"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default CategoryNavigation;
