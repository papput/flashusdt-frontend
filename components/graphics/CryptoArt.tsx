export function HexGridSvg({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <pattern
          id="hex"
          width="56"
          height="64"
          patternUnits="userSpaceOnUse"
          patternTransform="scale(1.2)"
        >
          <path
            d="M28 2 L52 16 V44 L28 58 L4 44 V16 Z"
            stroke="rgba(103,232,249,0.16)"
            strokeWidth="1"
          />
        </pattern>
        <radialGradient id="hexFade" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="white" stopOpacity="0.9" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </radialGradient>
        <mask id="hexMask">
          <rect width="800" height="800" fill="url(#hexFade)" />
        </mask>
      </defs>
      <rect width="800" height="800" fill="url(#hex)" mask="url(#hexMask)" />
    </svg>
  );
}

export function UsdtCoinSvg({
  className = "",
  id = "coin",
}: {
  className?: string;
  id?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`${id}Body`} x1="20" y1="20" x2="220" y2="220">
          <stop offset="0%" stopColor="#67e8f9" />
          <stop offset="50%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#0f766e" />
        </linearGradient>
        <linearGradient id={`${id}Shine`} x1="40" y1="20" x2="180" y2="200">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <circle cx="120" cy="120" r="108" fill={`url(#${id}Body)`} />
      <circle
        cx="120"
        cy="120"
        r="96"
        stroke="rgba(255,255,255,0.35)"
        strokeWidth="4"
      />
      <circle
        cx="120"
        cy="120"
        r="78"
        fill="#042f2e"
        stroke="#99f6e4"
        strokeWidth="3"
      />
      <path
        d="M88 96h64M120 88v64M96 152c8 10 16 14 24 14s16-4 24-14"
        stroke="#5eead4"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <ellipse cx="88" cy="72" rx="38" ry="18" fill={`url(#${id}Shine)`} />
    </svg>
  );
}

export function CircuitSvg({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 420 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M12 110 H90 L120 80 H190 L220 110 H300 L330 70 H408"
        stroke="url(#circuit)"
        strokeWidth="2"
      />
      <path
        d="M12 150 H70 L110 180 H210 L250 150 H408"
        stroke="url(#circuit)"
        strokeWidth="2"
        opacity="0.6"
      />
      <circle cx="120" cy="80" r="5" fill="#67e8f9" />
      <circle cx="220" cy="110" r="5" fill="#a78bfa" />
      <circle cx="330" cy="70" r="5" fill="#34d399" />
      <defs>
        <linearGradient id="circuit" x1="12" y1="110" x2="408" y2="110">
          <stop stopColor="#22d3ee" />
          <stop offset="1" stopColor="#818cf8" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function ShieldCrestSvg({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M60 8 L108 28 V68 C108 102 84 124 60 132 C36 124 12 102 12 68 V28 Z"
        fill="url(#shieldFill)"
        stroke="#67e8f9"
        strokeWidth="3"
      />
      <path
        d="M42 70 L54 82 L80 50"
        stroke="white"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="shieldFill" x1="12" y1="8" x2="108" y2="132">
          <stop stopColor="#0e7490" />
          <stop offset="1" stopColor="#312e81" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function OrbitRingsSvg({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 320 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <ellipse
        cx="160"
        cy="160"
        rx="140"
        ry="52"
        stroke="rgba(103,232,249,0.35)"
        strokeWidth="1.5"
        transform="rotate(-18 160 160)"
      />
      <ellipse
        cx="160"
        cy="160"
        rx="118"
        ry="44"
        stroke="rgba(167,139,250,0.4)"
        strokeWidth="1.5"
        transform="rotate(28 160 160)"
      />
      <circle cx="160" cy="160" r="36" stroke="rgba(255,255,255,0.25)" />
      <circle cx="278" cy="122" r="6" fill="#67e8f9" />
      <circle cx="68" cy="196" r="5" fill="#c084fc" />
    </svg>
  );
}

export function NoiseOverlay() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.09] mix-blend-overlay"
      aria-hidden="true"
    >
      <filter id="noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.85"
          numOctaves="3"
          stitchTiles="stitch"
        />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>
  );
}
