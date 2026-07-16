"use client";

import { Container, PageHeader } from "@/components/layout";
import OrderCard from "@/features/orders/components/OrderCard";
import { Button } from "@/components/ui";
import { MOCK_ORDERS } from "@/data/orders";
import { ROUTES } from "@/constants/routes";

export default function OrdersPage() {
  return (
    <section className="pb-32 pt-48">
      <Container>
        <PageHeader
          align="left"
          eyebrow="Maison Privée"
          title="Order"
          highlight="History"
          description={`${MOCK_ORDERS.length} acquisitions on record`}
          className="mb-16"
        />

        <div className="space-y-6">
          {MOCK_ORDERS.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>

        <div className="mt-16 border-t border-gold-500/10 pt-16 text-center">
          <p className="mb-8 font-cormorant text-xl italic text-gold-100/50">
            Continue your journey with Aurelia
          </p>
          <Button href={ROUTES.shop} variant="outline" size="lg">
            Explore New Arrivals
          </Button>
        </div>
      </Container>
    </section>
  );
}
