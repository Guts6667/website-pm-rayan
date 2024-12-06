import React from "react";

export default function ButtonPrimary({ text, url, action }) {
  return (
    <button
      action={action}
      className="text-center text-white px-[36px] py-[12px] bg-gradient-to-r from-orange dark:from-yellow to-yellow dark:to-orange transition-all rounded-md hover:scale-105 active:scale-95"
    >
      <a href={url} className="block uppercase ">
        {text}
      </a>
    </button>
  );
}
