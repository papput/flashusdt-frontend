"use client";

import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

interface FaqItem {
  question: string;
  answer: string;
}

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.question} className="glass-panel rounded-2xl overflow-hidden">
            <button
              type="button"
              className="w-full flex items-center justify-between gap-3 px-4 sm:px-6 py-4 text-left text-white font-medium hover:bg-white/5 transition-colors"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : index)}
            >
              {item.question}
              <HiChevronDown
                className={`text-cyan-300 text-xl shrink-0 transition-transform duration-300 ${
                  open ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ${
                open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-4 sm:px-6 pb-5 text-white/60 text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
