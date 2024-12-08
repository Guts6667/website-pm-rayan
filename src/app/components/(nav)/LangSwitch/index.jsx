"use client";

import Link from "next/link";
import React, { useEffect } from "react";


const LangSwitch = ({ language }) => {


  return (
    <div className="flex flex-1 gap-[6px] justify-end text-sm font-light">
      {language == 'en' ? (
        <Link href="/fr"
        locale="fr"
        >
          FR
        </Link>
      ) : (
        <Link href="/en"
        locale="en"
        >
          EN
        </Link>
      )}
    </div>
  );
};

export default LangSwitch;