export function TokenLogo({
  symbol,
  className = "w-14 h-14",
}: {
  symbol: string;
  className?: string;
}) {
  const mark = symbol.toUpperCase();

  if (mark === "USDT") {
    return (
      <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
        <circle cx="32" cy="32" r="32" fill="#26A17B" />
        <circle cx="32" cy="32" r="22" fill="#1B8F6A" />
        <path
          fill="#fff"
          d="M18 22.5h28v5.5H36.2v8.2c6.8.4 11.8 1.9 11.8 3.8 0 2.1-6.1 3.8-13.6 3.8h-.4v9.2h-6v-9.2h-.4c-7.5 0-13.6-1.7-13.6-3.8 0-1.9 5-3.4 11.8-3.8V28H18V22.5Z"
        />
      </svg>
    );
  }

  if (mark === "BTC") {
    return (
      <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
        <circle cx="32" cy="32" r="32" fill="#F7931A" />
        <path
          fill="#fff"
          d="M41.4 30.4c.6-4.1-2.5-6.3-6.8-7.8l1.4-5.6-3.4-.8-1.3 5.4c-.9-.2-1.8-.4-2.7-.6l1.3-5.4-3.4-.8-1.4 5.6c-.7-.2-1.5-.3-2.2-.5l.1-.2-4.6-1.2-.9 3.6s2.5.6 2.4.6c1.4.3 1.6 1.2 1.6 1.9l-1.6 6.4c.1 0 .2 0 .4.1h-.4l-2.2 9c-.2.4-.6 1.1-1.5.8.1.1-2.4-.6-2.4-.6l-1.7 3.8 4.4 1.1c.8.2 1.6.4 2.4.6l-1.4 5.7 3.4.8 1.4-5.6c.9.3 1.8.5 2.7.7l-1.4 5.5 3.4.8 1.4-5.7c5.8 1.1 10.2.6 12-4.6 1.5-4.2-.1-6.6-3.1-8.2 2.2-.5 3.9-2 4.4-5zm-6.3 8.8c-1 4.2-8.1 1.9-10.4 1.4l1.9-7.5c2.3.6 9.6 1.7 8.5 6.1zm1.1-8.9c-1 3.8-7 1.9-9 1.4l1.7-6.8c2 .5 8.3 1.4 7.3 5.4z"
        />
      </svg>
    );
  }

  if (mark === "TRX") {
    return (
      <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
        <circle cx="32" cy="32" r="32" fill="#EF0027" />
        <path
          fill="#fff"
          d="M16 18.5 48 22.2 32.4 46.5 16 18.5Zm6.4 4.6 7.6 13.1 2.3-16.2-9.9 3.1Zm13.3-1.7-2.6 18.3 11.4-15.9-8.8-2.4Z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <circle cx="32" cy="32" r="32" fill="#F3BA2F" />
      <path
        fill="#fff"
        d="M32 14.5 38.8 21.3 32 28.1 25.2 21.3 32 14.5Zm-17.5 17.5L21.3 25.2 28.1 32 21.3 38.8 14.5 32Zm35 0L42.7 25.2 35.9 32 42.7 38.8 49.5 32ZM32 35.9 38.8 42.7 32 49.5 25.2 42.7 32 35.9Z"
      />
    </svg>
  );
}
