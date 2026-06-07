import { formatPrice } from "@/lib/formatters";
import { WHOLESALE_DEALER } from "@/data/wholesale";

export default function CreditSummary() {
  const available = WHOLESALE_DEALER.creditLimit - WHOLESALE_DEALER.creditUsed;
  const usedPercent = Math.round((WHOLESALE_DEALER.creditUsed / WHOLESALE_DEALER.creditLimit) * 100);

  return (
    <div className="border border-gold-500/10 p-8 glass">
      <p className="mb-2 text-[10px] uppercase tracking-widest text-gold-500/60">Credit Facility</p>
      <p className="mb-6 font-serif text-3xl text-white">{formatPrice(available)}</p>
      <div className="mb-3 h-1 w-full overflow-hidden bg-gold-900/30">
        <div
          className="h-full gold-gradient"
          style={{ width: `${usedPercent}%` }}
        />
      </div>
      <div className="flex justify-between text-[10px] uppercase tracking-widest text-gold-100/40">
        <span>{usedPercent}% utilized</span>
        <span>Limit {formatPrice(WHOLESALE_DEALER.creditLimit)}</span>
      </div>
    </div>
  );
}
