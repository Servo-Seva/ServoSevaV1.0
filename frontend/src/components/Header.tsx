import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import AuthDialog from "@/components/auth/AuthDialog";
import { Home, Wrench, Zap, Briefcase, User } from "lucide-react";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const handleNavClick = (id: string) => {
    if (typeof window === "undefined") return;
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.scrollTo({ top: 0, behavior: "smooth" }); // fallback for Home
  };

  const navigate = useNavigate();

  return (
    <>
      {/* Top Header (desktop & theme toggle) */}
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

          {/* Mobile actions (top right) */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Bottom Nav (mobile only) */}
      <nav
        className="fixed bottom-0 left-0 right-0 z-[60] bg-background border-t shadow-md md:hidden"
        aria-label="Mobile navigation"
      >
        <div className="grid grid-cols-5 h-16">
          {/* Home */}
          <button
            onClick={() => navigate("/")}
            className="flex flex-col items-center justify-center text-xs text-muted-foreground hover:text-primary"
          >
            <Home className="h-5 w-5" />
            <span>Home</span>
          </button>

          {/* Services */}
          <button
            onClick={() => handleNavClick("#services")}
            className="flex flex-col items-center justify-center text-xs text-muted-foreground hover:text-primary"
          >
            <Wrench className="h-5 w-5" />
            <span>Services</span>
          </button>

          {/* How it Works */}
          <button
            onClick={() => handleNavClick("#how-it-works")}
            className="flex flex-col items-center justify-center text-xs text-muted-foreground hover:text-primary"
          >
            <Zap className="h-5 w-5" />
            <span>How it Works</span>
          </button>

          {/* Provider */}
          <AuthDialog defaultTab="signup">
            <button className="flex flex-col items-center justify-center text-xs text-muted-foreground hover:text-primary">
              <Briefcase className="h-5 w-5" />
              <span>Provider</span>
            </button>
          </AuthDialog>

          {/* Account */}
          <AuthDialog defaultTab="signin">
            <button className="flex flex-col items-center justify-center text-xs text-muted-foreground hover:text-primary">
              <User className="h-5 w-5" />
              <span>Account</span>
            </button>
          </AuthDialog>
        </div>
      </nav>
    </>
  );
};

export default Header;
