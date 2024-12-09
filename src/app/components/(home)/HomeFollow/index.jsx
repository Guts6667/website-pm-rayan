import React from "react";
import HomeFollowContent from "../HomeFollowContent";
import HomeFollowCards from "../HomeFollowCards";

export default function HomeFollow() {
  // group-hover:opacity-0 
  return (
    <section className=" group px-[24px] mt-[20vh] lg:px-[48px] h-[100vh]  flex flex-col justify-center items-center relative ">
      <HomeFollowCards style={""} styleCard={"transition-translate duration-[5s] delay-200 group-hover:w-[300px] group-hover:h-[500px]  "} styleCard0={"group-hover:translate-x-[-100vw] group-hover:translate-y-[-100vh] group-hover:-rotate-45"} styleCard1={"group-hover:translate-x-[100vw] group-hover:translate-y-[-100vh]  group-hover:rotate-45 "} styleCard2={"group-hover:translate-x-[-100vw] group-hover:translate-y-[100vh]   group-hover:-rotate-45"} styleCard3={"group-hover:translate-x-[100vw] group-hover:translate-y-[100vh]  group-hover:rotate-45 "} />
      <HomeFollowContent style={"t"} />
    </section>
  );
}
