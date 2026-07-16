"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/layout";
import { Button, Badge } from "@/components/ui";
import { WholesaleHeader, WholesaleOrderCard } from "@/features/wholesale/components";
import { WHOLESALE_ORDERS } from "@/data/wholesale/orders";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/cn";

const statusFilters = ["All", "Processing", "In Transit", "Delivered"];

export default function WholesaleOrdersPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const orders = useMemo(() => {
    if (activeFilter === "All") return WHOLESALE_ORDERS;
    return WHOLESALE_ORDERS.filter((order) => order.status === activeFilter);
  }, [activeFilter]);

  const totalValue = WHOLESALE_ORDERS.reduce((sum, order) => sum + order.total, 0);

  return (
    <Container className="pb-20 pt-12 md:pt-16">
      <WholesaleHeader
        title="Procurement"
        highlight="Orders"
        description="Track armored shipments, vault releases, and delivery confirmations for all wholesale acquisitions."
        showExport
      />

      <div className="mb-12 grid gap-6 md:grid-cols-3">
        <div className="border border-gold-500/10 p-6 glass">
          <p className="mb-1 text-[10px] uppercase tracking-widest text-gold-500/60">Total Orders</p>
          <p className="font-serif text-3xl text-white">{WHOLESALE_ORDERS.length}</p>
        </div>
        <div className="border border-gold-500/10 p-6 glass">
          <p className="mb-1 text-[10px] uppercase tracking-widest text-gold-500/60">In Transit</p>
          <p className="font-serif text-3xl text-white">
            {WHOLESALE_ORDERS.filter((o) => o.status === "In Transit").length}
          </p>
        </div>
        <div className="border border-gold-500/10 p-6 glass">
          <p className="mb-1 text-[10px] uppercase tracking-widest text-gold-500/60">Lifetime Value</p>
          <p className="font-serif text-3xl text-gold-400">
            ${(totalValue / 1000000).toFixed(1)}M
          </p>
        </div>
      </div>

      <div className="mb-12 flex flex-wrap gap-3">
        {statusFilters.map((status) => {
          const count =
            status === "All"
              ? WHOLESALE_ORDERS.length
              : WHOLESALE_ORDERS.filter((o) => o.status === status).length;

          return (
            <button
              key={status}
              type="button"
              onClick={() => setActiveFilter(status)}
              className={cn(
                "flex items-center gap-2 border px-4 py-2 text-[10px] uppercase tracking-[0.2em] transition-colors",
                activeFilter === status
                  ? "border-gold-500 bg-gold-500/10 text-gold-400"
                  : "border-gold-500/20 text-gold-100/40 hover:border-gold-500/40"
              )}
            >
              {status}
              <Badge variant="default" className="px-2 py-0.5 text-[8px]">
                {count}
              </Badge>
            </button>
          );
        })}
      </div>

      <div className="space-y-6">
        {orders.map((order) => (
          <WholesaleOrderCard key={order.id} order={order} />
        ))}
      </div>

      <div className="mt-16 text-center">
        <Button href={ROUTES.wholesaleProducts} variant="outline" size="lg">
          Procure New Materials
        </Button>
      </div>
    </Container>
  );
}
