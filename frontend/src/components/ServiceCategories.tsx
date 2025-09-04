import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Wrench, 
  Zap, 
  Car, 
  Sparkles, 
  Hammer, 
  Shield, 
  Paintbrush,
  TreePine,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Plumbing",
    description: "Pipe repairs, leak fixes, installations",
    popular: true,
    color: "text-primary",
    slug: "plumbing"
  },
  {
    icon: Zap,
    title: "Electrical",
    description: "Wiring, repairs, installations",
    popular: true,
    color: "text-warning",
    slug: "electrical"
  },
  {
    icon: Car,
    title: "Vehicle Service",
    description: "Car maintenance, repairs, cleaning",
    popular: false,
    color: "text-success",
    slug: "vehicle"
  },
  {
    icon: Sparkles,
    title: "Home Cleaning",
    description: "Deep cleaning, regular maintenance",
    popular: true,
    color: "text-primary",
    slug: "cleaning"
  },
  {
    icon: Hammer,
    title: "Handyman",
    description: "General repairs, furniture assembly",
    popular: false,
    color: "text-warning",
    slug: "handyman"
  },
  {
    icon: Shield,
    title: "Security",
    description: "CCTV installation, locks, alarms",
    popular: false,
    color: "text-success",
    slug: "security"
  },
  {
    icon: Paintbrush,
    title: "Painting",
    description: "Interior, exterior, touch-ups",
    popular: false,
    color: "text-primary",
    slug: "painting"
  },
  {
    icon: TreePine,
    title: "Landscaping",
    description: "Garden care, lawn maintenance",
    popular: false,
    color: "text-success",
    slug: "landscaping"
  }
];

const ServiceCategories = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            Popular Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our wide range of professional services. All providers are verified and rated by customers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Link key={index} to={`/services/${service.slug}`}>
                <Card 
                  className="group p-6 hover:shadow-primary transition-all duration-300 cursor-pointer border-2 hover:border-primary/20 relative overflow-hidden"
                >
                  {service.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-hero text-primary-foreground px-3 py-1 text-xs font-semibold rounded-bl-lg">
                      Popular
                    </div>
                  )}
                  
                  <div className="space-y-4">
                    <div className={`${service.color} group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="h-10 w-10" />
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mt-1">
                        {service.description}
                      </p>
                    </div>

                    <div className="flex items-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="text-sm font-medium">Explore</span>
                      <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Services
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;