import { Badge } from "@/components/ui";
import { INVENTORY_STATUS_VARIANT } from "@/data/wholesale/products";
import { Button } from "@/components/ui";

export default function InventoryTable({ items, showActions = true }) {
  return (
    <div className="overflow-hidden border border-gold-500/10 glass">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[800px] text-left font-sans text-xs uppercase tracking-[0.1em]">
          <thead>
            <tr className="border-b border-gold-500/10 font-bold text-gold-500/60">
              <th className="p-6 md:p-8">Material ID</th>
              <th className="p-6 md:p-8">Type</th>
              <th className="p-6 md:p-8">Origin</th>
              <th className="p-6 md:p-8">Weight/Carat</th>
              <th className="p-6 md:p-8">Purity</th>
              <th className="p-6 md:p-8">Status</th>
              <th className="p-6 md:p-8">Market Price</th>
              {showActions && <th className="p-6 md:p-8">Action</th>}
            </tr>
          </thead>
          <tbody className="text-gold-100/70">
            {items.map((row) => (
              <tr
                key={row.id}
                className="border-b border-gold-500/5 transition-colors hover:bg-white/5"
              >
                <td className="p-6 md:p-8 font-mono text-[11px]">{row.id}</td>
                <td className="p-6 md:p-8 text-white">{row.type}</td>
                <td className="p-6 md:p-8">{row.origin}</td>
                <td className="p-6 md:p-8">{row.weight}</td>
                <td className="p-6 md:p-8">{row.purity}</td>
                <td className="p-6 md:p-8">
                  <Badge variant={INVENTORY_STATUS_VARIANT[row.status] ?? "default"}>
                    {row.status}
                  </Badge>
                </td>
                <td className="p-6 md:p-8 font-bold text-white">{row.priceDisplay}</td>
                {showActions && (
                  <td className="p-6 md:p-8">
                    <Button
                      variant={row.status === "Available" ? "primary" : "secondary"}
                      size="sm"
                      disabled={row.status !== "Available"}
                    >
                      {row.status === "Available" ? "Request Quote" : "Unavailable"}
                    </Button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
