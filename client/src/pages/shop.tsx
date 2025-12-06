import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/lib/data";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function Shop() {
  const [priceRange, setPriceRange] = useState([0, 100]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-16 container mx-auto px-4 md:px-6">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">Shop Plants</h1>
        <p className="text-muted-foreground max-w-2xl text-lg mb-12">
          Curated selection of the world's most effective air-purifying plants, delivered directly to your door in sustainable packaging.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Sidebar Filters */}
          <div className="hidden md:block space-y-8">
            <div>
              <h3 className="font-heading font-semibold text-foreground mb-4">Filter by Price</h3>
              <Slider 
                defaultValue={[0, 100]} 
                max={150} 
                step={1} 
                value={priceRange}
                onValueChange={setPriceRange}
                className="mb-4"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
            
            <Separator className="bg-border" />

            <div>
              <h3 className="font-heading font-semibold text-foreground mb-4">Light Level</h3>
              <div className="space-y-3">
                {["Low Light", "Medium Light", "Bright Light"].map((label) => (
                  <div key={label} className="flex items-center space-x-2">
                    <Checkbox id={label} />
                    <Label htmlFor={label} className="text-muted-foreground font-normal cursor-pointer">{label}</Label>
                  </div>
                ))}
              </div>
            </div>

            <Separator className="bg-border" />

            <div>
              <h3 className="font-heading font-semibold text-foreground mb-4">Care Level</h3>
              <div className="space-y-3">
                {["Beginner", "Intermediate", "Advanced"].map((label) => (
                  <div key={label} className="flex items-center space-x-2">
                    <Checkbox id={label} />
                    <Label htmlFor={label} className="text-muted-foreground font-normal cursor-pointer">{label}</Label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="md:col-span-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
