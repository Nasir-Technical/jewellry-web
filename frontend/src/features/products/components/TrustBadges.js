import { ShieldCheck, Truck, RotateCcw } from "@/components/Icons";

const badges = [
  { icon: ShieldCheck, label: "Secure Transaction" },
  { icon: Truck, label: "Insured Delivery" },
  { icon: RotateCcw, label: "Lifetime Service" },
];

export default function TrustBadges() {
  return (
    <div className="grid grid-cols-1 gap-6 border-t border-gold-500/10 pt-12 md:grid-cols-3">
      {badges.map(({ icon: Icon, label }) => (
        <div key={label} className="flex flex-col items-center space-y-2 text-center">
          <Icon size={24} className="text-gold-500/60" />
          <p className="text-[10px] uppercase tracking-widest text-gold-100/40">{label}</p>
        </div>
      ))}
    </div>
  );
}
