import { cn } from "@/lib/cn";

export default function Container({ className, as: Component = "div", children, ...props }) {
  return (
    <Component className={cn("container mx-auto px-6", className)} {...props}>
      {children}
    </Component>
  );
}
