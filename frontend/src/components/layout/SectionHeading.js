import { cn } from "@/lib/cn";

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
  className,
}) {
  const alignClass = align === "left" ? "text-left" : "text-center";

  return (
    <div className={cn("mb-16 md:mb-20", alignClass, className)}>
      {eyebrow && (
        <p className="mb-4 font-cormorant text-xl italic text-gold-500">{eyebrow}</p>
      )}
      <h2 className="text-4xl font-serif tracking-tight text-white md:text-5xl lg:text-6xl">
        {title}{" "}
        {highlight && <span className="gold-text-gradient">{highlight}</span>}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl font-cormorant text-lg text-gold-100/60 md:text-xl">
          {description}
        </p>
      )}
    </div>
  );
}
