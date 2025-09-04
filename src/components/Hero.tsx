import { Star, Users, Wrench } from "lucide-react";
import SearchBox from "@/components/SearchBox";

const Hero = () => {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-background via-accent/20 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-medium text-primary">🚀 Trusted by 50,000+ customers</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Connect with 
                <span className="bg-gradient-hero bg-clip-text text-transparent"> Trusted </span>
                Service Providers
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Get reliable home services from verified professionals. From plumbing to cleaning, 
                find the right expert for your needs in minutes.
              </p>
            </div>

            <SearchBox />

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-hero border-2 border-background"></div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">1000+ providers</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-warning text-warning" />
                <span className="font-semibold">4.9</span>
                <span className="text-sm text-muted-foreground">average rating</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-card p-6 rounded-xl shadow-elegant border hover:shadow-primary transition-all duration-300">
                  <Wrench className="h-8 w-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-2">Expert Technicians</h3>
                  <p className="text-sm text-muted-foreground">Verified professionals with years of experience</p>
                </div>
                <div className="bg-card p-6 rounded-xl shadow-elegant border hover:shadow-success transition-all duration-300">
                  <Users className="h-8 w-8 text-success mb-3" />
                  <h3 className="font-semibold mb-2">24/7 Support</h3>
                  <p className="text-sm text-muted-foreground">Round-the-clock customer assistance</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-gradient-success p-6 rounded-xl text-success-foreground shadow-success">
                  <div className="text-2xl font-bold mb-1">500+</div>
                  <p className="text-sm opacity-90">Services completed today</p>
                </div>
                <div className="bg-card p-6 rounded-xl shadow-elegant border">
                  <div className="text-2xl font-bold text-primary mb-1">2 hrs</div>
                  <p className="text-sm text-muted-foreground">Average response time</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;