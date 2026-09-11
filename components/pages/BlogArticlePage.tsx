import { BlogCard } from "@/components/BlogCard";
import { PageShell } from "@/components/PageShell";
import type { BlogPost } from "@/lib/types";
import Link from "next/link";

export function BlogArticlePage({
  post,
  related,
}: {
  post: BlogPost;
  related: BlogPost[];
}) {
  return (
    <PageShell>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-16">
        <Link
          href="/blog"
          className="text-cyan-400 hover:text-cyan-300 text-sm mb-6 inline-block"
        >
          ← Back to articles
        </Link>
        <div className="flex flex-wrap items-center gap-3 text-sm text-cyan-400 mb-6">
          <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            {post.category}
          </span>
          <span className="text-gray-400">{post.date}</span>
          <span className="text-gray-500">{post.readTime}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-400 to-blue-500 bg-clip-text text-transparent leading-tight">
          {post.title}
        </h1>
        <p className="text-gray-400 mb-10">By {post.author}</p>
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 space-y-6 text-gray-300 leading-relaxed text-lg">
          {post.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
      {related.length > 0 && (
        <section className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
          <h2 className="text-2xl font-bold mb-8">Related articles</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {related.map((item) => (
              <BlogCard key={item.slug} post={item} />
            ))}
          </div>
        </section>
      )}
    </PageShell>
  );
}
