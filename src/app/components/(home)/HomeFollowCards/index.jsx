import React from "react";

export default function HomeFollowCards() {
  const img = [
    {
      src: "sciences-co.png",
      alt: "Sciences-co",
    },
    {
      src: "mbuzz.png",
      alt: "Mbuzz",
    },
    {
      src: "saudiexcellence.png",
      alt: "Saudi Excellence",
    },
    {
      src: "znojmo.png",
      alt: "Znojmo FC",
    },
  ];
  return (
    <div className="bgCards  px-[24px] lg:px-[48px] grid grid-cols-2 justify-center items-center gap-[24px] lg:gap-[48px] ">
      {img.map((item, index) => (
        <div key={index} className="h-full w-full rounded-md overflow-hidden">
          <img
            src={`/img/${item.src}`}
            alt={item.alt}
            className="object-cover w-full h-full flex-1"
          />
        </div>
      ))}
    </div>
  );
}
