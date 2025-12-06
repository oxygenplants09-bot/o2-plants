import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import heroImage from "@assets/generated_images/hero_image_of_a_modern_living_room_filled_with_air_purifying_plants.png";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <div className="relative pt-32 pb-24 container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-8">
            We believe in <span className="text-primary">cleaner air</span> for everyone.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Oxygen was founded with a simple mission: to fight indoor pollution using nature's most powerful technology—plants.
          </p>
        </motion.div>
      </div>

      {/* Image Section */}
      <div className="w-full h-[60vh] relative overflow-hidden">
        <img 
          src={heroImage} 
          alt="Oxygen Office" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Story Section */}
      <div className="py-24 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Our Story</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Living in modern cities, we often forget that the air inside our homes can be up to 5 times more polluted than the air outside. Volatile Organic Compounds (VOCs) from furniture, paint, and cleaning products silently affect our health.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mt-4">
              We started Oxygen to bring a solution that is both beautiful and functional. We curate plants that are NASA-certified to remove toxins, and we pair them with sustainable, self-watering pots to make care effortless.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-heading font-bold text-foreground mb-6">Sustainability First</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              We don't just care about your home's environment; we care about the planet's environment. All our plants are sourced from local, sustainable growers. Our packaging is 100% biodegradable, and for every plant sold, we plant a tree in deforested areas.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 pt-8">
            <div className="text-center p-8 bg-card rounded-2xl border border-border">
              <span className="block text-4xl font-bold text-primary mb-2">10k+</span>
              <span className="text-muted-foreground">Plants Delivered</span>
            </div>
            <div className="text-center p-8 bg-card rounded-2xl border border-border">
              <span className="block text-4xl font-bold text-primary mb-2">50k+</span>
              <span className="text-muted-foreground">Liters of Air Cleaned</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
