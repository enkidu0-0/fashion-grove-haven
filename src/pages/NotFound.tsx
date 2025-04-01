
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center bg-white">
        <div className="text-center px-4 py-20">
          <h1 className="text-6xl font-bold text-fg-black mb-4">404</h1>
          <p className="text-xl text-fg-darkGray mb-8">
            Oops! The page you're looking for cannot be found.
          </p>
          <Link
            to="/"
            className="bg-fg-black text-fg-white px-6 py-3 rounded-sm font-medium hover:bg-fg-darkGray transition-colors duration-300"
          >
            Return to Home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
