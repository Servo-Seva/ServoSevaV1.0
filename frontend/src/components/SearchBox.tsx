import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const services = [
  { name: "Plumbing", slug: "plumbing" },
  { name: "Electrical", slug: "electrical" },
  { name: "Vehicle Services", slug: "vehicle" },
  { name: "Cleaning", slug: "cleaning" },
  { name: "Handyman", slug: "handyman" },
  { name: "Security", slug: "security" },
  { name: "Tech Support", slug: "tech" },
  { name: "Catering", slug: "catering" },
];

const SearchBox = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!searchQuery.trim()) return;

    const matchedService = services.find(
      (service) =>
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        searchQuery.toLowerCase().includes(service.name.toLowerCase())
    );

    if (matchedService) {
      navigate(`/services/${matchedService.slug}`);
    } else {
      // Default to plumbing if no match found
      navigate(`/services/plumbing`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
      <div
        className="relative flex-1 cursor-pointer"
        onClick={() => navigate("/search")}
      >
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="What service do you need?"
          className="pl-10 h-12 text-base cursor-pointer"
          value={searchQuery}
          readOnly
        />
      </div>
      <Button variant="hero" size="lg" className="h-12" onClick={handleSearch}>
        Find Services
      </Button>
    </div>
  );
};

export default SearchBox;
