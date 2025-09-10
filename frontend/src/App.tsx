import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Services from "./pages/Services";
import NotFound from "./pages/NotFound";
import AccountPage from "./components/AccountPage";
import Header from "./components/Header";
import SearchPage from "./pages/SearchPage";
import PhoneLoginPage from "./pages/PhoneLoginPage";
import LocationPickerPage from "./pages/LocationPickerPage";
import HowItWorksPage from "./pages/HowItWorksPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Header /> {/* Header always visible including bottom navbar */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services/:category" element={<Services />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/login" element={<PhoneLoginPage />} />
            <Route path="/location" element={<LocationPickerPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="/account" element={<AccountPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
