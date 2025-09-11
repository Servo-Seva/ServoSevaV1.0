import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceCategories from "@/components/ServiceCategories";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import AllServices from "@/components/AllServices";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* <Header /> */}
      <main className="pb-20 md:pb-0">
        <Hero />
        <ServiceCategories />
        <AllServices />

        <Testimonials />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
