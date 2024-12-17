import { Link } from "@/i18n/routing";
import React from "react";

export default function ButtonPrimary({ text, url, action }) {
  return (
    <button
      action={action}
      className="text-center text-white text-[14px] font-medium px-[36px] py-[12px] bg-gradient-to-b from-orange to-yellow dark:bg-gradient-to-b dark:from-yellow dark:to-orange   transition-all rounded-xl hover:scale-105 active:scale-95"
    >
      <Link href={url} className="block uppercase ">
        {text}
      </Link>
    </button>
  );
}
