import { useState } from "react";
import Image from "next/image";

const accordionData = [
  {
    title: "Shops & Service",
    content: [
      "1. Yorkson Village",
      "2. Willoughby Town Centre",
      "3. Latimer Village",
      "4. 201/88 Ave",
      "5. Willowbrook Shopping Centre",
    ],
    image: "/images/community/map/shopping.png",
    bgColor: "#C6ECEB",
    activeBgColor: "#A8DED9",
  },
  {
    title: "School",
    content: [
      "1. Donna Gabriel Robins Elementary",
      "2. Peter Ewart Middle School",
      "3. RE Mountain Secondary",
      "4. Future Middle & High Schools",
      "5. Future Elementary School",
    ],
    image: "/images/community/map/school.png",
    bgColor: "#FDE7CA",
    activeBgColor: "#FBCB8A",
  },
  {
    title: "Parks",
    content: [
      "6. Willoughby Community Park",
      "7. Future Park",
      "8. Yorkson Community Park"
    ],
    image: "/images/community/map/parks.png",
    bgColor: "#DCF3CD",
    activeBgColor: "#B8EAB2",
  },
  {
    title: "Recreation & Event Centres",
    content: [
      "9. Langley Events Centre",
      "10. Vancouver FC Stadium",
      "11. Willoughby Community Centre",
      "12. Langley Tennis Centre",
      "13. Walnut Grove Centre"
    ],
    image: "/images/community/map/events.png",
    bgColor: "#F8D0D0",
    activeBgColor: "#F5A3A3",
  },
  {
    title: "Transit",
    content: [
      "14. Carvolth Park & Ride",
      "15. Golden Ears Bridge",
      "16. Future Sky Train"
    ],
    image: "/images/community/map/transit.png",
    bgColor: "#E0D1F3",
    activeBgColor: "#C2A6F0",
  },
  {
    title: "Smith Athletic Park",
    content: [
      "17. Smith Athletic Facility",
      "18. Outdoor Turf Field"
    ],
    image: "/images/community/map/smith.png",
    bgColor: "#D6E0AA",
    activeBgColor: "#B8D68A",
  },
];

export default function AccordionWithImage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const activeImage =
    activeIndex !== null
      ? accordionData[activeIndex].image
      : "/images/community/map/full.png";

  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-20 w-full">
      {/* accordion */}
      <div className="w-[400px]">
        {accordionData.map((item, index) => {
          const isActive = activeIndex === index;
            return (
            <div key={index}>
              <button
              onClick={() => toggleAccordion(index)}
              style={{
              backgroundColor: isActive ? item.activeBgColor : item.bgColor,
              color: "#3D6663",
              }}
              className="w-full transition text-3xl font-semibold font-['Poppins'] text-left uppercase py-2 pl-2 cursor-pointer"
              >
              {item.title}
              </button>
              {isActive && (
              <div className="bg-white py-2 transition-all duration-300 ease-in-out text-[#3D6663] text-xl font-normal font-['Poppins'] capitalize">
              {Array.isArray(item.content) ? (
                <dl className="space-y-1 text-[#3D6663] text-medium">
                  {item.content.map((location, i) => (
                  <dd key={i} className="pl-4">
                    {location}
                  </dd>
                  ))}
                </dl>
              ) : (
                <p>{item.content}</p>
              )}
              </div>
              )}
            </div>
            );
          })}
          </div>

          {/* Image */}
      <div className="w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] relative">
        <Image
          key={activeImage}
          src={activeImage}
          alt="Map"
          fill
          className="object-cover transition-transform duration-500 ease-in-out drag-none"
        />
      </div>
    </div>
  );
}
