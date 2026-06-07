import { Package, TrendingUp, Globe, BarChart3 } from "@/components/Icons";

export const DASHBOARD_STATS = [
  { label: "Active Inventory", value: "1,240kg", icon: Package, trend: "+8.2% vs last month" },
  { label: "Market Trend", value: "+2.4%", icon: TrendingUp, trend: "Gold index 30-day" },
  { label: "Global Orders", value: "84", icon: Globe, trend: "12 pending fulfillment" },
  { label: "Portfolio Value", value: "$4.2M", icon: BarChart3, trend: "Across all vaults" },
];

export const MARKET_INSIGHTS = {
  headline: "Gold prices are expected to rise by 4.2% next quarter.",
  body: "Hedging options available for authorized dealers. Palladium and platinum spreads remain favorable for Q2 procurement.",
  updatedAt: "2026-03-01",
};
