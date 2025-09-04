import { Button } from "@/components/ui/button";
import { Menu, Search, User } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import AuthDialog from "@/components/auth/AuthDialog";

const Header = () => {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">SC</span>
            </div>
            <span className="font-bold text-xl text-foreground">ServiceConnect</span>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a>
            <a href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">How it Works</a>
            <a href="#providers" className="text-muted-foreground hover:text-foreground transition-colors">Become a Provider</a>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-4 w-4" />
          </Button>
          
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <AuthDialog>
              <Button variant="ghost">Sign In</Button>
            </AuthDialog>
            <AuthDialog>
              <Button variant="hero">Get Started</Button>
            </AuthDialog>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;