import { TrendingUp } from "@/components/Icons";
import { Button } from "@/components/ui";

export default function MarketInsights({ insights }) {
  return (
    <div className="flex flex-col items-center justify-center border border-gold-500/10 p-8 text-center glass">
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gold-500/10">
        <TrendingUp size={32} className="text-gold-500" />
      </div>
      <h4 className="mb-2 font-serif text-2xl text-white">Market Insights</h4>
      <p className="mb-2 font-cormorant text-lg italic text-gold-400">{insights.headline}</p>
      <p className="mb-6 max-w-sm font-cormorant text-sm leading-relaxed text-gold-100/50">
        {insights.body}
      </p>
      <p className="mb-6 text-[9px] uppercase tracking-widest text-gold-900/60">
        Updated {insights.updatedAt}
      </p>
      <Button variant="ghost" size="sm" className="border-b border-gold-500/30 pb-1">
        View Full Analysis
      </Button>
    </div>
  );
}
