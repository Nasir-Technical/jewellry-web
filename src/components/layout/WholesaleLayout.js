import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import { WholesaleNav } from "@/features/wholesale/components";
import { cn } from "@/lib/cn";

export default function WholesaleLayout({ children, className }) {
  return (
    <div className="flex min-h-screen flex-col bg-matte-black selection:bg-gold-500 selection:text-black">
      <Navbar />
      <WholesaleNav />
      <main className={cn("relative flex-1", className)}>{children}</main>
      <Footer />
    </div>
  );
}
