"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Gem, Package, BarChart3, ShieldCheck, ArrowRight } from "@/components/Icons";
import { Container } from "@/components/layout";
import { Button, Card, CardBody } from "@/components/ui";
import { CreditSummary } from "@/features/wholesale/components";
import { WHOLESALE_DEALER } from "@/data/wholesale";
import { ROUTES } from "@/constants/routes";

const portalLinks = [
  {
    title: "Dashboard",
    description: "Real-time inventory metrics, market trends, and procurement activity.",
    href: ROUTES.wholesaleDashboard,
    icon: BarChart3,
  },
  {
    title: "Raw Materials",
    description: "Browse certified gold, platinum, diamonds, and gemstone lots.",
    href: ROUTES.wholesaleProducts,
    icon: Package,
  },
  {
    title: "Quote Requests",
    description: "Track pending, approved, and historical pricing quotations.",
    href: ROUTES.wholesaleQuotes,
    icon: Gem,
  },
  {
    title: "Orders",
    description: "Monitor fulfillment, armored logistics, and delivery timelines.",
    href: ROUTES.wholesaleOrders,
    icon: ShieldCheck,
  },
];

export default function WholesalePortalPage() {
  return (
    <Container className="pb-32 pt-40 md:pt-48">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-20 text-center"
      >
        <p className="mb-4 font-cormorant text-xl italic text-gold-500">B2B Raw Material Exchange</p>
        <h1 className="mb-6 font-serif text-5xl text-white md:text-7xl">
          Wholesale <span className="gold-text-gradient">Portal</span>
        </h1>
        <p className="mx-auto mb-4 max-w-2xl font-cormorant text-lg text-gold-100/50 md:text-xl">
          Access Aurelia&apos;s secured depot of certified precious metals and gemstones.
          Exclusive to authorized ateliers and manufacturers.
        </p>
        <p className="text-[10px] uppercase tracking-[0.3em] text-gold-500/50">
          {WHOLESALE_DEALER.tier} · {WHOLESALE_DEALER.name} · Member since {WHOLESALE_DEALER.memberSince}
        </p>
      </motion.div>

      <div className="mb-16 grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="grid gap-6 sm:grid-cols-2">
            {portalLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.08 }}
              >
                <Link href={link.href} className="group block h-full">
                  <Card hover className="h-full p-8 transition-all duration-500 group-hover:border-gold-500/30">
                    <link.icon size={28} className="mb-6 text-gold-500" />
                    <h2 className="mb-3 font-serif text-2xl text-white group-hover:text-gold-300">
                      {link.title}
                    </h2>
                    <p className="mb-6 font-cormorant text-sm leading-relaxed text-gold-100/50">
                      {link.description}
                    </p>
                    <span className="inline-flex items-center text-[10px] uppercase tracking-[0.2em] text-gold-500">
                      Enter <ArrowRight size={14} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-6"
        >
          <CreditSummary />
          <Card className="p-8">
            <CardBody className="space-y-4 p-0">
              <p className="text-[10px] uppercase tracking-widest text-gold-500/60">Account Manager</p>
              <p className="font-serif text-xl text-white">{WHOLESALE_DEALER.accountManager}</p>
              <p className="font-cormorant text-sm italic text-gold-100/50">
                Available for private consultation on hedging and batch allocation.
              </p>
              <Button variant="outline" size="md" className="w-full">
                Schedule Call
              </Button>
            </CardBody>
          </Card>
        </motion.div>
      </div>

      <div className="border-t border-gold-500/10 pt-16 text-center">
        <p className="mb-8 font-cormorant text-xl italic text-gold-100/50">
          Prefer finished masterpieces?
        </p>
        <Button href={ROUTES.shop} variant="outline" size="lg">
          Visit Retail Boutique
        </Button>
      </div>
    </Container>
  );
}
