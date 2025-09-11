const categories = [
  {
    label: "Women's Salon & Spa",
    image:
      "https://media.istockphoto.com/id/469916170/photo/young-woman-relaxing-during-back-massage-at-the-spa.jpg?s=612x612&w=0&k=20&c=E96oMIIPfdq4sOhC3frI7x2uWFrOw71Bw5hih-BxaaY=",
  },
  {
    label: "Men's Salon & Massage",
    image:
      "https://www.newtimeshair.com/wp-content/uploads/2022/06/hair-cutting.jpg",
  },
  {
    label: "AC & Appliance Repair",
    image:
      "https://techsquadteam.com/assets/profile/blogimages/b8c7da5cb0ab0ab4e62069608ff8f63f.jpg",
  },
  {
    label: "Cleaning & Pest Control",
    image:
      "https://img.freepik.com/premium-photo/pest-control-exterminator-man-spraying-termite-pesticide_1016675-2818.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    label: "Electrician, Plumber & Carpenter",
    image:
      "https://img.freepik.com/premium-vector/flat-home-repair-service-workers-plumber-handyman-people-uniform-renovate-apartment-painter-electrician-carpenter-vector-set_102902-5284.jpg",
  },
  {
    label: "Native Water Purifier",
    image:
      "https://vsctimes.com/wp-content/uploads/2025/01/Urban-Company-water-purifier-review-1024x769.jpg",
  },
  //   {
  //     label: "Painting & Waterproofing",
  //     image: "https://via.placeholder.com/300x200.png?text=Painting",
  //   },
  //   {
  //     label: "Revamp Wall Makeover",
  //     image: "https://via.placeholder.com/300x200.png?text=Wall+Makeover",
  //   },
];

const WhatAreYouLookingFor = () => {
  return (
    <div className="p-1 w-full max-w-7xl mx-auto sm:mx-4">
      <h3 className="text-xl font-semibold mb-6">What are you looking for?</h3>

      {/* Grid with responsive layout */}
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-start hover:shadow-md transition cursor-pointer"
          >
            <div className="w-full h-24 sm:h-28 md:h-32 overflow-hidden rounded-md">
              <img
                src={cat.image}
                alt={cat.label}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="mt-2 text-sm font-medium text-center">
              {cat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatAreYouLookingFor;
