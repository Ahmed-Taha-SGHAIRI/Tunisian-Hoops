import { cn } from "@/lib/utils";

interface TeamBadgeProps {
  initials: string;
  color: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const sizeClasses = {
  sm: 'w-6 h-6 text-xs',
  md: 'w-10 h-10 text-base',
  lg: 'w-16 h-16 text-2xl',
  xl: 'w-24 h-24 text-4xl',
};

export function TeamBadge({ initials, color, size = 'md', className }: TeamBadgeProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-full font-heading font-bold text-white shadow-sm",
        sizeClasses[size],
        className
      )}
      style={{ backgroundColor: color }}
    >
      {initials}
    </div>
  );
}
