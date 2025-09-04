import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    location: "New York, NY",
    rating: 5,
    comment: "Found an amazing plumber through ServiceConnect who fixed my emergency leak within 2 hours. Professional, affordable, and reliable!",
    service: "Plumbing",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Business Owner",
    location: "San Francisco, CA",
    rating: 5,
    comment: "The electrical work for our office was completed perfectly. The technician was knowledgeable and explained everything clearly.",
    service: "Electrical",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Property Manager",
    location: "Miami, FL",
    rating: 5,
    comment: "I use ServiceConnect for all my properties. The cleaning service is exceptional and the booking system makes scheduling so easy.",
    service: "Home Cleaning",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Car Enthusiast",
    location: "Austin, TX",
    rating: 5,
    comment: "Best car detailing service I've ever used! My vehicle looks brand new. Will definitely book again.",
    service: "Vehicle Service",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "Busy Mom",
    location: "Seattle, WA",
    rating: 5,
    comment: "ServiceConnect has been a lifesaver! From handyman services to cleaning, I can find reliable help whenever I need it.",
    service: "Multiple Services",
    avatar: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=150&h=150&fit=crop&crop=face"
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Tech Professional",
    location: "Boston, MA",
    rating: 5,
    comment: "The app is so intuitive and finding qualified service providers is effortless. Great ratings system helps make informed decisions.",
    service: "Platform Experience",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-success/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what real customers have to say about their ServiceConnect experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="p-6 hover:shadow-elegant transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="h-16 w-16 text-primary" />
              </div>
              
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                  ))}
                </div>
                
                <p className="text-muted-foreground leading-relaxed italic">
                  "{testimonial.comment}"
                </p>
                
                <div className="flex items-center gap-3 pt-4 border-t">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded-full">
                      {testimonial.service}
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-card p-8 rounded-2xl shadow-elegant border max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50,000+</div>
                <div className="text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success mb-2">4.9/5</div>
                <div className="text-muted-foreground">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-warning mb-2">99.8%</div>
                <div className="text-muted-foreground">Service Completion</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;