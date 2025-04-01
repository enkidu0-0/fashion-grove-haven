
import { useState, useEffect } from "react";
import { ShoppingCart, Heart, User, Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Mobile Menu Button */}
          {isMobile && (
            <button
              onClick={toggleMenu}
              className="p-2 text-fg-black focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}

          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-fg-black">
              Fashion<span className="font-light">Grown</span>
            </Link>
          </div>

          {/* Navigation - Desktop */}
          {!isMobile && (
            <nav className="hidden md:flex space-x-8 ml-10">
              <Link to="/" className="text-fg-black hover:text-fg-darkGray font-medium">
                Home
              </Link>
              <Link to="/shop" className="text-fg-black hover:text-fg-darkGray font-medium">
                Shop
              </Link>
              <Link to="/collections" className="text-fg-black hover:text-fg-darkGray font-medium">
                Collections
              </Link>
              <Link to="/about" className="text-fg-black hover:text-fg-darkGray font-medium">
                About
              </Link>
              <Link to="/contact" className="text-fg-black hover:text-fg-darkGray font-medium">
                Contact
              </Link>
            </nav>
          )}

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full py-2 pl-10 pr-4 border border-fg-gray rounded-md focus:outline-none focus:ring-1 focus:ring-fg-black"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-fg-darkGray" size={18} />
            </div>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {!isMobile && (
              <>
                <Link to="/account" className="text-fg-black hover:text-fg-darkGray">
                  <User size={24} />
                </Link>
                <Link to="/wishlist" className="text-fg-black hover:text-fg-darkGray">
                  <Heart size={24} />
                </Link>
              </>
            )}
            <Link to="/cart" className="text-fg-black hover:text-fg-darkGray relative">
              <ShoppingCart size={24} />
              <span className="absolute -top-1 -right-1 bg-fg-black text-fg-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>

        {/* Mobile Search - Shown when scrolled */}
        {isMobile && (
          <div className="mt-2">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-2 pl-10 pr-4 border border-fg-gray rounded-md focus:outline-none focus:ring-1 focus:ring-fg-black"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-fg-darkGray" size={18} />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMobile && isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t border-fg-gray shadow-lg animate-fade-in">
            <nav className="flex flex-col py-4">
              <Link
                to="/"
                className="px-4 py-2 text-fg-black hover:bg-fg-gray"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/shop"
                className="px-4 py-2 text-fg-black hover:bg-fg-gray"
                onClick={toggleMenu}
              >
                Shop
              </Link>
              <Link
                to="/collections"
                className="px-4 py-2 text-fg-black hover:bg-fg-gray"
                onClick={toggleMenu}
              >
                Collections
              </Link>
              <Link
                to="/about"
                className="px-4 py-2 text-fg-black hover:bg-fg-gray"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="px-4 py-2 text-fg-black hover:bg-fg-gray"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <div className="flex px-4 py-2 space-x-4">
                <Link to="/account" className="text-fg-black" onClick={toggleMenu}>
                  <User size={24} />
                </Link>
                <Link to="/wishlist" className="text-fg-black" onClick={toggleMenu}>
                  <Heart size={24} />
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
