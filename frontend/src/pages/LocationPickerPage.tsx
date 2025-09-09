// LocationPickerPage.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, MapPin } from "lucide-react";

const locations = [
  "Nungambakkam, Chennai",
  "T Nagar, Chennai",
  "Velachery, Chennai",
  "Adyar, Chennai",
  "Anna Nagar, Chennai",
  "Tambaram, Chennai",
  "Mylapore, Chennai",
  "Guindy, Chennai",
];

const LocationPickerPage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");

  const filteredLocations = locations.filter((loc) =>
    loc.toLowerCase().includes(search.toLowerCase())
  );

  const handleCurrentLocation = () => {
    setSelected("Current Location (GPS)");
    // Simulate location fetch
    setTimeout(() => {
      navigate(-1);
    }, 1000);
  };

  const handleSelect = (loc: string) => {
    setSelected(loc);
    setTimeout(() => {
      navigate(-1);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center transition-opacity duration-500">
      <div className="w-full max-w-md mx-auto p-4 pb-32">
        <button
          className="p-2 rounded-full hover:bg-muted mb-4 flex items-center"
          onClick={() => navigate(-1)}
          aria-label="Go Back"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
        </button>
        <h2 className="text-xl font-semibold mb-4">Choose your location</h2>
        <input
          type="text"
          placeholder="Search location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-2 border border-zinc-300 rounded mb-4 bg-white outline-none"
        />
        <button
          className="w-full flex items-center justify-center gap-2 py-2 mb-4 rounded bg-primary text-white font-semibold text-base"
          onClick={handleCurrentLocation}
        >
          <MapPin className="h-5 w-5" /> Use Current Location
        </button>
        <div className="flex flex-col gap-2">
          {filteredLocations.length === 0 && (
            <span className="text-muted-foreground text-sm">
              No locations found.
            </span>
          )}
          {filteredLocations.map((loc) => (
            <button
              key={loc}
              className={`px-4 py-2 rounded border text-left text-sm ${
                selected === loc
                  ? "bg-primary text-white"
                  : "rounded-sm border border-gray-200 text-foreground hover:bg-primary hover:text-white transition"
              }`}
              onClick={() => handleSelect(loc)}
            >
              {loc}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationPickerPage;
