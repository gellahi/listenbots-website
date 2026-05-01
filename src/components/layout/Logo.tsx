import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "wordmark" | "mark";
  className?: string;
};

export function Logo({
  variant = "wordmark",
  className,
}: LogoProps) {
  const logoClassName =
    variant === "mark" ? "h-8 w-auto" : "h-9 w-auto sm:h-10";
  const altText =
    variant === "mark" ? "ListenBots" : "ListenBots Software Solutions";

  return (
    <div
      className={cn(
        "inline-flex flex-col items-start leading-none select-none",
        className
      )}
    >
      <img
        src="/logo-white-foreground.svg"
        alt={altText}
        className={cn("block object-left", logoClassName)}
      />
    </div>
  );
}
