import React from "react";
import { Link } from "@/i18n/routing";

export default function ArticleCard({slug, frontmatter}) {

  return (
    <Link href={`/blog/${slug}`}>
      <article
        key={slug}
        className="relative w-full h-[600px] bg-center bg-cover bg-center bg-no-repeat rounded-lg  hover:scale-105 transition-all duration-300 overflow-hidden group"
      >
        <img
          src={frontmatter.image}
          alt={frontmatter.title}
          className="w-full h-full object-cover rounded-lg"
        />
        <section className=" absolute z-5 p-[24px] top-0 left-0  w-full h-full bg-black bg-opacity-50 flex flex-col justify-between gap-[24px] ">
          <h2 className="text-[24px] text-left font-semibold text-white ">
            {frontmatter.title}
          </h2>

          <div className="flex flex-col justify-end gap-[12px] text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="flex flex-wrap flex-grow justify-end w-full text-right gap-[6px] lg:text-[16px] ">
              {frontmatter.tags.map((item, index) => (
                <div
                  key={index}
                  className="h-fit flex items-center justify-center font-semibold text-white text-[14px] bg-light-blurry dark:bg-dark-blurry backdrop-blur-[6px] py-[6px] px-[12px] rounded-md "
                >
                  <span className="uppercase">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-[18px]">{frontmatter.excerpt}</p>
            <p className="italic text-right">
              {frontmatter.date} • {frontmatter.readTime} min read
            </p>
          </div>
        </section>
      </article>
    </Link>
  );
}
