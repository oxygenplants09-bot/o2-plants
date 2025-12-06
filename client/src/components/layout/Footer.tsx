import { Link } from "wouter";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <Link href="/" className="text-2xl font-heading font-bold tracking-tight text-foreground flex items-center gap-2 mb-4">
              <span className="w-3 h-3 rounded-full bg-primary" />
              Oxygen
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Every plant you bring home helps clean the air we breathe. Join our mission for a healthier planet, one leaf at a time.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-6 text-foreground">Shop</h4>
            <ul className="space-y-3">
              <li><Link href="/shop" className="text-muted-foreground hover:text-primary transition-colors text-sm">All Plants</Link></li>
              <li><Link href="/shop?filter=new" className="text-muted-foreground hover:text-primary transition-colors text-sm">New Arrivals</Link></li>
              <li><Link href="/shop?filter=pet-friendly" className="text-muted-foreground hover:text-primary transition-colors text-sm">Pet Friendly</Link></li>
              <li><Link href="/shop?filter=easy-care" className="text-muted-foreground hover:text-primary transition-colors text-sm">Easy Care</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-6 text-foreground">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">Our Story</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Contact</Link></li>
              <li><Link href="/shipping" className="text-muted-foreground hover:text-primary transition-colors text-sm">Shipping & Returns</Link></li>
              <li><Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors text-sm">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-6 text-foreground">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              123 Green Way, Eco City, Earth<br />
              hello@oxygen.com
            </p>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Oxygen. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
