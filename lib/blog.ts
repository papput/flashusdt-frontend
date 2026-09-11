import type { BlogPost } from "@/lib/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "reading-a-crypto-dashboard",
    title: "How to Read a Crypto Dashboard Without the Jargon",
    excerpt:
      "A fictional walkthrough of wallets, networks, and status labels so newcomers can explore a product UI with more confidence.",
    category: "Education",
    date: "August 12, 2025",
    author: "Flash Editorial",
    readTime: "5 min read",
    featured: true,
    content: [
      "This article is educational UI content. It does not describe a live financial product or guaranteed blockchain outcome.",
      "Most crypto dashboards show three ideas at once: which asset you selected, which network that asset uses, and whether a request is still pending.",
      "A network label such as TRC20 or BEP20 is not interchangeable. Sending on the wrong network is one of the most common user-interface mistakes.",
      "Status text like Processing or Pending usually means the interface is waiting on an external system. It is not proof that value has moved.",
      "When a screen asks for a transaction hash, treat it as a reference field. Copy it carefully and never share a seed phrase or private key.",
    ],
  },
  {
    slug: "wallet-hygiene-basics",
    title: "Wallet Hygiene Basics for First-Time Users",
    excerpt:
      "Simple habits for checking addresses, networks, and permissions before you tap send in any crypto-themed interface.",
    category: "Security",
    date: "July 28, 2025",
    author: "Maya Chen",
    readTime: "6 min read",
    featured: true,
    content: [
      "This guide is fictional and educational. It is not investment, legal, or transaction advice.",
      "Always verify the first and last characters of a wallet address after pasting. Clipboard malware is a common attack pattern.",
      "A support chat that asks you to “activate” software with a paid key should be treated with extra caution. Legitimate wallets do not need mystery licenses.",
      "Keep seed phrases offline. A website should never ask you to type a recovery phrase into a form.",
      "If a product promises untraceable or temporary balances, pause and research the claim independently before sharing any funds or personal data.",
    ],
  },
  {
    slug: "stablecoins-explained",
    title: "Stablecoins, Explained in Plain Language",
    excerpt:
      "What a USD-pegged token is trying to represent, why network choice matters, and what a UI cannot guarantee on its own.",
    category: "Education",
    date: "June 19, 2025",
    author: "Flash Editorial",
    readTime: "4 min read",
    featured: false,
    content: [
      "A stablecoin is designed to track a reference value, often one US dollar. Peg design and reserves vary by issuer.",
      "USDT on TRON is not the same settlement path as USDT on BNB Smart Chain. The ticker can look identical while the rails differ.",
      "A website showing a balance is only a display. Confirmation lives on the network you actually used, not in marketing copy.",
      "Fees, confirmation times, and supported wallets all depend on the selected network. Read those labels before you continue.",
      "This article is educational sample content created for the migrated blog UI.",
    ],
  },
  {
    slug: "choosing-a-network-in-the-ui",
    title: "Choosing TRC20, BEP20, or TRX in a Product Screen",
    excerpt:
      "A practical, fictional explainer of the network picker used throughout this interface and what each card is meant to represent.",
    category: "Product",
    date: "May 3, 2025",
    author: "Jordan Blake",
    readTime: "4 min read",
    featured: false,
    content: [
      "The network cards in this project are visual copies of the original site. They help you practice navigation, not settle real transfers.",
      "TRC20 typically refers to tokens issued on TRON. BEP20 refers to tokens on BNB Smart Chain. TRX is TRON’s native asset.",
      "If a payment screen shows a destination address, confirm that the address format matches the network you selected.",
      "A copied address confirmation is a UI convenience. It does not validate that the destination is owned by the party you intend.",
      "When in doubt, stop and use an independent block explorer rather than trusting a single website’s status message.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 2) {
  const current = getPostBySlug(slug);
  return blogPosts
    .filter((post) => post.slug !== slug)
    .sort((a, b) => {
      if (!current) return 0;
      if (a.category === current.category && b.category !== current.category) {
        return -1;
      }
      if (b.category === current.category && a.category !== current.category) {
        return 1;
      }
      return 0;
    })
    .slice(0, limit);
}

export const blogCategories = ["All", ...new Set(blogPosts.map((post) => post.category))];
