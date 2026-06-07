import Navbar from "@/components/Navbar";
import Footer from "@/sections/Footer";
import { cn } from "@/lib/cn";

export default function ShopLayout({ children, className }) {
  return (
    <div className="flex min-h-screen flex-col bg-matte-black selection:bg-gold-500 selection:text-black">
      <Navbar />
      <main className={cn("relative flex-1", className)}>{children}</main>
      <Footer />
    </div>
  );
}
