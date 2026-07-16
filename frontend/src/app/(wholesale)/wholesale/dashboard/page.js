"use client";

import { Container } from "@/components/layout";
import { Button } from "@/components/ui";
import {
  WholesaleHeader,
  StatCard,
  InventoryTable,
  ProcurementHistory,
  MarketInsights,
  CreditSummary,
} from "@/features/wholesale/components";
import { ROUTES } from "@/constants/routes";
import {
  DASHBOARD_STATS,
  MARKET_INSIGHTS,
  PROCUREMENT_HISTORY,
  WHOLESALE_PRODUCTS,
} from "@/data/wholesale";

export default function WholesaleDashboardPage() {
  const previewInventory = WHOLESALE_PRODUCTS.slice(0, 4);

  return (
    <Container className="pb-20 pt-12 md:pt-16">
      <WholesaleHeader
        title="Dealer"
        highlight="Dashboard"
        description="Consolidated view of inventory, market movement, and recent procurement across all Aurelia vaults."
        showExport
        action={
          <Button href={ROUTES.wholesaleProducts} size="md">
            Request Batch
          </Button>
        }
      />

      <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {DASHBOARD_STATS.map((stat, index) => (
          <StatCard key={stat.label} {...stat} index={index} />
        ))}
      </div>

      <div className="mb-12 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="font-serif text-xl text-white">Consolidated Raw Material Depot</h3>
            <Button href={ROUTES.wholesaleProducts} variant="ghost" size="sm">
              View All →
            </Button>
          </div>
          <InventoryTable items={previewInventory} showActions={false} />
        </div>
        <CreditSummary />
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          <ProcurementHistory items={PROCUREMENT_HISTORY} />
        </div>
        <MarketInsights insights={MARKET_INSIGHTS} />
      </div>
    </Container>
  );
}
