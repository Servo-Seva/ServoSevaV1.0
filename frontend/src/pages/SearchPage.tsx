// SearchPage.tsx
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";

const recents = ["AC service", "Plumber", "Electrician", "Salon", "Cleaning"];
const trending = [
  "Home Deep Cleaning",
  "Hair Spa",
  "Refrigerator Repair",
  "Pest Control",
  "Car Wash",
];

const SearchPage = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const handleFill = (val: string) => setSearch(val);
  return (
    <div className="min-h-screen bg-background p-4 pb-24">
      <div className="relative mb-6">
        <ArrowLeft
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for services..."
          className="w-full pl-10 pr-4 py-2 border rounded bg-white outline-none"
        />
      </div>
      <div className="mb-8">
        <h2 className="font-medium mb-2">Recents</h2>
        <div className="flex flex-wrap gap-2">
          {recents.map((item) => (
            <button
              key={item}
              className="px-4 py-2 rounded-md border border-gray-200 text-sm text-foreground hover:bg-indigo-400 hover:text-white transition"
              onClick={() => handleFill(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div>
        <h2 className="font-medium mb-2">Trending Search</h2>
        <div className="flex flex-wrap gap-2">
          {trending.map((item) => (
            <button
              key={item}
              className="px-4 py-2 rounded-md border border-gray-200 text-sm text-foreground hover:bg-indigo-400 hover:text-white transition"
              onClick={() => handleFill(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
