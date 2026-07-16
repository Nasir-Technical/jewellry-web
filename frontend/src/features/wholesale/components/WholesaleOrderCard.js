import { Badge, Card, CardBody, CardHeader, Divider } from "@/components/ui";
import { Truck } from "@/components/Icons";
import { formatPrice } from "@/lib/formatters";
import { WHOLESALE_ORDER_STATUS_VARIANT } from "@/data/wholesale/orders";

export default function WholesaleOrderCard({ order }) {
  return (
    <Card hover className="luxury-shadow">
      <CardHeader className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-gold-500">
            {order.id}
          </p>
          <h3 className="font-serif text-xl text-white">
            {order.items.map((i) => i.type).join(" · ")}
          </h3>
          <p className="mt-1 text-[10px] uppercase tracking-widest text-gold-100/40">
            Placed{" "}
            {new Date(order.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
        <div className="flex flex-col items-start gap-2 md:items-end">
          <Badge variant={WHOLESALE_ORDER_STATUS_VARIANT[order.status] ?? "default"}>
            {order.status}
          </Badge>
          <p className="font-serif text-2xl text-gold-400">{formatPrice(order.total)}</p>
        </div>
      </CardHeader>

      <CardBody className="space-y-6">
        <div className="space-y-3">
          {order.items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b border-gold-500/5 py-3 text-sm last:border-0"
            >
              <div>
                <p className="text-gold-100/80">{item.type}</p>
                <p className="text-[10px] uppercase tracking-widest text-gold-100/40">
                  {item.id} · Qty {item.quantity}
                </p>
              </div>
              <p className="text-gold-400">{formatPrice(item.subtotal)}</p>
            </div>
          ))}
        </div>

        <Divider />

        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex items-start gap-3">
            <Truck size={18} className="mt-0.5 shrink-0 text-gold-500" />
            <div>
              <p className="text-[10px] uppercase tracking-widest text-gold-500/60">
                {order.shipping.method}
              </p>
              <p className="mt-1 text-sm text-gold-100/60">
                {order.shipping.origin} → {order.shipping.destination}
              </p>
            </div>
          </div>
          <div className="md:text-right">
            <p className="text-[10px] uppercase tracking-widest text-gold-100/40">
              Tracking: <span className="text-gold-100/70">{order.shipping.tracking}</span>
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-widest text-gold-100/40">
              ETA:{" "}
              {new Date(order.shipping.eta).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
