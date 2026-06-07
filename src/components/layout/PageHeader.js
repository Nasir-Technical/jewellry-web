import { cn } from "@/lib/cn";
import Container from "./Container";

export default function PageHeader({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  className,
  children,
}) {
  const alignClass =
    align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <header className={cn("mb-16", className)}>
      <Container className={cn("flex flex-col", alignClass)}>
        {eyebrow && (
          <p className="mb-4 font-cormorant text-xl italic text-gold-500">{eyebrow}</p>
        )}
        <h1 className="text-5xl font-serif tracking-tight text-white md:text-6xl lg:text-7xl">
          {title}{" "}
          {highlight && <span className="gold-text-gradient">{highlight}</span>}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl font-cormorant text-xl italic text-gold-500/60">
            {description}
          </p>
        )}
        {children}
      </Container>
    </header>
  );
}
