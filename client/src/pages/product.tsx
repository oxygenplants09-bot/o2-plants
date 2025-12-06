import { useRoute } from "wouter";
import { products } from "@/lib/data";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Minus, Plus, ShoppingBag, Droplets, Sun, Wind } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ProductPage() {
  const [match, params] = useRoute("/product/:id");
  const [quantity, setQuantity] = useState(1);
  
  const product = products.find((p) => p.id === parseInt(params?.id || "0"));

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
          <Link href="/shop">
            <Button>Back to Shop</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-24 container mx-auto px-4 md:px-6">
        <Link href="/shop" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
          <ArrowLeft className="w-4 h-4" /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative aspect-[4/5] bg-card rounded-[2rem] overflow-hidden"
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 left-6 bg-background/80 backdrop-blur-md px-4 py-2 rounded-full text-sm font-medium text-foreground border border-white/10">
              Purification Score: {product.purificationScore}/10
            </div>
          </motion.div>

          {/* Details */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-2">
              {product.name}
            </h1>
            <p className="text-xl text-muted-foreground italic font-serif mb-6">
              {product.scientificName}
            </p>
            
            <p className="text-2xl font-medium text-primary mb-8">
              ${product.price.toFixed(2)}
            </p>

            <p className="text-gray-300 leading-relaxed mb-10 text-lg">
              {product.description}
            </p>

            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="bg-card p-4 rounded-xl border border-border text-center">
                <Sun className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground mb-1">Light</p>
                <p className="font-medium text-sm text-foreground">{product.care.light}</p>
              </div>
              <div className="bg-card p-4 rounded-xl border border-border text-center">
                <Droplets className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground mb-1">Water</p>
                <p className="font-medium text-sm text-foreground">{product.care.water}</p>
              </div>
              <div className="bg-card p-4 rounded-xl border border-border text-center">
                <Wind className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-xs text-muted-foreground mb-1">Benefits</p>
                <p className="font-medium text-sm text-foreground">Air Cleaning</p>
              </div>
            </div>

            <div className="space-y-4 mb-10">
              <h3 className="font-heading font-semibold text-foreground">Perfect for:</h3>
              <ul className="space-y-2">
                {product.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <div className="flex items-center bg-card rounded-full border border-border px-2 h-14 w-fit">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="rounded-full hover:bg-background text-foreground"
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="w-12 text-center font-medium text-foreground">{quantity}</span>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setQuantity(quantity + 1)}
                  className="rounded-full hover:bg-background text-foreground"
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>

              <Button size="lg" className="flex-1 rounded-full bg-primary text-primary-foreground hover:bg-white h-14 text-lg font-semibold gap-2">
                <ShoppingBag className="w-5 h-5" /> Add to Cart - ${(product.price * quantity).toFixed(2)}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
