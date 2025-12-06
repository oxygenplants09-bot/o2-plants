import { motion } from "framer-motion";
import { ArrowRight, Wind, Droplets, Sun, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ui/ProductCard";
import { products, testimonials } from "@/lib/data";
import heroImage from "@assets/generated_images/hero_image_of_a_modern_living_room_filled_with_air_purifying_plants.png";

export default function Home() {
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Modern living room with plants"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium mb-6">
              Eco-Friendly Living
            </span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-white leading-[1.1] mb-6">
              Fight Pollution, <br />
              <span className="text-primary">Breathe Better.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-lg leading-relaxed">
              Transform your indoor environment with our curated collection of air-purifying plants. Healthier homes start with cleaner air.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/shop">
                <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-white px-8 h-12 text-base font-semibold">
                  Shop Air-Purifying Plants
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="rounded-full border-white/20 text-white hover:bg-white/10 px-8 h-12 text-base">
                  Our Mission
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Oxygen? Section */}
      <section className="py-24 bg-card/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Why Oxygen?</h2>
            <p className="text-muted-foreground">
              We don't just sell plants; we provide natural air filtration systems for your home.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: Wind, title: "Air Purification", desc: "Scientifically proven to remove toxins like formaldehyde and benzene." },
              { icon: ShieldCheck, title: "Sustainable", desc: "Ethically sourced plants grown in eco-friendly environments." },
              { icon: Droplets, title: "Self-Watering", desc: "Many of our pots come with smart watering systems." },
              { icon: Sun, title: "Healthier Living", desc: "Boost mood, productivity, and sleep quality naturally." },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-card p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">Clean Air Curated</h2>
              <p className="text-muted-foreground">Our top picks for a toxin-free home.</p>
            </div>
            <Link href="/shop" className="hidden md:flex items-center gap-2 text-primary font-medium hover:text-white transition-colors">
              View all plants <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link href="/shop">
              <Button variant="outline" className="rounded-full w-full">View all plants</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
           <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16 text-background">Stories of Fresh Air</h2>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {testimonials.map((t, idx) => (
               <motion.div 
                 key={t.id}
                 initial={{ opacity: 0, scale: 0.9 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ delay: idx * 0.1 }}
                 className="bg-background/5 backdrop-blur-sm p-8 rounded-2xl border border-background/10"
               >
                 <div className="flex gap-1 mb-4 text-background">
                   {[...Array(5)].map((_, i) => <span key={i}>★</span>)}
                 </div>
                 <p className="text-lg font-medium text-background mb-6 leading-relaxed">"{t.text}"</p>
                 <div>
                   <p className="font-bold text-background">{t.name}</p>
                   <p className="text-sm text-background/70">{t.role}</p>
                 </div>
               </motion.div>
             ))}
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto bg-card rounded-[2.5rem] p-12 md:p-20 relative overflow-hidden border border-border">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
          
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">Ready to breathe easier?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
            Join thousands of others who have transformed their indoor air quality with Oxygen.
          </p>
          <Link href="/shop">
            <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-white px-10 h-14 text-lg font-semibold">
              Start Your Journey
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
