import { History } from "@/components/Icons";
import { formatPrice } from "@/lib/formatters";

export default function ProcurementHistory({ items }) {
  return (
    <div className="border border-gold-500/10 p-8 glass">
      <h4 className="mb-8 flex items-center font-serif text-xl text-white">
        <History size={18} className="mr-3 text-gold-500" />
        Procurement History
      </h4>
      <div className="space-y-6">
        {items.map((item) => (
          <div
            key={item.batch}
            className="flex items-center justify-between border-b border-gold-500/5 py-4 last:border-0"
          >
            <div>
              <p className="text-sm text-gold-100/80">
                {item.batch} — {item.material}
              </p>
              <p className="mt-1 text-[10px] uppercase tracking-widest text-gold-900/60">
                Confirmed {item.date}
              </p>
            </div>
            <p className="font-bold text-white">{formatPrice(item.amount)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
