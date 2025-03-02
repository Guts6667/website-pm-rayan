// src/app/[locale]/blog/[slug]/page.jsx
import ButtonPrimary from "@/app/components/ButtonPrimary";
import { getAllPosts, getPostData } from "lib/posts";
import React from "react";

export default async function BlogPostPage({ params: { slug } }) {
  // Get the post’s data (frontmatter + HTML)
  const { frontmatter, contentHtml } = await getPostData(slug);
  console.log(frontmatter);
  const styleHtml = {
    fontSize: "24px",
  }

  return (
    <main className="w-full flex flex-col items-center gap-[24px] lg:gap-[48px] py-[96px] ">
      <h1 className=" font-bold uppercase text-[5vw] ">{frontmatter.title}</h1>
      <p className="text-sm text-gray-500">
        {frontmatter.date} • {frontmatter.readTime} min read
      </p>
      <section className="w-full px-[24px] lg:px-[48px] flex flex-col lg:flex-row-reverse items-center justify-center lg:justify-between lg:items-start gap-[24px]">
        <img
          src={frontmatter.image}
          alt={frontmatter.title}
          className="w-full max-h-[600px] object-cover rounded-lg "
        />
       <article className="prose dark:prose-invert text-[16px]" dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </section>
      <div className="w-full py-[48px] flex justify-center">
      <ButtonPrimary text="Back to blog" url="/blog" />
      </div>
        
    </main>
  );
}

// (optional) If you want to pre-generate static paths:
export async function generateStaticParams() {
  // getAllPosts returns all .md files
  const posts = getAllPosts();
  return posts.map(({ slug }) => ({ slug }));
}
