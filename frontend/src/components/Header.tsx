import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import AuthDialog from "@/components/auth/AuthDialog";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b backdrop-blur">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="ServiceConnect Logo"
          className="h-12 w-auto object-contain"
        />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          <button
            onClick={() => handleNavClick("#services")}
            className="hover:text-primary font-medium"
          >
            Services
          </button>
          <button
            onClick={() => handleNavClick("#how-it-works")}
            className="hover:text-primary font-medium"
          >
            How it Works
          </button>
          <AuthDialog defaultTab="signup">
            <Button variant="ghost" className="font-medium">
              Become a Provider
            </Button>
          </AuthDialog>
        </nav>

        {/* Desktop actions */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <AuthDialog defaultTab="signin">
            <Button variant="ghost">Sign In</Button>
          </AuthDialog>
          <AuthDialog defaultTab="signup">
            <Button>Get Started</Button>
          </AuthDialog>
        </div>

        {/* Mobile actions */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-7 w-7 text-foreground" />
            ) : (
              <Menu className="h-7 w-7 text-foreground" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-background shadow-md border-t animate-in slide-in-from-top duration-200 z-40">
          <nav className="flex flex-col gap-6 p-6 text-lg font-medium">
            <button
              onClick={() => handleNavClick("#services")}
              className="text-left hover:text-primary"
            >
              Services
            </button>
            <button
              onClick={() => handleNavClick("#how-it-works")}
              className="text-left hover:text-primary"
            >
              How it Works
            </button>
            <AuthDialog
              defaultTab="signup"
              onOpenChange={(open) => {
                if (!open) setMobileMenuOpen(false);
              }}
            >
              <Button
                variant="ghost"
                className="text-left w-full rounded-sm bg-gray-100 text-gray-950"
              >
                Become a Provider
              </Button>
            </AuthDialog>
          </nav>

          <div className="flex flex-col gap-3 px-6 pb-6">
            <AuthDialog
              defaultTab="signin"
              onOpenChange={(open) => {
                if (!open) setMobileMenuOpen(false);
              }}
            >
              <Button
                className="w-full rounded-sm bg-gray-100 text-gray-950"
                variant="ghost"
              >
                Sign In
              </Button>
            </AuthDialog>

            <AuthDialog
              defaultTab="signup"
              onOpenChange={(open) => {
                if (!open) setMobileMenuOpen(false);
              }}
            >
              <Button className="w-full bg-primary text-white hover:bg-primary/90">
                Get Started
              </Button>
            </AuthDialog>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
