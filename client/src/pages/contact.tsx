import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-32 pb-24 container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">Get in Touch</h1>
            <p className="text-muted-foreground text-lg mb-12">
              Have a question about plant care, shipping, or just want to say hi? We'd love to hear from you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground text-lg">Email</h3>
                  <p className="text-muted-foreground">hello@oxygen.com</p>
                  <p className="text-muted-foreground">support@oxygen.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground text-lg">Office</h3>
                  <p className="text-muted-foreground">123 Green Way, Eco City</p>
                  <p className="text-muted-foreground">Earth, 90210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground text-lg">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  <p className="text-muted-foreground">Mon-Fri from 9am to 6pm</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-[2rem] border border-border">
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="text-sm font-medium text-foreground">First name</label>
                  <Input id="first-name" placeholder="John" className="bg-background border-border" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-sm font-medium text-foreground">Last name</label>
                  <Input id="last-name" placeholder="Doe" className="bg-background border-border" />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                <Input id="email" type="email" placeholder="john@example.com" className="bg-background border-border" />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
                <Input id="subject" placeholder="How can we help?" className="bg-background border-border" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                <Textarea id="message" placeholder="Your message..." className="min-h-[150px] bg-background border-border" />
              </div>

              <Button type="submit" size="lg" className="w-full rounded-full bg-primary text-primary-foreground hover:bg-white font-semibold">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
