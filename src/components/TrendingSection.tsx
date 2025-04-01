
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductCard";
import { trending } from "@/data/mockData";

const TrendingSection = () => {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!scrollContainer.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: -300, behavior: "smooth" });
      setTimeout(checkScroll, 310);
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: 300, behavior: "smooth" });
      setTimeout(checkScroll, 310);
    }
  };

  return (
    <section className="py-12 bg-fg-gray/20">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="section-title">Trending Now</h2>
          <div className="flex space-x-2">
            <button
              onClick={scrollLeft}
              className={`p-2 rounded-full ${
                canScrollLeft
                  ? "bg-fg-black text-fg-white"
                  : "bg-fg-gray/50 text-fg-darkGray cursor-not-allowed"
              }`}
              disabled={!canScrollLeft}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollRight}
              className={`p-2 rounded-full ${
                canScrollRight
                  ? "bg-fg-black text-fg-white"
                  : "bg-fg-gray/50 text-fg-darkGray cursor-not-allowed"
              }`}
              disabled={!canScrollRight}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
        
        <div
          ref={scrollContainer}
          className="flex overflow-x-auto hide-scrollbar gap-4 pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onScroll={checkScroll}
        >
          {trending.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-64 md:w-72">
              <ProductCard
                id={product.id}
                name={product.name}
                price={product.price}
                originalPrice={product.originalPrice}
                image={product.image}
                isNew={product.isNew}
                discount={product.discount}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;
