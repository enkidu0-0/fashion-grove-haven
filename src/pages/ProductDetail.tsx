
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, ShoppingBag, ChevronRight, Star, Truck, RefreshCcw, Shield } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ScrollToTop from "@/components/ScrollToTop";
import { tshirts, hoodies, trending } from "@/data/mockData";

// All products combined
const allProducts = [...tshirts, ...hoodies, ...trending].filter(
  (product, index, self) =>
    index === self.findIndex((p) => p.id === product.id)
);

// Get similar products
const getSimilarProducts = (currentId: string) => {
  const currentProduct = allProducts.find(p => p.id === currentId);
  if (!currentProduct) return [];
  
  // Find products in the same category (based on id prefix)
  const category = currentId.split('-')[0];
  return allProducts
    .filter(p => p.id !== currentId && p.id.startsWith(category))
    .slice(0, 4);
};

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = allProducts.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const { toast } = useToast();
  
  // Product images (main image + variations)
  const productImages = product ? [
    product.image,
    `https://images.unsplash.com/photo-${parseInt(product.image.split('-')[1]) + 1}?w=800&auto=format&fit=crop&q=60`,
    `https://images.unsplash.com/photo-${parseInt(product.image.split('-')[1]) + 2}?w=800&auto=format&fit=crop&q=60`,
    `https://images.unsplash.com/photo-${parseInt(product.image.split('-')[1]) + 3}?w=800&auto=format&fit=crop&q=60`,
  ] : [];
  
  const [activeImage, setActiveImage] = useState(0);
  
  // Available sizes and colors
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const colors = [
    { name: "Black", value: "#000000" },
    { name: "White", value: "#FFFFFF" },
    { name: "Gray", value: "#808080" },
    { name: "Blue", value: "#0000FF" },
    { name: "Red", value: "#FF0000" },
  ];
  
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-16 flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-3xl font-playfair mb-4">Product Not Found</h1>
            <p>The product you're looking for doesn't exist or has been removed.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  // Increment/decrement quantity
  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  
  // Add to cart handler
  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "You need to select a size before adding to cart",
        variant: "destructive"
      });
      return;
    }
    
    if (!selectedColor) {
      toast({
        title: "Please select a color",
        description: "You need to select a color before adding to cart",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Added to cart",
      description: `${product.name} (${selectedSize}, ${selectedColor}) has been added to your cart.`
    });
  };
  
  // Add to wishlist handler
  const handleAddToWishlist = () => {
    toast({
      title: "Added to wishlist",
      description: `${product.name} has been added to your wishlist.`
    });
  };
  
  // Similar products
  const similarProducts = getSimilarProducts(product.id);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        {/* Breadcrumbs */}
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center text-sm text-fg-darkGray/70">
            <Link to="/" className="hover:text-fg-black">Home</Link>
            <ChevronRight size={14} className="mx-1" />
            <Link to="/shop" className="hover:text-fg-black">Shop</Link>
            <ChevronRight size={14} className="mx-1" />
            <span className="text-fg-black">{product.name}</span>
          </div>
        </div>
        
        {/* Product Details */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Product Images */}
              <div>
                <div className="aspect-square overflow-hidden bg-fg-gray/10 mb-4">
                  <img 
                    src={productImages[activeImage]} 
                    alt={product.name} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {productImages.map((image, index) => (
                    <button
                      key={index}
                      className={`aspect-square border ${
                        activeImage === index 
                          ? "border-fg-black" 
                          : "border-fg-gray hover:border-fg-darkGray/50"
                      }`}
                      onClick={() => setActiveImage(index)}
                    >
                      <img 
                        src={image} 
                        alt={`${product.name} view ${index + 1}`} 
                        className="w-full h-full object-cover object-center"
                      />
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Product Info */}
              <div>
                {/* Labels */}
                <div className="flex space-x-2 mb-3">
                  {product.isNew && (
                    <span className="bg-fg-black text-fg-white text-xs font-medium px-2 py-1">
                      NEW
                    </span>
                  )}
                  {product.discount && (
                    <span className="bg-red-600 text-fg-white text-xs font-medium px-2 py-1">
                      {product.discount}% OFF
                    </span>
                  )}
                </div>
                
                {/* Product Title and Rating */}
                <h1 className="text-3xl md:text-4xl font-playfair mb-2">{product.name}</h1>
                <div className="flex items-center space-x-1 mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        size={16} 
                        className={star <= 4 ? "fill-yellow-400 text-yellow-400" : "text-fg-gray"} 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-fg-darkGray">(24 reviews)</span>
                </div>
                
                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-medium">${product.price.toFixed(2)}</span>
                    {product.originalPrice && (
                      <span className="text-fg-darkGray/70 line-through">${product.originalPrice.toFixed(2)}</span>
                    )}
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-fg-darkGray/90 mb-8">
                  This premium quality {product.name.toLowerCase()} is crafted from high-grade materials, 
                  ensuring both comfort and durability. Perfect for everyday wear, it features a modern fit 
                  and exceptional attention to detail.
                </p>
                
                {/* Color Selection */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3">Color: <span className="text-fg-darkGray">{selectedColor || "Select a color"}</span></h3>
                  <div className="flex space-x-2">
                    {colors.map((color) => (
                      <button
                        key={color.name}
                        className={`w-8 h-8 rounded-full border ${
                          selectedColor === color.name 
                            ? "ring-2 ring-offset-2 ring-fg-black" 
                            : "ring-1 ring-fg-gray"
                        }`}
                        style={{ backgroundColor: color.value }}
                        onClick={() => setSelectedColor(color.name)}
                        aria-label={`Select ${color.name} color`}
                      />
                    ))}
                  </div>
                </div>
                
                {/* Size Selection */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-sm font-medium">Size: <span className="text-fg-darkGray">{selectedSize || "Select a size"}</span></h3>
                    <button className="text-sm text-fg-black underline">Size Guide</button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {sizes.map((size) => (
                      <button
                        key={size}
                        className={`h-10 min-w-10 px-3 rounded-md border ${
                          selectedSize === size
                            ? "bg-fg-black text-fg-white border-fg-black"
                            : "border-fg-gray text-fg-darkGray hover:border-fg-darkGray"
                        }`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Quantity and Add to Cart */}
                <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                  <div className="flex items-center border border-fg-gray rounded-md h-12 w-full sm:w-32">
                    <button
                      className="w-12 h-full flex items-center justify-center text-fg-darkGray"
                      onClick={decrementQuantity}
                    >
                      -
                    </button>
                    <div className="flex-1 text-center">{quantity}</div>
                    <button
                      className="w-12 h-full flex items-center justify-center text-fg-darkGray"
                      onClick={incrementQuantity}
                    >
                      +
                    </button>
                  </div>
                  
                  <Button 
                    className="w-full sm:flex-1 h-12 gap-2"
                    onClick={handleAddToCart}
                  >
                    <ShoppingBag size={18} />
                    Add to Cart
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="w-full sm:w-12 h-12 p-0"
                    onClick={handleAddToWishlist}
                  >
                    <Heart size={18} />
                  </Button>
                </div>
                
                {/* Product Features */}
                <div className="border-t border-fg-gray/30 pt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Truck size={18} className="text-fg-darkGray/70" />
                    <span className="text-sm">Free shipping on orders over $50</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <RefreshCcw size={18} className="text-fg-darkGray/70" />
                    <span className="text-sm">Free 30-day returns</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield size={18} className="text-fg-darkGray/70" />
                    <span className="text-sm">2-year quality guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Product Tabs */}
        <section className="py-12 bg-fg-gray/10">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="w-full flex justify-start border-b border-fg-gray/30 bg-transparent mb-6">
                <TabsTrigger 
                  value="description"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-fg-black data-[state=active]:bg-transparent"
                >
                  Description
                </TabsTrigger>
                <TabsTrigger 
                  value="details"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-fg-black data-[state=active]:bg-transparent"
                >
                  Details & Care
                </TabsTrigger>
                <TabsTrigger 
                  value="reviews"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-fg-black data-[state=active]:bg-transparent"
                >
                  Reviews (24)
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="mt-0">
                <div className="bg-white p-6 rounded-md">
                  <h3 className="font-playfair text-xl mb-4">Product Description</h3>
                  <p className="text-fg-darkGray/90 mb-4">
                    Crafted with precision and care, this {product.name.toLowerCase()} represents the pinnacle 
                    of contemporary fashion. The design seamlessly blends comfort with style, making it a versatile 
                    addition to any wardrobe.
                  </p>
                  <p className="text-fg-darkGray/90 mb-4">
                    The premium fabric ensures longevity while maintaining its shape and color through multiple washes. 
                    The attention to detail is evident in every stitch, resulting in a product that not only looks great 
                    but feels exceptional when worn.
                  </p>
                  <p className="text-fg-darkGray/90">
                    Whether you're dressing for a casual day out or a special occasion, this piece offers the perfect 
                    balance of sophistication and comfort, embodying the essence of modern fashion sensibility.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="details" className="mt-0">
                <div className="bg-white p-6 rounded-md">
                  <h3 className="font-playfair text-xl mb-4">Details & Care</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-medium mb-3">Materials & Composition</h4>
                      <ul className="list-disc list-inside text-fg-darkGray/90 space-y-2">
                        <li>95% Cotton, 5% Elastane</li>
                        <li>Ethically sourced materials</li>
                        <li>Sustainable production practices</li>
                        <li>Hypoallergenic fabric</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-3">Care Instructions</h4>
                      <ul className="list-disc list-inside text-fg-darkGray/90 space-y-2">
                        <li>Machine wash cold</li>
                        <li>Tumble dry low</li>
                        <li>Do not bleach</li>
                        <li>Iron on low heat if needed</li>
                        <li>Do not dry clean</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-0">
                <div className="bg-white p-6 rounded-md">
                  <h3 className="font-playfair text-xl mb-4">Customer Reviews</h3>
                  <div className="flex items-center mb-6">
                    <div className="flex mr-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          size={20} 
                          className={star <= 4 ? "fill-yellow-400 text-yellow-400" : "text-fg-gray"} 
                        />
                      ))}
                    </div>
                    <span className="text-lg font-medium">4.0 out of 5</span>
                  </div>
                  
                  <div className="border-t border-fg-gray/30 pt-6 space-y-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <h4 className="font-medium">Sarah J.</h4>
                        <span className="text-sm text-fg-darkGray/70">1 month ago</span>
                      </div>
                      <div className="flex mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star} 
                            size={16} 
                            className={star <= 5 ? "fill-yellow-400 text-yellow-400" : "text-fg-gray"} 
                          />
                        ))}
                      </div>
                      <p className="text-fg-darkGray/90">
                        I absolutely love this product! The quality is excellent and it fits perfectly. 
                        The material is soft and comfortable. Definitely worth the price!
                      </p>
                    </div>
                    
                    <div className="border-t border-fg-gray/30 pt-4">
                      <div className="flex justify-between mb-2">
                        <h4 className="font-medium">Michael T.</h4>
                        <span className="text-sm text-fg-darkGray/70">2 months ago</span>
                      </div>
                      <div className="flex mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star} 
                            size={16} 
                            className={star <= 4 ? "fill-yellow-400 text-yellow-400" : "text-fg-gray"} 
                          />
                        ))}
                      </div>
                      <p className="text-fg-darkGray/90">
                        Great design and comfortable fit. The only reason I'm giving it 4 stars is that 
                        the color was slightly different from what I expected based on the photos.
                      </p>
                    </div>
                    
                    <div className="border-t border-fg-gray/30 pt-4">
                      <div className="flex justify-between mb-2">
                        <h4 className="font-medium">Emily R.</h4>
                        <span className="text-sm text-fg-darkGray/70">3 months ago</span>
                      </div>
                      <div className="flex mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star 
                            key={star} 
                            size={16} 
                            className={star <= 3 ? "fill-yellow-400 text-yellow-400" : "text-fg-gray"} 
                          />
                        ))}
                      </div>
                      <p className="text-fg-darkGray/90">
                        The quality is good, but I found it runs a bit small. I would recommend 
                        sizing up if you're between sizes.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Similar Products */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="section-title mb-8">You May Also Like</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {similarProducts.map((product) => (
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
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default ProductDetail;
