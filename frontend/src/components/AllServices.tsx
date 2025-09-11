import React, { useRef } from "react";

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

const menSalonServices = [
  {
    title: "Haircut",
    img: "https://img.freepik.com/free-photo/hairdresser-cutting-hair-senior-man_23-2148107127.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    title: "Shaving",
    img: "https://img.freepik.com/free-photo/barber-trimming-beard-customer_23-2148101231.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    title: "Hair Coloring",
    img: "https://img.freepik.com/free-photo/hairdresser-dyeing-hair-young-man_23-2148106212.jpg?semt=ais_hybrid&w=740&q=80",
  },
  {
    title: "Beard Care",
    img: "https://img.freepik.com/free-photo/hairdresser-trimming-beard-young-man_23-2148104567.jpg?semt=ais_hybrid&w=740&q=80",
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

// Carousel wrapper
const Carousel: React.FC<{
  items: any[];
  renderItem: (item: any, idx: number) => React.ReactNode;
}> = ({ items, renderItem }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      scrollRef.current.scrollBy({
        left: dir === "left" ? -clientWidth : clientWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth md:overflow-x-hidden"
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className="w-[48%] sm:w-[30%] md:w-[22%] flex-shrink-0"
          >
            {renderItem(item, idx)}
          </div>
        ))}
      </div>

      {/* Desktop arrows */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute top-1/2 left-0 -translate-y-1/2 bg-white shadow p-2 rounded-full"
      >
        ◀
      </button>
      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute top-1/2 right-0 -translate-y-1/2 bg-white shadow p-2 rounded-full"
      >
        ▶
      </button>
    </div>
  );
};

// Service Card
const ServiceCard: React.FC<{
  title: string;
  rating?: string;
  price?: string;
  oldPrice?: string;
  img: string;
}> = ({ title, rating, price, oldPrice, img }) => (
  <div className="bg-white rounded-lg shadow-sm overflow-hidden text-left">
    <img src={img} alt={title} className="h-40 w-full object-cover" />
    <div className="p-3">
      <p className="font-medium text-sm">{title}</p>
      {rating && <p className="text-sm text-gray-500 mt-1">⭐ {rating}</p>}
      {price && (
        <p className="text-base font-semibold mt-1">
          {price}{" "}
          {oldPrice && (
            <span className="line-through text-gray-400 text-sm ml-2">
              {oldPrice}
            </span>
          )}
        </p>
      )}
    </div>
  </div>
);

// const AllServices: React.FC = () => {
//   return (
//     <div className="py-10 px-5 md:px-20 space-y-12">
//       {/* Salon for women */}
//       <section>
//         <h2 className="text-2xl font-bold mb-6">Salon for women</h2>
//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
//           {salonServices.map((service, idx) => (
//             <ServiceCard key={idx} {...service} />
//           ))}
//         </div>
//       </section>

//       {/* Most booked services */}
//       <section>
//         <h2 className="text-2xl font-bold mb-6">Most booked services</h2>
//         <Carousel
//           items={bookedServices}
//           renderItem={(service) => <ServiceCard {...service} />}
//         />
//       </section>

//       {/* Home repair & installation */}
//       <section>
//         <div className="flex justify-between items-center mb-6">
//           <h2 className="text-2xl font-bold">Home repair & installation</h2>
//           <button className="text-purple-600 text-sm font-medium">
//             See all
//           </button>
//         </div>
//         <Carousel
//           items={homeRepairServices}
//           renderItem={(service) => <ServiceCard {...service} />}
//         />
//       </section>
//     </div>
//   );
// };

const AllServices: React.FC = () => {
  return (
    <div className="py-10 px-5 md:px-20 space-y-12">
      {/* Salon for women */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Salon for Women</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {salonServices.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </section>

      {/* Salon for men */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Salon for Men</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {menSalonServices.map((service, idx) => (
            <ServiceCard key={idx} {...service} />
          ))}
        </div>
      </section>

      {/* Most booked services */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Most booked services</h2>
        <Carousel
          items={bookedServices}
          renderItem={(service) => <ServiceCard {...service} />}
        />
      </section>

      {/* Home repair & installation */}
      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Home repair & installation</h2>
          <button className="text-purple-600 text-sm font-medium">
            See all
          </button>
        </div>
        <Carousel
          items={homeRepairServices}
          renderItem={(service) => <ServiceCard {...service} />}
        />
      </section>
    </div>
  );
};

export default AllServices;
