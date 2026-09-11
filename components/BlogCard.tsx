import type { BlogPost } from "@/lib/types";
import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";

export function BlogCard({
  post,
  featured = false,
}: {
  post: BlogPost;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={`group glass-panel rounded-[28px] p-8 block transition-all duration-500 hover:-translate-y-1.5 hover:border-cyan-400/30 ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      <div className="flex items-center gap-3 text-sm text-cyan-300 mb-4">
        <span className="px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-300/20 text-xs uppercase tracking-[0.16em]">
          {post.category}
        </span>
        <span className="text-white/40 font-mono text-xs">{post.date}</span>
        <span className="text-white/30 font-mono text-xs">{post.readTime}</span>
      </div>
      <h3
        className={`font-display font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors ${
          featured ? "text-2xl md:text-3xl" : "text-xl"
        }`}
      >
        {post.title}
      </h3>
      <p className="text-white/60 leading-relaxed">{post.excerpt}</p>
      <div className="mt-6 flex items-center justify-between text-sm text-white/40">
        <span>By {post.author}</span>
        <HiArrowUpRight className="text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </div>
    </Link>
  );
}
