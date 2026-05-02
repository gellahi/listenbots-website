import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "wordmark" | "mark";
  className?: string;
};

export function Logo({ variant = "wordmark", className }: LogoProps) {
  const sizeClass =
    variant === "mark" ? "h-8 w-auto" : "h-9 w-auto sm:h-10";
  const altText =
    variant === "mark" ? "ListenBots" : "ListenBots Software Solutions";

  const lightSrc =
    variant === "mark"
      ? "/icon-black-foreground.svg"
      : "/logo-black-foreground.svg";
  const darkSrc =
    variant === "mark"
      ? "/icon-white-foreground.svg"
      : "/logo-white-foreground.svg";

  return (
    <div
      className={cn(
        "inline-flex flex-col items-start leading-none select-none",
        className
      )}
    >
      {/* Light mode logo (visible when no .dark on html) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={lightSrc}
        alt={altText}
        className={cn("block object-left dark:hidden", sizeClass)}
      />
      {/* Dark mode logo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={darkSrc}
        alt={altText}
        className={cn("hidden object-left dark:block", sizeClass)}
      />
    </div>
  );
}
