
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  // Team members data
  const team = [
    {
      name: "Jessica Miller",
      position: "Founder & Creative Director",
      image: "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=400&auto=format&fit=crop&q=60",
      bio: "With over 15 years of experience in the fashion industry, Jessica founded our brand with a vision of creating timeless, sustainable fashion for the modern individual."
    },
    {
      name: "Michael Chen",
      position: "Head of Design",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60",
      bio: "Michael brings his unique perspective and international experience to our design team, creating innovative pieces that blend contemporary style with timeless elegance."
    },
    {
      name: "Sophia Rodriguez",
      position: "Sustainability Officer",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=60",
      bio: "Passionate about ethical fashion, Sophia ensures that our sustainability commitments are integrated into every aspect of our business operations."
    },
    {
      name: "David Thompson",
      position: "Production Manager",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=60",
      bio: "David oversees our production processes, ensuring the highest quality standards while maintaining our commitment to ethical manufacturing practices."
    }
  ];
  
  // Values data
  const values = [
    {
      title: "Quality",
      description: "We believe in creating products that last. Every piece is crafted with attention to detail and made from premium materials.",
      icon: "✓"
    },
    {
      title: "Sustainability",
      description: "Our commitment to the planet is unwavering. We use eco-friendly materials and ethical manufacturing processes.",
      icon: "♻"
    },
    {
      title: "Inclusivity",
      description: "Fashion is for everyone. We design with diversity in mind, creating pieces that celebrate individuality.",
      icon: "♡"
    },
    {
      title: "Innovation",
      description: "We constantly push boundaries, combining traditional craftsmanship with modern technology and design thinking.",
      icon: "✦"
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow pt-16">
        {/* Hero Section */}
        <section className="relative bg-fg-black text-white overflow-hidden h-[60vh] md:h-[70vh]">
          <div className="absolute inset-0 opacity-40">
            <img 
              src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=1200&auto=format&fit=crop&q=60" 
              alt="About Us"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="container mx-auto h-full flex flex-col justify-center items-center relative z-10 text-center px-4">
            <h1 className="text-4xl md:text-6xl font-playfair mb-4 tracking-tight">Our Story</h1>
            <p className="text-lg md:text-xl max-w-3xl opacity-90 mb-8">
              Discover the journey, values, and people behind our brand.
            </p>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-playfair mb-6">From Passion to Purpose</h2>
                <p className="text-fg-darkGray/90 mb-4">
                  Founded in 2015, our journey began with a simple yet powerful vision: to create clothing that combines 
                  timeless elegance with contemporary style, all while maintaining a commitment to ethical and sustainable 
                  practices.
                </p>
                <p className="text-fg-darkGray/90 mb-4">
                  What started as a small collection designed in a tiny studio has now grown into a globally recognized 
                  brand. Throughout our growth, we've remained true to our core values of quality, sustainability, and 
                  exceptional design.
                </p>
                <p className="text-fg-darkGray/90">
                  Every piece in our collection tells a story – of skilled artisans, of responsibly sourced materials, 
                  and of our ongoing commitment to reducing our environmental footprint while maximizing our positive 
                  social impact.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800&auto=format&fit=crop&q=60" 
                    alt="Our workshop" 
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-md w-32 h-32 flex items-center justify-center">
                  <div className="text-center">
                    <span className="block text-3xl font-playfair">8+</span>
                    <span className="text-sm text-fg-darkGray/70">Years of Excellence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values Section */}
        <section className="py-20 bg-fg-gray/10">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair mb-4">Our Values</h2>
              <p className="text-fg-darkGray/90">
                Our values guide everything we do – from the materials we source to the way we treat our team 
                and the impact we have on communities and the planet.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg border border-fg-gray/30 hover:shadow-md transition-shadow duration-300">
                  <div className="mb-4 text-4xl">{value.icon}</div>
                  <h3 className="font-playfair text-xl mb-3">{value.title}</h3>
                  <p className="text-fg-darkGray/80">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Our Team Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair mb-4">Meet Our Team</h2>
              <p className="text-fg-darkGray/90">
                The passionate individuals behind our brand, dedicated to bringing our vision to life.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="group">
                  <div className="aspect-square overflow-hidden mb-4 rounded-lg">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-playfair text-xl mb-1">{member.name}</h3>
                  <p className="text-fg-darkGray/70 text-sm mb-3">{member.position}</p>
                  <p className="text-fg-darkGray/90 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Sustainability Section */}
        <section className="py-20 bg-fg-gray/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl md:text-4xl font-playfair mb-6">Our Commitment to Sustainability</h2>
                <p className="text-fg-darkGray/90 mb-4">
                  Sustainability isn't just a buzzword for us – it's fundamental to how we operate. We're committed to 
                  minimizing our environmental impact while creating beautiful, high-quality clothing.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="mt-1 text-fg-black mr-3">✓</div>
                    <p className="text-fg-darkGray/90">
                      We use organic and recycled materials whenever possible, reducing our reliance on virgin resources.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 text-fg-black mr-3">✓</div>
                    <p className="text-fg-darkGray/90">
                      Our packaging is plastic-free and made from recycled materials.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 text-fg-black mr-3">✓</div>
                    <p className="text-fg-darkGray/90">
                      We partner with manufacturers who treat workers fairly and maintain safe working conditions.
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="mt-1 text-fg-black mr-3">✓</div>
                    <p className="text-fg-darkGray/90">
                      We're continuously working to reduce waste, water usage, and emissions throughout our supply chain.
                    </p>
                  </div>
                </div>
                <Link to="/contact">
                  <Button variant="outline">Contact Us to Learn More</Button>
                </Link>
              </div>
              <div className="order-1 md:order-2">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60" 
                    alt="Sustainable materials" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-fg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-playfair mb-4">Join Our Journey</h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Be part of our story as we continue to create fashion that looks good, feels good, and does good.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/shop">
                <Button variant="default" className="bg-white text-fg-black hover:bg-white/90">Shop Collection</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="text-white border-white hover:bg-white/10">Contact Us</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default About;
