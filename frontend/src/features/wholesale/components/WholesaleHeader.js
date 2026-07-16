import { Download } from "@/components/Icons";
import { Button } from "@/components/ui";
import { WHOLESALE_DEALER } from "@/data/wholesale";

export default function WholesaleHeader({
  title,
  highlight,
  description,
  showExport = false,
  action,
}) {
  return (
    <header className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
      <div>
        <p className="mb-3 font-sans text-[10px] uppercase tracking-[0.3em] text-gold-500/60">
          {WHOLESALE_DEALER.tier} · {WHOLESALE_DEALER.name}
        </p>
        <h1 className="mb-4 font-serif text-4xl text-white md:text-5xl lg:text-6xl">
          {title}{" "}
          {highlight && <span className="gold-text-gradient">{highlight}</span>}
        </h1>
        {description && (
          <p className="max-w-2xl font-cormorant text-lg italic text-gold-100/50 md:text-xl">
            {description}
          </p>
        )}
      </div>

      <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
        {showExport && (
          <Button variant="secondary" size="md" leftIcon={<Download size={14} />}>
            Export Report
          </Button>
        )}
        {action}
      </div>
    </header>
  );
}
