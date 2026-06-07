import { cn } from "@/lib/cn";
import { badgeVariants } from "@/constants/theme";

export default function Badge({ className, variant = "default", children, ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-[9px] uppercase tracking-widest",
        badgeVariants[variant] ?? badgeVariants.default,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
