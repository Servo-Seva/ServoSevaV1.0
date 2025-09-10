import { ThemeToggle } from "@/components/ThemeToggle";
import AuthDialog from "@/components/auth/AuthDialog";
import {
  Home,
  Wrench,
  Zap,
  Briefcase,
  User,
  Search,
  ShoppingCart,
  MapPin,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [location, setLocation] = useState("Nungambakkam, Chennai");
  const navigate = useNavigate();
  const locationHook = useLocation();
  const isHome = locationHook.pathname === "/";
  const isLogin = locationHook.pathname === "/login";

  const handleNavClick = (id: string) => {
    if (typeof window === "undefined") return;
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop / Tablet Header */}
      <header className="sticky top-0 z-50 bg-background border-b shadow-sm backdrop-blur-md hidden md:flex">
        <div className="container flex items-center justify-between h-16 gap-6">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img
              src="/logo.png"
              alt="ServiceConnect Logo"
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Categories */}
          <nav className="flex items-center gap-6 font-medium text-sm">
            <button className="hover:text-primary transition-colors">
              Beauty
            </button>
            <button className="hover:text-primary transition-colors">
              Homes
            </button>
          </nav>

          {/* Location + Search */}
          <div className="flex items-center gap-3 flex-1 max-w-lg ml-6">
            <button
              className="flex items-center px-3 py-2 border rounded-lg bg-muted/30 flex-1 hover:bg-primary/10 transition gap-2"
              onClick={() => navigate("/location")}
              style={{ minWidth: 0 }}
            >
              <span className="flex items-center justify-center">
                <MapPin
                  className="h-5 w-5 text-primary"
                  aria-label="Location"
                />
              </span>
              <span className="text-sm font-medium text-foreground truncate">
                {location}
              </span>
            </button>
            {/* <div className="flex items-center px-3 py-2 border rounded-lg bg-muted/30 flex-1">
              <Search className="h-4 w-4 text-muted-foreground mr-2 shrink-0" />
              <input
                type="text"
                placeholder="Search for ‘AC service’"
                className="flex-1 bg-transparent outline-none text-sm"
              />
            </div> */}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button className="p-2 rounded-full hover:bg-muted">
              <ShoppingCart className="h-5 w-5" />
            </button>

            {/* Desktop / Tablet Account navigates to Account page */}
            <button
              onClick={() => navigate("/account")}
              className="p-2 rounded-full hover:bg-muted"
            >
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Header - Only on Home Page */}
      {isHome && (
        <div className="md:hidden sticky top-0 z-50 bg-background border-b shadow-sm backdrop-blur-md p-2">
          {/* Location + Cart row */}
          <div className="flex items-center justify-between">
            {/* Location Dropdown */}
            <div className="flex-1">
              <button
                className="flex items-center px-3 py-2 border rounded-sm bg-muted/30 flex-1 hover:bg-primary/10 transition gap-2"
                onClick={() => navigate("/location")}
              >
                <MapPin
                  className="h-5 w-5 text-primary"
                  aria-label="Location"
                />
                <span className="text-sm font-medium text-foreground truncate">
                  {location}
                </span>
              </button>
            </div>

            {/* Cart Button */}
            <button className="p-2 rounded-full border border-gray-400 hover:bg-muted ml-2">
              <ShoppingCart className="h-5 w-5" />
            </button>
          </div>

          {/* Search Bar below */}
          {/* <div className="flex items-center px-3 py-2 border rounded-lg bg-muted/30 mt-2">
            <Search className="h-4 w-4 text-muted-foreground mr-2 shrink-0" />
            <input
              type="text"
              placeholder="Search for ‘AC service’"
              className="flex-1 bg-transparent outline-none text-sm"
            />
          </div> */}
        </div>
      )}

      {/* Mobile Bottom Navbar - Visible on All Pages except login */}
      {!isLogin && (
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
              onClick={() => navigate("/how-it-works")}
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
            <button
              onClick={() => navigate("/account")}
              className="flex flex-col items-center justify-center text-xs text-muted-foreground hover:text-primary"
            >
              <User className="h-5 w-5" />
              <span>Account</span>
            </button>
          </div>
        </nav>
      )}
    </>
  );
};

export default Header;
