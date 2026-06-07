import { Badge, Button, Card, CardBody, CardHeader, Divider } from "@/components/ui";
import { formatPrice } from "@/lib/formatters";
import { QUOTE_STATUS_VARIANT } from "@/data/wholesale/quotes";

export default function QuoteCard({ quote }) {
  return (
    <Card hover className="luxury-shadow">
      <CardHeader className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="mb-1 font-mono text-[10px] uppercase tracking-widest text-gold-500">
            {quote.id}
          </p>
          <h3 className="font-serif text-xl text-white">
            {quote.items.length} {quote.items.length === 1 ? "Material" : "Materials"}
          </h3>
          <p className="mt-1 text-[10px] uppercase tracking-widest text-gold-100/40">
            Requested{" "}
            {new Date(quote.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
        <Badge variant={QUOTE_STATUS_VARIANT[quote.status] ?? "default"}>{quote.status}</Badge>
      </CardHeader>

      <CardBody className="space-y-6">
        <div className="space-y-3">
          {quote.items.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b border-gold-500/5 py-3 text-sm last:border-0"
            >
              <div>
                <p className="text-gold-100/80">{item.type}</p>
                <p className="text-[10px] uppercase tracking-widest text-gold-100/40">
                  {item.id} · {item.quantity}
                </p>
              </div>
              <p className="text-gold-400">{formatPrice(item.unitPrice)}</p>
            </div>
          ))}
        </div>

        <Divider />

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-widest text-gold-500/60">Total Estimate</p>
            <p className="font-serif text-2xl text-white">{formatPrice(quote.totalEstimate)}</p>
            <p className="mt-1 text-[10px] uppercase tracking-widest text-gold-100/40">
              Valid until{" "}
              {new Date(quote.validUntil).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </p>
          </div>
          {quote.status === "Approved" && (
            <Button size="md">Convert to Order</Button>
          )}
          {quote.status === "Pending" && (
            <Button variant="secondary" size="md">
              View Details
            </Button>
          )}
          {quote.status === "Expired" && (
            <Button variant="outline" size="md">
              Request Re-Quote
            </Button>
          )}
        </div>

        {quote.notes && (
          <p className="font-cormorant text-sm italic text-gold-100/50">{quote.notes}</p>
        )}
      </CardBody>
    </Card>
  );
}
