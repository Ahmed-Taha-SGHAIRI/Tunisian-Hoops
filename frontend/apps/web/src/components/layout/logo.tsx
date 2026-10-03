import { cn } from "@/lib/utils";
import { Link } from "@/i18n/routing";

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2 font-heading text-xl uppercase tracking-wider text-primary", className)}>
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
        🏀
      </span>
      <span>Tunisian Hoops</span>
    </Link>
  );
}
