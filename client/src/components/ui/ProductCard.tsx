import { Link } from "wouter";
import { Product } from "@/lib/data";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`}>
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        className="cursor-pointer group h-full block"
      >
        <Card className="bg-transparent border-none shadow-none h-full flex flex-col">
          <CardContent className="p-0 relative aspect-[4/5] overflow-hidden rounded-2xl bg-card/50">
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <div className="absolute bottom-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <Button size="icon" className="rounded-full bg-primary text-primary-foreground hover:bg-white">
                <Plus className="w-5 h-5" />
              </Button>
            </div>
            
            <div className="absolute top-4 left-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-foreground">
              Air Purifier
            </div>
          </CardContent>
          <CardFooter className="flex flex-col items-start p-4 gap-1">
            <h3 className="font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground italic font-serif">
              {product.scientificName}
            </p>
            <p className="text-md font-medium text-foreground mt-1">
              ${product.price.toFixed(2)}
            </p>
          </CardFooter>
        </Card>
      </motion.div>
    </Link>
  );
}
