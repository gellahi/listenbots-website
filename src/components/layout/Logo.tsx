import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "wordmark" | "mark";
  showCaption?: boolean;
  className?: string;
};

export function Logo({
  variant = "wordmark",
  showCaption = false,
  className,
}: LogoProps) {
  if (variant === "mark") {
    return (
      <svg
        viewBox="0 0 40 40"
        xmlns="http://www.w3.org/2000/svg"
        className={cn("h-8 w-8", className)}
        aria-label="ListenBots"
      >
        <rect width="40" height="40" rx="8" fill="#1a1a1a" />
        <text
          x="50%"
          y="54%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontFamily="var(--font-syne), system-ui, sans-serif"
          fontWeight="800"
          fontSize="22"
          fill="#f5f5f5"
        >
          b
        </text>
        <line
          x1="6"
          y1="34"
          x2="34"
          y2="6"
          stroke="#22c55e"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <div
      className={cn("flex flex-col leading-none select-none", className)}
      aria-label="ListenBots Software Solutions"
    >
      <span className="font-display font-extrabold tracking-tight text-text-primary text-[1.35rem] sm:text-[1.5rem] inline-flex items-baseline">
        <span>listen</span>
        <span className="text-accent-green mx-[1px]">/</span>
        <span>bots</span>
      </span>
      {showCaption && (
        <span className="font-mono text-[0.55rem] sm:text-[0.6rem] uppercase tracking-[0.32em] text-accent-green mt-1">
          Software Solutions
        </span>
      )}
    </div>
  );
}
