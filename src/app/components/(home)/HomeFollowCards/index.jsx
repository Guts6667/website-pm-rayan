import React from "react";

export default function HomeFollowCards({
  style,
  styleCard,
  styleCard0,
  styleCard1,
  styleCard2,
  styleCard3,
}) {
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

  const cardStyles = [styleCard0, styleCard1, styleCard2, styleCard3];
  return (
    <div
      className={`${style} bgCards  w-[100vw] h-[100vh]  px-[24px] lg:px-[48px] hidden lg:grid grid-cols-2 justify-center items-center gap-[24px] lg:gap-[48px] overflow-hidden`}
    >
      {img.map((item, index) => (
        
        <div
          key={index}
          className={ `h-full w-full rounded-md overflow-hidden ${styleCard} ${cardStyles[index]}`}
        >
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
