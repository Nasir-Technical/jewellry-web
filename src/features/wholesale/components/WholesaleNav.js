"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ROUTES } from "@/constants/routes";
import { cn } from "@/lib/cn";

const links = [
  { label: "Portal", href: ROUTES.wholesale },
  { label: "Dashboard", href: ROUTES.wholesaleDashboard },
  { label: "Products", href: ROUTES.wholesaleProducts },
  { label: "Quotes", href: ROUTES.wholesaleQuotes },
  { label: "Orders", href: ROUTES.wholesaleOrders },
];

export default function WholesaleNav() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-gold-500/10 bg-matte-black/80 backdrop-blur-md">
      <div className="container mx-auto flex gap-1 overflow-x-auto px-6 scrollbar-hide">
        {links.map((link) => {
          const isActive =
            link.href === ROUTES.wholesale
              ? pathname === ROUTES.wholesale
              : pathname.startsWith(link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "shrink-0 border-b-2 px-4 py-4 text-[10px] uppercase tracking-[0.25em] transition-colors md:px-6",
                isActive
                  ? "border-gold-500 text-gold-400"
                  : "border-transparent text-gold-100/40 hover:text-gold-500"
              )}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
