import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarDays } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";

export default function BlogCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group block">
      <div className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-100 hover:-translate-y-2 h-full flex flex-col">

        {/* IMAGE */}
        <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">

          <Image
            src={urlFor(post.featuredImage).width(800).height(600).url()}
            alt={post.featuredImage?.alt || post.title}
            fill
            sizes="(max-width:768px)100vw,(max-width:1280px)50vw,33vw"
            quality={75}
            className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

        </div>

        {/* CONTENT */}
        <div className="p-5 md:p-6 flex flex-col flex-grow bg-white">

          {/* CATEGORY */}
          <span className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-2 ">
            {post.category?.title || "Category"}
          </span>
          <span className="w-10 h-[0.8px] bg-secondary mb-2"></span>

          {/* TITLE */}
          <h3 className="text-sm md:text-xl font-sans mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>

          {/* EXCERPT */}
          {/* <p className="text-slate-500 text-sm leading-relaxed min-h-[65px]">
            {post.excerpt}
          </p> */}

          {/* FOOTER */}
          <div className="mt-6 flex items-center justify-between">

            <div className="flex items-center gap-2 text-sm text-slate-500">
              <CalendarDays size={16} />
              <span>
                {new Date(post.publishedAt).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>

            <span className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
              Read Article
              <ArrowRight size={18} />
            </span>

          </div>

        </div>

      </div>
    </Link>
  );
}