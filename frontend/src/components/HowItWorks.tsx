import { Card } from "@/components/ui/card";
import { Search, UserCheck, Calendar, Star } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Search & Browse",
    description:
      "Find the service you need from our wide range of categories and browse verified providers in your area.",
    step: "01",
  },
  {
    icon: UserCheck,
    title: "Choose Provider",
    description:
      "Compare profiles, ratings, and pricing. Read reviews from previous customers to make your choice.",
    step: "02",
  },
  {
    icon: Calendar,
    title: "Book Service",
    description:
      "Schedule at your convenience. Choose regular appointments or urgent booking for immediate needs.",
    step: "03",
  },
  {
    icon: Star,
    title: "Get Service & Rate",
    description:
      "Enjoy professional service and rate your experience to help others find the best providers.",
    step: "04",
  },
];

const HowItWorks = ({ hideHeader = false }: { hideHeader?: boolean }) => {
  return (
    <section
      id="how-it-works"
      className="py-20 bg-gradient-to-br from-accent/10 to-primary/5"
    >
      <div className="container mx-auto px-4">
        {!hideHeader && (
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Getting professional help for your home has never been easier.
              Follow these simple steps.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent z-0"></div>
                )}

                <Card className="relative z-10 p-8 text-center hover:shadow-primary transition-all duration-300 border-2 hover:border-primary/20">
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center mx-auto mb-4 shadow-primary">
                      <IconComponent className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-warning text-warning-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      {step.step}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </Card>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-card p-8 rounded-2xl shadow-elegant border max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to get started?
            </h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of satisfied customers who trust ServiceConnect for
              their home service needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">
                  Customer Support
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success">99%</div>
                <div className="text-sm text-muted-foreground">
                  Satisfaction Rate
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-warning">2hr</div>
                <div className="text-sm text-muted-foreground">
                  Avg Response Time
                </div>
              </div>
            </div>
            <button
              className="mt-8 px-6 py-3 bg-primary text-white rounded font-semibold shadow hover:bg-primary/80 transition"
              onClick={() => (window.location.href = "/how-it-works")}
            >
              Learn More: How It Works
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
