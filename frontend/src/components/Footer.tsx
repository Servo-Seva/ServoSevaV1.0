import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          {/* <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  SC
                </span>
              </div>
              <span className="font-bold text-xl text-foreground">
                ServiceConnect
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Connecting customers with trusted service providers for all your
              home and business needs.
            </p>
            <div className="flex gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div> */}
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/logo.png" // replace with your logo path
                alt="ServiceConnect Logo"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Connecting customers with trusted service providers for all your
              home and business needs.
            </p>
            <div className="flex gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10"
              >
                <Facebook className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10"
              >
                <Twitter className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10"
              >
                <Instagram className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-primary/10"
              >
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <nav className="space-y-3">
              <a
                href="#"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                About Us
              </a>
              <Link
                to="/how-it-works"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                How It Works
              </Link>
              <a
                href="#"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Become a Provider
              </a>
              <a
                href="#"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Help Center
              </a>
              <a
                href="#"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Services</h3>
            <nav className="space-y-3">
              <a
                href="#"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Plumbing
              </a>
              <a
                href="#"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Electrical
              </a>
              <a
                href="#"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Home Cleaning
              </a>
              <a
                href="#"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                Vehicle Service
              </a>
              <a
                href="#"
                className="block text-muted-foreground hover:text-primary transition-colors"
              >
                All Services
              </a>
            </nav>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <span>support@serviceconnect.com</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span>New York, NY</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="font-medium text-foreground">Newsletter</h4>
              <p className="text-sm text-muted-foreground">
                Get updates on new services and offers
              </p>
              <div className="flex gap-2">
                <Input placeholder="Enter your email" className="flex-1" />
                <Button variant="hero" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 ServiceConnect. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <Button variant="ghost" size="sm" className="gap-2">
              <MessageCircle className="h-4 w-4" />
              WhatsApp Support
            </Button>
            <div className="flex gap-4 text-sm">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
