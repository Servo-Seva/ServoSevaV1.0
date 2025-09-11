// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Input } from "@/components/ui/input";
// import { Search } from "lucide-react";

// const services = [
//   { name: "Plumbing", slug: "plumbing" },
//   { name: "Electrical", slug: "electrical" },
//   { name: "Vehicle Services", slug: "vehicle" },
//   { name: "Cleaning", slug: "cleaning" },
//   { name: "Handyman", slug: "handyman" },
//   { name: "Security", slug: "security" },
//   { name: "Tech Support", slug: "tech" },
//   { name: "Catering", slug: "catering" },
// ];

// const SearchBox = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();

//   const handleSearch = () => {
//     if (!searchQuery.trim()) return;

//     const matchedService = services.find(
//       (service) =>
//         service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         searchQuery.toLowerCase().includes(service.name.toLowerCase())
//     );

//     if (matchedService) {
//       navigate(`/services/${matchedService.slug}`);
//     } else {
//       // Default to plumbing if no match found
//       navigate(`/services/plumbing`);
//     }
//   };

//   const handleKeyPress = (e: React.KeyboardEvent) => {
//     if (e.key === "Enter") {
//       handleSearch();
//     }
//   };

//   return (
//     <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
//       <div
//         className="relative flex-1 cursor-pointer"
//         onClick={() => navigate("/search")}
//       >
//         <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
//         <Input
//           placeholder="What service do you need?"
//           className="pl-10 h-12 text-base cursor-pointer"
//           value={searchQuery}
//           readOnly
//         />
//       </div>
//       {/* Service Categories Section - Responsive */}
//       <div className="w-full mt-6">
//         <div className="bg-white rounded-lg border p-4">
//           <h3 className="text-lg font-semibold mb-4">
//             What are you looking for?
//           </h3>
//           <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
//             <div className="flex flex-col items-center gap-2">
//               <img
//                 src="/service-icons/women-salon.png"
//                 alt="Women's Salon & Spa"
//                 className="h-16 w-16 object-contain"
//               />
//               <span className="text-sm text-center">Women's Salon & Spa</span>
//             </div>
//             <div className="flex flex-col items-center gap-2">
//               <img
//                 src="https://media.istockphoto.com/id/469916170/photo/young-woman-relaxing-during-back-massage-at-the-spa.jpg?s=612x612&w=0&k=20&c=E96oMIIPfdq4sOhC3frI7x2uWFrOw71Bw5hih-BxaaY="
//                 alt="Men's Salon & Massage"
//                 className="h-16 w-16 object-contain"
//               />
//               <span className="text-sm text-center">Men's Salon & Massage</span>
//             </div>
//             <div className="flex flex-col items-center gap-2">
//               <img
//                 src="/service-icons/ac-repair.png"
//                 alt="AC & Appliance Repair"
//                 className="h-16 w-16 object-contain"
//               />
//               <span className="text-sm text-center">AC & Appliance Repair</span>
//             </div>
//             <div className="flex flex-col items-center gap-2">
//               <img
//                 src="/service-icons/cleaning.png"
//                 alt="Cleaning & Pest Control"
//                 className="h-16 w-16 object-contain"
//               />
//               <span className="text-sm text-center">
//                 Cleaning & Pest Control
//               </span>
//             </div>
//             <div className="flex flex-col items-center gap-2">
//               <img
//                 src="/service-icons/electrician.png"
//                 alt="Electrician, Plumber & Carpenter"
//                 className="h-16 w-16 object-contain"
//               />
//               <span className="text-sm text-center">
//                 Electrician, Plumber & Carpenter
//               </span>
//             </div>
//             <div className="flex flex-col items-center gap-2">
//               <img
//                 src="/service-icons/water-purifier.png"
//                 alt="Native Water Purifier"
//                 className="h-16 w-16 object-contain"
//               />
//               <span className="text-sm text-center">Native Water Purifier</span>
//             </div>
//             <div className="flex flex-col items-center gap-2">
//               <img
//                 src="/service-icons/painting.png"
//                 alt="Painting & Waterproofing"
//                 className="h-16 w-16 object-contain"
//               />
//               <span className="text-sm text-center">
//                 Painting & Waterproofing
//               </span>
//             </div>
//             <div className="flex flex-col items-center gap-2">
//               <img
//                 src="/service-icons/wall-makeover.png"
//                 alt="Revamp Wall Makeover"
//                 className="h-16 w-16 object-contain"
//               />
//               <span className="text-sm text-center">Revamp Wall Makeover</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchBox;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import WhatAreYouLookingFor from "./WhatAreYouLookingFor";

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
      navigate(`/services/plumbing`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-2">
      {/* Search Input */}
      <div
        className="relative flex flex-col sm:flex-row gap-3"
        onClick={() => navigate("/search")}
      >
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            placeholder="What service do you need?"
            className="pl-10 h-12 text-base w-full cursor-pointer"
            value={searchQuery}
            readOnly
            onKeyDown={handleKeyPress}
          />
        </div>
      </div>

      {/* Categories */}
      <div className="mt-10">
        <WhatAreYouLookingFor />
      </div>
    </div>
  );
};

export default SearchBox;
