import Image from "next/image";
import { Badge } from "@/components/ui";
import { formatPrice } from "@/lib/formatters";
import { cn } from "@/lib/cn";

const statusVariant = {
  Delivered: "success",
  "In Transit": "info",
  Processing: "warning",
  Cancelled: "default",
};

export default function OrderCard({ order }) {
  const preview = order.items[0];

  return (
    <article className="border border-gold-500/10 p-6 transition-colors glass hover:border-gold-500/20 md:p-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-6">
          <div className="relative h-20 w-20 shrink-0 overflow-hidden border border-gold-500/10">
            <Image src={preview.image} alt={preview.name} fill className="object-cover" sizes="80px" />
          </div>
          <div>
            <p className="mb-1 text-[10px] uppercase tracking-widest text-gold-500">{order.id}</p>
            <h3 className="mb-2 font-serif text-xl text-white">
              {order.items.length > 1
                ? `${preview.name} + ${order.items.length - 1} more`
                : preview.name}
            </h3>
            <p className="text-xs uppercase tracking-widest text-gold-100/40">
              {new Date(order.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-3 md:items-end">
          <Badge variant={statusVariant[order.status] ?? "default"}>{order.status}</Badge>
          <p className="font-serif text-2xl text-gold-400">{formatPrice(order.total)}</p>
        </div>
      </div>

      {order.shipping?.tracking && (
        <p className={cn("mt-6 border-t border-gold-500/10 pt-4 text-[10px] uppercase tracking-widest text-gold-100/40")}>
          Tracking: <span className="text-gold-100/70">{order.shipping.tracking}</span>
        </p>
      )}
    </article>
  );
}
