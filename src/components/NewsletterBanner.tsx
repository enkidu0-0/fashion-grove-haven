
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const NewsletterBanner = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would typically handle the newsletter signup
    toast({
      title: "Thank you for subscribing!",
      description: "You've been added to our newsletter list.",
    });
    
    setEmail("");
  };

  return (
    <section className="py-12 bg-fg-black text-fg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">Join Our Newsletter</h2>
          <p className="text-fg-gray mb-6">
            Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow bg-transparent border border-fg-darkGray text-fg-white px-4 py-3 focus:outline-none focus:border-fg-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="bg-fg-white text-fg-black px-6 py-3 font-medium hover:bg-fg-gray transition-colors"
            >
              Subscribe
            </button>
          </form>
          
          <p className="text-xs text-fg-gray mt-4">
            By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterBanner;
