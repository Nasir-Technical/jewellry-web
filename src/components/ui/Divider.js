import { cn } from "@/lib/cn";

export default function Divider({ className, orientation = "horizontal", ...props }) {
  return (
    <div
      role="separator"
      className={cn(
        orientation === "horizontal" ? "h-px w-full bg-gold-500/10" : "h-full w-px bg-gold-500/10",
        className
      )}
      {...props}
    />
  );
}
