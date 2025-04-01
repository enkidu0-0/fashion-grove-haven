
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { SlidersHorizontal, ChevronDown, ChevronUp, Filter } from "lucide-react";
import ScrollToTop from "@/components/ScrollToTop";
import { tshirts, hoodies, trending } from "@/data/mockData";
import { useToast } from "@/hooks/use-toast";

// Combine all products for the shop page
const allProducts = [...tshirts, ...hoodies, ...trending].filter(
  (product, index, self) =>
    index === self.findIndex((p) => p.id === product.id)
);

const categories = [
  { id: "tshirts", name: "T-Shirts" },
  { id: "hoodies", name: "Hoodies" },
  { id: "shirts", name: "Shirts" },
  { id: "jeans", name: "Jeans" },
  { id: "dresses", name: "Dresses" }
];

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

const colors = [
  { name: "Black", value: "#000000" },
  { name: "White", value: "#FFFFFF" },
  { name: "Gray", value: "#808080" },
  { name: "Blue", value: "#0000FF" },
  { name: "Red", value: "#FF0000" },
  { name: "Green", value: "#008000" },
];

const Shop = () => {
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [filtersOpen, setFiltersOpen] = useState(true);
  const [sortBy, setSortBy] = useState("newest");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const toggleSize = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size)
        ? prev.filter((s) => s !== size)
        : [...prev, size]
    );
  };

  const toggleColor = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color)
        ? prev.filter((c) => c !== color)
        : [...prev, color]
    );
  };

  const clearFilters = () => {
    setPriceRange([0, 100]);
    setSelectedCategories([]);
    setSelectedSizes([]);
    setSelectedColors([]);
    toast({
      title: "Filters cleared",
      description: "All filters have been reset",
    });
  };

  // Filter products based on selected filters
  const filteredProducts = allProducts.filter((product) => {
    const matchesPrice = 
      product.price >= priceRange[0] * 10 && 
      product.price <= priceRange[1] * 10;
    
    const matchesCategory = 
      selectedCategories.length === 0 || 
      selectedCategories.some(cat => product.id.includes(cat));
    
    // In a real app, size and color would be product properties
    const matchesSize = selectedSizes.length === 0;
    const matchesColor = selectedColors.length === 0;
    
    return matchesPrice && matchesCategory && matchesSize && matchesColor;
  });

  // Sort filtered products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "discount":
        return (b.discount || 0) - (a.discount || 0);
      default: // "newest"
        return 0; // In a real app, you would sort by date
    }
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-24">
        <div className="bg-fg-gray/10 py-16 md:py-20">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl font-playfair mb-4">Shop</h1>
            <p className="text-fg-darkGray/80 max-w-2xl mx-auto">
              Discover our latest collection of premium fashion items. From casual wear to formal attire, 
              we have everything you need to elevate your wardrobe.
            </p>
          </div>
        </div>

        <div className="container mx-auto py-12 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Section - Mobile Toggle */}
            <div className="lg:hidden flex justify-between items-center mb-4">
              <Button 
                variant="outline" 
                className="flex items-center gap-2"
                onClick={() => setFiltersOpen(!filtersOpen)}
              >
                <Filter size={18} />
                Filters
                {filtersOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
              </Button>
              
              <div className="flex items-center gap-2">
                <select 
                  className="border-fg-gray border p-2 rounded bg-white"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="discount">Discount</option>
                </select>
              </div>
            </div>

            {/* Filters Sidebar */}
            <div className={`lg:block ${filtersOpen ? 'block' : 'hidden'}`}>
              <div className="bg-white p-6 rounded-lg border border-fg-gray/30 sticky top-24">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="font-playfair text-xl">Filters</h2>
                  <Button 
                    variant="link" 
                    className="text-sm p-0"
                    onClick={clearFilters}
                  >
                    Clear All
                  </Button>
                </div>
                
                {/* Price Range Filter */}
                <div className="mb-8">
                  <h3 className="font-medium mb-4">Price Range</h3>
                  <Slider
                    defaultValue={[0, 100]}
                    max={100}
                    step={1}
                    value={priceRange}
                    onValueChange={setPriceRange}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-sm text-fg-darkGray/70">
                    <span>${priceRange[0] * 10}</span>
                    <span>${priceRange[1] * 10}</span>
                  </div>
                </div>
                
                {/* Categories Filter */}
                <div className="mb-8">
                  <h3 className="font-medium mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category.id} className="flex items-center">
                        <Checkbox 
                          id={`category-${category.id}`} 
                          checked={selectedCategories.includes(category.id)}
                          onCheckedChange={() => toggleCategory(category.id)}
                          className="mr-2"
                        />
                        <label 
                          htmlFor={`category-${category.id}`}
                          className="text-fg-darkGray capitalize cursor-pointer"
                        >
                          {category.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Sizes Filter */}
                <div className="mb-8">
                  <h3 className="font-medium mb-4">Sizes</h3>
                  <div className="flex flex-wrap gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        className={`h-9 w-9 rounded-md flex items-center justify-center border ${
                          selectedSizes.includes(size)
                            ? "bg-fg-black text-white border-fg-black"
                            : "border-fg-gray text-fg-darkGray hover:border-fg-darkGray"
                        }`}
                        onClick={() => toggleSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Colors Filter */}
                <div>
                  <h3 className="font-medium mb-4">Colors</h3>
                  <div className="flex flex-wrap gap-2">
                    {colors.map((color) => (
                      <button
                        key={color.name}
                        className={`h-8 w-8 rounded-full ${
                          selectedColors.includes(color.name) 
                            ? "ring-2 ring-fg-black ring-offset-2" 
                            : "ring-1 ring-fg-gray"
                        }`}
                        style={{ backgroundColor: color.value }}
                        onClick={() => toggleColor(color.name)}
                        aria-label={`Filter by ${color.name}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Product Grid and Sorting */}
            <div className="lg:col-span-3">
              {/* Desktop Sort Options */}
              <div className="hidden lg:flex justify-between items-center mb-8">
                <p className="text-fg-darkGray">
                  Showing <span className="font-medium">{sortedProducts.length}</span> products
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-fg-darkGray/70">Sort by:</span>
                  <select 
                    className="border-fg-gray border p-2 rounded bg-white"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="newest">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="discount">Discount</option>
                  </select>
                </div>
              </div>
              
              {/* Products Grid */}
              {isLoading ? (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="animate-pulse">
                      <div className="bg-fg-gray/20 aspect-[3/4] rounded-lg mb-3"></div>
                      <div className="bg-fg-gray/20 h-4 w-2/3 rounded mb-2"></div>
                      <div className="bg-fg-gray/20 h-4 w-1/3 rounded"></div>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  {sortedProducts.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                      {sortedProducts.map((product) => (
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
                    <div className="text-center py-16 border border-fg-gray/20 rounded-lg bg-white">
                      <h3 className="font-playfair text-xl mb-2">No products found</h3>
                      <p className="text-fg-darkGray/70 mb-6">
                        Try adjusting your filters to find what you're looking for.
                      </p>
                      <Button onClick={clearFilters}>
                        Clear Filters
                      </Button>
                    </div>
                  )}
                </>
              )}
              
              {/* Pagination */}
              {sortedProducts.length > 0 && (
                <div className="flex justify-center mt-12">
                  <div className="flex space-x-1">
                    <Button variant="outline" className="h-10 w-10 p-0 bg-fg-black text-white">1</Button>
                    <Button variant="outline" className="h-10 w-10 p-0">2</Button>
                    <Button variant="outline" className="h-10 w-10 p-0">3</Button>
                    <Button variant="outline" className="h-10 w-10 p-0">...</Button>
                    <Button variant="outline" className="h-10 w-10 p-0">8</Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Shop;
