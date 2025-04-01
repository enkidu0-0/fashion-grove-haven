
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-fg-black text-fg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About</h3>
            <p className="text-fg-gray mb-4">
              Fashion Grown offers high-quality clothing with a focus on sustainable fashion and timeless style.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-fg-white hover:text-fg-gray transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" className="text-fg-white hover:text-fg-gray transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-fg-white hover:text-fg-gray transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://youtube.com" className="text-fg-white hover:text-fg-gray transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-fg-gray hover:text-fg-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-fg-gray hover:text-fg-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-fg-gray hover:text-fg-white transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/size-guide" className="text-fg-gray hover:text-fg-white transition-colors">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-fg-gray hover:text-fg-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* My Account */}
          <div>
            <h3 className="text-xl font-semibold mb-4">My Account</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/account" className="text-fg-gray hover:text-fg-white transition-colors">
                  My Account
                </Link>
              </li>
              <li>
                <Link to="/orders" className="text-fg-gray hover:text-fg-white transition-colors">
                  Order History
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="text-fg-gray hover:text-fg-white transition-colors">
                  Wishlist
                </Link>
              </li>
              <li>
                <Link to="/newsletter" className="text-fg-gray hover:text-fg-white transition-colors">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span className="text-fg-gray">123 Fashion Street, New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <a href="tel:+12125551234" className="text-fg-gray hover:text-fg-white transition-colors">
                  (212) 555-1234
                </a>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <a href="mailto:info@fashiongrown.com" className="text-fg-gray hover:text-fg-white transition-colors">
                  info@fashiongrown.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-12 border-t border-fg-darkGray pt-8">
          <div className="max-w-md mx-auto md:mx-0">
            <h3 className="text-xl font-semibold mb-4">Subscribe to our newsletter</h3>
            <p className="text-fg-gray mb-4">Get the latest updates on new products and upcoming sales</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow bg-fg-darkGray text-fg-white px-4 py-2 focus:outline-none"
              />
              <button className="bg-fg-white text-fg-black px-4 py-2 font-medium hover:bg-fg-gray transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Payment Methods & Copyright */}
        <div className="mt-12 border-t border-fg-darkGray pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-fg-gray text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Fashion Grown. All rights reserved.
          </p>
          <div className="flex items-center">
            <span className="text-fg-gray text-sm mr-2">Payment Methods:</span>
            <div className="flex space-x-2">
              <div className="bg-fg-white text-fg-black text-xs px-2 py-1 rounded">Visa</div>
              <div className="bg-fg-white text-fg-black text-xs px-2 py-1 rounded">Mastercard</div>
              <div className="bg-fg-white text-fg-black text-xs px-2 py-1 rounded">PayPal</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
