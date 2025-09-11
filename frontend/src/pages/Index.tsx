import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceCategories from "@/components/ServiceCategories";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import AllServices from "@/components/AllServices";
import { MessageCircle } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

const Index = () => {
  const whatsappNumber = "+15551234567"; // Replace with your number
  const whatsappMessage = "Hello, I want to inquire about your services."; // Optional default message

  return (
    <div className="min-h-screen bg-background relative">
      {/* <Header /> */}
      <main className="pb-20 md:pb-0">
        <Hero />
        <ServiceCategories />
        <AllServices />
        <Testimonials />
        <Footer />
      </main>

      {/* Floating WhatsApp Button */}
      {/* <a
        href={`https://wa.me/${whatsappNumber.replace(
          /[^0-9]/g,
          ""
        )}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-5 z-50 bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg flex items-center justify-center transition-all
             bottom-20 md:bottom-10 lg:bottom-5
             transform translate-x-24 opacity-0 animate-slide-in"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          className="h-6 w-6"
        >
          <path d="M20.52 3.48A11.94 11.94 0 0012 .03C5.37.03.04 5.36.04 12c0 2.12.55 4.08 1.5 5.79L.03 24l6.38-1.48a11.94 11.94 0 006.59 1.85h.01c6.63 0 11.96-5.33 11.96-11.96 0-3.2-1.25-6.2-3.46-8.93zM12 21.9a9.9 9.9 0 01-5.05-1.42l-.36-.22-3.79.88.83-3.7-.24-.38A9.9 9.9 0 012.1 12C2.1 6.07 6.07 2.1 12 2.1c2.68 0 5.2 1.04 7.1 2.92a9.9 9.9 0 012.92 7.1c0 5.93-4.97 10.8-11 10.8zm5.64-7.41c-.31-.16-1.84-.91-2.12-1.02s-.49-.16-.69.16-.79.95-.97 1.14-.36.24-.67.08a8.08 8.08 0 01-2.37-1.45 8.98 8.98 0 01-1.65-2.05c-.17-.29 0-.44.13-.59.13-.13.31-.36.47-.54.16-.17.21-.29.31-.49.1-.21.05-.38-.03-.54-.08-.16-.69-1.66-.94-2.27-.25-.6-.51-.52-.69-.53l-.59-.01c-.21 0-.54.08-.82.38s-1.08 1.06-1.08 2.58 1.11 3 1.26 3.21c.16.21 2.18 3.34 5.28 4.68a9.06 9.06 0 002.41.77c1.02.05 1.57.04 2.16-.33.59-.37 1.7-1.57 1.94-3.08.24-1.5.24-1.39.17-1.52-.07-.12-.24-.21-.55-.38z" />
        </svg>
      </a> */}
      <a
        href={`https://wa.me/${whatsappNumber.replace(
          /[^0-9]/g,
          ""
        )}?text=${encodeURIComponent(whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-5 z-50 bg-green-500 hover:bg-green-600 p-4 rounded-full shadow-lg flex items-center justify-center bottom-20 md:bottom-10 lg:bottom-5"
      >
        <BsWhatsapp className="h-5 w-5 text-white" />
      </a>
    </div>
  );
};

export default Index;
