import React from "react";

const salonServices = [
  {
    title: "Waxing",
    img: "https://img.freepik.com/free-photo/close-up-hairdresser-shop-instruments_23-2149319780.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    title: "Cleanup",
    img: "https://img.freepik.com/premium-photo/hair-stylist-rinsing-hair-customer_53876-185292.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    title: "Manicure",
    img: "https://img.freepik.com/free-photo/brunette-woman-with-mobile-phone-getting-her-hair-done_23-2148108788.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    title: "Hair care",
    img: "https://media.istockphoto.com/id/1124229429/photo/nice-good-looking-woman-visiting-a-cosmetology-clinic.jpg?s=612x612&w=0&k=20&c=jwE7SXB2m4DI_sAUrd-6hRjSgVQR2Y3L5GwcQADioWM=",
  },
];

const bookedServices = [
  {
    title: "Apartment pest control (includes utensil removal)",
    rating: "4.79 (54K)",
    price: "₹1,498",
    img: "https://5.imimg.com/data5/SELLER/Default/2025/4/500535252/MY/BP/KW/93343487/home-cleaning-service.jpeg",
  },
  {
    title: "Apartment termite control",
    rating: "4.83 (16K)",
    price: "₹3,999",
    img: "https://img.freepik.com/free-photo/people-renovating-house-concept_53876-20667.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    title: "Bed bugs control",
    rating: "4.77 (25K)",
    price: "₹1,599",
    img: "https://media.istockphoto.com/id/1435449600/photo/plumber-explaining-to-a-client-the-problem-with-her-kitchen-sink.jpg?s=612x612&w=0&k=20&c=KFI8f97NOQBSAMgdO-hldVA39rESrD07N7OZU1LQ6s0=",
  },
  {
    title: "Intense bathroom cleaning",
    rating: "4.79 (3M)",
    price: "₹449",
    oldPrice: "₹549",
    img: "https://assets-news.housing.com/news/wp-content/uploads/2023/03/24135122/Plumbing-services-Know-types-and-how-to-choose-01.png",
  },
  {
    title: "Intense cleaning (2 bathrooms)",
    rating: "4.79 (3M)",
    price: "₹849",
    oldPrice: "₹1,098",
    img: "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/things-you-didnt-know-Home-Depot-can-install-for-you-section-4.jpg",
  },
];

const homeRepairServices = [
  {
    title: "Minor wooden door repair",
    rating: "4.81 (49K)",
    price: "₹199",
    img: "https://assistor.in/uploads/services/1712051668211.jpg",
  },
  {
    title: "WiFi CCTV installation",
    rating: "4.73 (14K)",
    price: "₹199",
    img: "https://5.imimg.com/data5/SELLER/Default/2025/3/499711083/ML/LM/UY/21450591/home-wifi-installation-service.jpg",
  },
  {
    title: "Door lock repair",
    rating: "4.85 (44K)",
    price: "₹259",
    img: "https://www.accuratesecurity.com/wp-content/uploads/2024/06/Door-Lock-Repairs.jpg",
  },
  {
    title: "Cupboard hinge installation (upto 2)",
    rating: "4.84 (54K)",
    price: "₹199",
    img: "https://media.istockphoto.com/id/1334590391/photo/a-housewife-wearing-protective-glove-cleaning-wooden-cupboard-in-the-kitchen-at-home.jpg?s=612x612&w=0&k=20&c=cy6pz7LvXcsKBZ_VVsyToeyvec7LTLSrXM0_qLa4owY=",
  },
  {
    title: "Flush tank repair (external PVC)",
    rating: "4.79 (73K)",
    price: "₹159",
    img: "https://assistor.in/uploads/services/1005.jpg",
  },
];

const AllServices: React.FC = () => {
  return (
    <div className="py-10 px-5 md:px-20 space-y-12">
      {/* Salon for women */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Salon for women</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {salonServices.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-sm overflow-hidden text-center"
            >
              <img
                src={service.img}
                alt={service.title}
                className="h-40 w-full object-cover"
              />
              <p className="py-3 font-medium">{service.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Most booked services */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Most booked services</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {bookedServices.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <img
                src={service.img}
                alt={service.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-3">
                <p className="font-medium text-sm">{service.title}</p>
                <p className="text-sm text-gray-500">⭐ {service.rating}</p>
                <p className="text-base font-semibold">
                  {service.price}{" "}
                  {service.oldPrice && (
                    <span className="line-through text-gray-400 text-sm ml-2">
                      {service.oldPrice}
                    </span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Home repair & installation */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Home repair & installation</h2>
          <button className="text-purple-600 text-sm font-medium">
            See all
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
          {homeRepairServices.map((service, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <img
                src={service.img}
                alt={service.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-3">
                <p className="font-medium text-sm">{service.title}</p>
                <p className="text-sm text-gray-500">⭐ {service.rating}</p>
                <p className="text-base font-semibold">{service.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AllServices;
