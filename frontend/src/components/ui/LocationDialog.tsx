import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MapPin, Search, Crosshair, ChevronDown } from "lucide-react";

interface LocationDialogProps {
  location: string;
  setLocation: (loc: string) => void;
}

const LocationDialog = ({ location, setLocation }: LocationDialogProps) => {
  const [search, setSearch] = useState("");

  const handleUseCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation not supported");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        setLocation(`Lat: ${latitude}, Lng: ${longitude}`);
      },
      (err) => {
        console.error(err);
        alert("Unable to fetch location");
      }
    );
  };

  return (
    <Dialog>
      {/* Trigger button */}
      <DialogTrigger asChild>
        <button className="inline-flex items-center gap-2 px-4 py-2 border rounded-md bg-muted/40 hover:bg-muted/60 transition-colors cursor-pointer max-w-full sm:w-64">
          <MapPin className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm truncate flex-1">{location}</span>
          <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />
        </button>
      </DialogTrigger>

      {/* Dialog */}
      <DialogContent className="w-auto max-w-[98vw] sm:max-w-2xl lg:max-w-3xl p-0 rounded-md overflow-hidden shadow-2xl mx-auto">
        {/* Header */}
        <DialogHeader className="p-4 border-b">
          <DialogTitle className="text-base font-semibold text-foreground">
            Choose your location
          </DialogTitle>
        </DialogHeader>

        {/* Search Input */}
        <div className="p-4">
          <div className="flex items-center gap-2 border rounded-xl px-3 py-2 bg-background shadow-sm focus-within:ring-2 focus-within:ring-primary/50 w-full sm:w-auto">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for your location, society, or apartment"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 min-w-0 bg-transparent outline-none text-sm"
            />
          </div>

          {/* Use Current Location button */}
          <button
            onClick={handleUseCurrentLocation}
            className="flex items-center gap-2 mt-5 px-3 py-2 rounded-lg text-primary font-medium hover:bg-primary/10 transition-colors w-full sm:w-auto"
          >
            <Crosshair className="h-4 w-4" />
            Use current location
          </button>
        </div>

        {/* Footer */}
        <div className="flex justify-center items-center border-t py-3 text-xs text-muted-foreground bg-muted/10">
          powered by{" "}
          <span className="ml-1 text-blue-500 font-semibold">Google</span>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LocationDialog;
