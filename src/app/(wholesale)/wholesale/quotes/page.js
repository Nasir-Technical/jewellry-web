"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/layout";
import { Button, Badge } from "@/components/ui";
import { WholesaleHeader, QuoteCard } from "@/features/wholesale/components";
import { WHOLESALE_QUOTES } from "@/data/wholesale/quotes";
import { cn } from "@/lib/cn";

const statusFilters = ["All", "Pending", "Approved", "Expired", "Declined"];

export default function WholesaleQuotesPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const quotes = useMemo(() => {
    if (activeFilter === "All") return WHOLESALE_QUOTES;
    return WHOLESALE_QUOTES.filter((quote) => quote.status === activeFilter);
  }, [activeFilter]);

  const counts = useMemo(() => {
    return statusFilters.reduce((acc, status) => {
      if (status === "All") {
        acc[status] = WHOLESALE_QUOTES.length;
      } else {
        acc[status] = WHOLESALE_QUOTES.filter((q) => q.status === status).length;
      }
      return acc;
    }, {});
  }, []);

  return (
    <Container className="pb-20 pt-12 md:pt-16">
      <WholesaleHeader
        title="Quote"
        highlight="Requests"
        description="Manage pricing quotations for raw material lots. Approved quotes may be converted to orders within the validity period."
        action={
          <Button size="md">Request New Quote</Button>
        }
      />

      <div className="mb-12 flex flex-wrap gap-3">
        {statusFilters.map((status) => (
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
              {counts[status]}
            </Badge>
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {quotes.length === 0 ? (
          <div className="py-24 text-center">
            <p className="font-cormorant text-xl italic text-gold-100/50">
              No quotes match this filter.
            </p>
          </div>
        ) : (
          quotes.map((quote) => <QuoteCard key={quote.id} quote={quote} />)
        )}
      </div>
    </Container>
  );
}
