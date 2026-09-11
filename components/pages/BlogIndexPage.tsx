"use client";

import { BlogCard } from "@/components/BlogCard";
import { PageShell } from "@/components/PageShell";
import { PillBadge } from "@/components/PillBadge";
import { blogCategories, blogPosts } from "@/lib/blog";
import { useMemo, useState } from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

export function BlogIndexPage() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory = category === "All" || post.category === category;
      const haystack = `${post.title} ${post.excerpt} ${post.category}`.toLowerCase();
      const matchesQuery = haystack.includes(query.toLowerCase().trim());
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  const featured = filtered.filter((post) => post.featured);
  const rest = filtered.filter((post) => !post.featured);

  return (
    <PageShell>
      <header className="relative pt-36 pb-12 px-6 text-center">
        <PillBadge>Education</PillBadge>
        <h1 className="font-display text-4xl md:text-6xl font-extrabold mb-4 text-gradient">
            Insights & Guides
          </h1>
          <p className="text-xl text-white/65 max-w-2xl mx-auto">
            Fictional educational articles about reading crypto UIs, wallet
            hygiene, and network labels. Not financial advice.
          </p>
      </header>

      <section className="relative max-w-7xl mx-auto px-6 pb-20">
        <div className="flex flex-col md:flex-row gap-4 md:items-center md:justify-between mb-10">
          <div className="relative max-w-md w-full">
            <HiMagnifyingGlass className="text-white/40 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search articles..."
              className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {blogCategories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  category === item
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                    : "bg-white/5 border border-white/10 text-gray-300 hover:border-cyan-500/50"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20 bg-white/5 border border-white/10 rounded-3xl">
            <p className="text-xl text-white mb-2">No articles found</p>
            <p className="text-gray-400">Try another category or search term.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {featured.map((post) => (
              <BlogCard key={post.slug} post={post} featured />
            ))}
            {rest.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </section>
    </PageShell>
  );
}
