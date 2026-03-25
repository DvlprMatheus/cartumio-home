import Link from "next/link";

import { cn } from "@/lib/utils";

type LandingNavLinkProps = {
  href: string;
  label: string;
  className?: string;
};

export function LandingNavLink({ href, label, className }: LandingNavLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "relative py-1 text-sm font-medium tracking-wide text-foreground/85 transition-colors",
        "hover:text-foreground",
        "after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px",
        "after:bg-gradient-to-r after:from-transparent after:via-foreground/55 after:to-transparent",
        "after:opacity-0 after:transition-opacity after:duration-200",
        "hover:after:opacity-100",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent",
        className,
      )}
    >
      {label}
    </Link>
  );
}
