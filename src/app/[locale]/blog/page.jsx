// src/app/[locale]/blog/page.jsx

import React from "react";
import { getSortedPostsData } from "lib/posts";
import Header from "@/app/components/(blog)/Header";
import Intro from "@/app/components/(blog)/Intro";
import ArticleCard from "@/app/components/(blog)/ArticleCard";

export default async function BlogPage({ params: { locale } }) {
  const allPosts = getSortedPostsData();
  console.log(allPosts);

  return (
    <main className="flex flex-col items-center gap-[24px] lg:gap-[48px] py-[24px]  ">
      <Header />
      <Intro />
      <section className="w-full flex flex-col gap-[24px] lg:gap-[48px] lg:grid lg:grid-cols-2 xl:grid-cols-3  px-[24px] lg:px-[48px] py-[24px] min-h-[100vh] ">
        {allPosts.map(({ slug, frontmatter }) => (
          <ArticleCard slug={slug} frontmatter={frontmatter} />
        ))}
      </section>
    </main>
  );
}
