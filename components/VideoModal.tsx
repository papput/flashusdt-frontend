"use client";

import { HiMiniXMark } from "react-icons/hi2";

interface VideoModalProps {
  title: string;
  url: string;
  onClose: () => void;
}

export function VideoModal({ title, url, onClose }: VideoModalProps) {
  return (
    <div className="fixed inset-x-3 bottom-24 z-50 sm:inset-x-auto sm:right-4 sm:bottom-6 sm:w-[380px] max-w-[100vw] glass-panel rounded-3xl p-4 animate-fade-in glow-ring">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-sm font-display font-semibold text-white truncate pr-2">
          {title}
        </h3>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close video"
          className="text-white/70 hover:text-rose-300 transition-colors"
        >
          <HiMiniXMark className="text-xl" />
        </button>
      </div>
      <div className="aspect-video bg-black/80 rounded-2xl overflow-hidden border border-white/10">
        <iframe
          className="w-full h-full"
          src={url}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
