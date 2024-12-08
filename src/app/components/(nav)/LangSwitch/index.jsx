"use client";
import { Link } from "@/i18n/routing";
import React from "react";


const LangSwitch = ({ language }) => {


  return (
    <div className="flex flex-1 gap-[6px] justify-end text-sm font-light">
      {language == 'en' ? (
        <Link href="/"
        locale="fr"
        >
          FR
        </Link>
      ) : (
        <Link href="/"
        locale="en"
        >
          EN
        </Link>
      )}
    </div>
  );
};

export default LangSwitch;