
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative bg-fg-black text-white overflow-hidden h-[40vh] md:h-[50vh]">
          <div className="absolute inset-0 opacity-40">
            <img 
              src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?w=1200&auto=format&fit=crop&q=60" 
              alt="Contact Us"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="container mx-auto h-full flex flex-col justify-center items-center relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-playfair mb-4 tracking-tight">Get in Touch</h1>
            <p className="text-lg md:text-xl max-w-3xl opacity-90">
              We'd love to hear from you. Contact us with any questions, feedback, or collaboration inquiries.
            </p>
          </div>
        </section>
        
        {/* Contact Information */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-fg-gray/5 p-6 rounded-lg border border-fg-gray/20 flex flex-col items-center text-center">
                <Mail className="h-10 w-10 text-fg-black mb-4" />
                <h3 className="font-playfair text-xl mb-2">Email Us</h3>
                <p className="text-fg-darkGray/90 mb-2">For general inquiries</p>
                <a href="mailto:info@fashiongrown.com" className="text-fg-black hover:underline">
                  info@fashiongrown.com
                </a>
              </div>
              
              <div className="bg-fg-gray/5 p-6 rounded-lg border border-fg-gray/20 flex flex-col items-center text-center">
                <Phone className="h-10 w-10 text-fg-black mb-4" />
                <h3 className="font-playfair text-xl mb-2">Call Us</h3>
                <p className="text-fg-darkGray/90 mb-2">Customer support</p>
                <a href="tel:+919876543210" className="text-fg-black hover:underline">
                  +91 98765 43210
                </a>
              </div>
              
              <div className="bg-fg-gray/5 p-6 rounded-lg border border-fg-gray/20 flex flex-col items-center text-center">
                <MapPin className="h-10 w-10 text-fg-black mb-4" />
                <h3 className="font-playfair text-xl mb-2">Visit Us</h3>
                <p className="text-fg-darkGray/90 mb-2">Our flagship store</p>
                <address className="text-fg-black not-italic">
                  42 Park Street<br />
                  Kolkata, West Bengal 700016
                </address>
              </div>
              
              <div className="bg-fg-gray/5 p-6 rounded-lg border border-fg-gray/20 flex flex-col items-center text-center">
                <Clock className="h-10 w-10 text-fg-black mb-4" />
                <h3 className="font-playfair text-xl mb-2">Opening Hours</h3>
                <p className="text-fg-darkGray/90 mb-2">Store hours</p>
                <p className="text-fg-black">
                  Mon-Sat: 10am - 8pm<br />
                  Sun: 11am - 6pm
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Form and Map */}
        <section className="py-16 bg-fg-gray/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-playfair mb-6">Send Us a Message</h2>
                <p className="text-fg-darkGray/90 mb-8">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      required
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message here..."
                      required
                      className="w-full min-h-[150px]"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full sm:w-auto" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </span>
                    )}
                  </Button>
                </form>
              </div>
              
              {/* Map */}
              <div>
                <h2 className="text-3xl font-playfair mb-6">Our Location</h2>
                <p className="text-fg-darkGray/90 mb-8">
                  Visit our flagship store in the heart of Kolkata's fashion district.
                </p>
                
                <div className="relative aspect-square md:aspect-[4/3] bg-fg-gray/20 rounded-lg overflow-hidden mb-6">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.21260474823!2d88.34824937583055!3d22.562308879551296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02773b5e387231%3A0xccc6123fefc9a2ed!2sPark%20Street%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1681234567890!5m2!1sen!2sin" 
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Store Location"
                  ></iframe>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-fg-gray/20">
                  <h3 className="font-playfair text-xl mb-4">Store Details</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <MapPin className="h-5 w-5 text-fg-black mr-2 mt-0.5" />
                      <div>
                        <p className="font-medium">Address:</p>
                        <p className="text-fg-darkGray/90">42 Park Street, Kolkata, West Bengal 700016</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Phone className="h-5 w-5 text-fg-black mr-2 mt-0.5" />
                      <div>
                        <p className="font-medium">Phone:</p>
                        <p className="text-fg-darkGray/90">+91 98765 43210</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Clock className="h-5 w-5 text-fg-black mr-2 mt-0.5" />
                      <div>
                        <p className="font-medium">Hours:</p>
                        <p className="text-fg-darkGray/90">
                          Monday to Saturday: 10am - 8pm<br />
                          Sunday: 11am - 6pm
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-playfair mb-10 text-center">Frequently Asked Questions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 max-w-5xl mx-auto">
              <div>
                <h3 className="font-playfair text-xl mb-3">How long does shipping take?</h3>
                <p className="text-fg-darkGray/90">
                  Standard shipping typically takes 2-4 business days within major Indian cities. 
                  Remote areas may take 4-7 business days for delivery.
                </p>
              </div>
              
              <div>
                <h3 className="font-playfair text-xl mb-3">What is your return policy?</h3>
                <p className="text-fg-darkGray/90">
                  We offer a 30-day return policy for unworn items in their original packaging. 
                  Returns are free for customers in metro cities of India.
                </p>
              </div>
              
              <div>
                <h3 className="font-playfair text-xl mb-3">Do you offer size exchanges?</h3>
                <p className="text-fg-darkGray/90">
                  Yes, we offer free size exchanges. Simply initiate an exchange through your account 
                  or contact our customer service team.
                </p>
              </div>
              
              <div>
                <h3 className="font-playfair text-xl mb-3">How can I track my order?</h3>
                <p className="text-fg-darkGray/90">
                  Once your order ships, you'll receive a confirmation SMS and email with tracking information. 
                  You can also track your order through your account on our website.
                </p>
              </div>
              
              <div>
                <h3 className="font-playfair text-xl mb-3">Are your products sustainable?</h3>
                <p className="text-fg-darkGray/90">
                  Yes, sustainability is core to our mission. We use organic cotton sourced from Indian farmers
                  and continually work to reduce our environmental footprint.
                </p>
              </div>
              
              <div>
                <h3 className="font-playfair text-xl mb-3">Do you offer gift cards?</h3>
                <p className="text-fg-darkGray/90">
                  Yes, we offer digital and physical gift cards in various denominations from ₹500 to ₹10,000. 
                  They're perfect for when you want to give the gift of choice.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Contact;
