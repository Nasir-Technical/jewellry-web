import { cn } from "@/lib/cn";

export default function Card({ className, children, hover = false, glass = true, ...props }) {
  return (
    <div
      className={cn(
        "border border-gold-500/10",
        glass && "glass",
        hover && "gold-border-glow transition-all duration-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className, children }) {
  return <div className={cn("border-b border-gold-500/10 p-6 md:p-8", className)}>{children}</div>;
}

export function CardBody({ className, children }) {
  return <div className={cn("p-6 md:p-8", className)}>{children}</div>;
}

export function CardFooter({ className, children }) {
  return <div className={cn("border-t border-gold-500/10 p-6 md:p-8", className)}>{children}</div>;
}
