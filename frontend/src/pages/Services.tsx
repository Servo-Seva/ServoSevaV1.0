import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Search, 
  Star, 
  MapPin, 
  Clock, 
  Phone, 
  CheckCircle,
  ArrowLeft,
  Wrench,
  Zap,
  Car,
  Paintbrush,
  Hammer,
  Shield
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AuthDialog from "@/components/auth/AuthDialog";

const serviceCategories = {
  plumbing: {
    title: "Plumbing Services",
    icon: Wrench,
    color: "text-blue-600",
    description: "Professional plumbing repairs, installations, and maintenance"
  },
  electrical: {
    title: "Electrical Services", 
    icon: Zap,
    color: "text-yellow-600",
    description: "Licensed electricians for all electrical needs"
  },
  vehicle: {
    title: "Vehicle Services",
    icon: Car,
    color: "text-green-600", 
    description: "Auto repair, maintenance, and servicing"
  },
  cleaning: {
    title: "Cleaning Services",
    icon: Paintbrush,
    color: "text-purple-600",
    description: "Professional home and office cleaning"
  },
  handyman: {
    title: "Handyman Services",
    icon: Hammer,
    color: "text-orange-600",
    description: "General repairs and maintenance work"
  }
};

const dummyProviders = [
  {
    id: 1,
    name: "John Mitchell",
    rating: 4.9,
    reviews: 127,
    experience: "8+ years",
    location: "Downtown Area",
    price: "$45/hour",
    avatar: "",
    verified: true,
    available: true,
    specialties: ["Emergency repairs", "Installation", "Maintenance"],
    responseTime: "Within 30 mins"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    rating: 4.8,
    reviews: 94,
    experience: "6+ years", 
    location: "Uptown District",
    price: "$40/hour",
    avatar: "",
    verified: true,
    available: true,
    specialties: ["Residential", "Commercial", "24/7 Service"],
    responseTime: "Within 1 hour"
  },
  {
    id: 3,
    name: "Mike Rodriguez",
    rating: 4.9,
    reviews: 156,
    experience: "10+ years",
    location: "West Side",
    price: "$50/hour", 
    avatar: "",
    verified: true,
    available: false,
    specialties: ["Expert diagnosis", "Quality repairs", "Warranty included"],
    responseTime: "Within 2 hours"
  }
];

const Services = () => {
  const { category } = useParams();
  const [searchQuery, setSearchQuery] = useState("");
  
  const serviceInfo = serviceCategories[category as keyof typeof serviceCategories];
  const Icon = serviceInfo?.icon || Wrench;

  const filteredProviders = dummyProviders.filter(provider =>
    provider.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    provider.specialties.some(spec => spec.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  if (!serviceInfo) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Service not found</h1>
          <Link to="/">
            <Button variant="hero">Go back home</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-4">
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </Link>
          
          <div className="flex items-center gap-3 mb-2">
            <div className={`p-2 rounded-lg bg-accent ${serviceInfo.color}`}>
              <Icon className="h-6 w-6" />
            </div>
            <h1 className="text-3xl font-bold text-foreground">{serviceInfo.title}</h1>
          </div>
          <p className="text-muted-foreground">{serviceInfo.description}</p>
        </div>

        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search providers..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProviders.map((provider) => (
            <Card key={provider.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={provider.avatar} />
                      <AvatarFallback>{provider.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{provider.name}</h3>
                        {provider.verified && (
                          <CheckCircle className="h-4 w-4 text-success" />
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Star className="h-3 w-3 fill-warning text-warning" />
                        <span>{provider.rating}</span>
                        <span>({provider.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  <Badge variant={provider.available ? "default" : "secondary"}>
                    {provider.available ? "Available" : "Busy"}
                  </Badge>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-muted-foreground" />
                    <span>{provider.experience} experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{provider.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>Responds {provider.responseTime}</span>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="pt-0">
                <div className="mb-4">
                  <p className="text-sm text-muted-foreground mb-2">Specialties:</p>
                  <div className="flex flex-wrap gap-1">
                    {provider.specialties.map((specialty, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-primary">{provider.price}</span>
                  <Button variant="ghost" size="sm">
                    <Phone className="h-4 w-4 mr-1" />
                    Call
                  </Button>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm">
                    View Profile
                  </Button>
                  <AuthDialog>
                    <Button variant="hero" size="sm" disabled={!provider.available}>
                      Book Now
                    </Button>
                  </AuthDialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProviders.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No providers found matching your search.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Services;