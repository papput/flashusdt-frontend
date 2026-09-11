import { BlogIndexPage } from "@/components/pages/BlogIndexPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description: "Educational articles about crypto interfaces and wallet hygiene.",
};

export default function Page() {
  return <BlogIndexPage />;
}
