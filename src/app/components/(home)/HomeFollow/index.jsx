import React from "react";
import HomeFollowContent from "../HomeFollowContent";
import HomeFollowCards from "../HomeFollowCards";

export default function HomeFollow() {
  return (
    <section className="px-[24px] mt-[20vh] lg:px-[48px] h-[100vh]  flex flex-col justify-center items-center relative ">
      <HomeFollowCards />
      <HomeFollowContent />
    </section>
  );
}
