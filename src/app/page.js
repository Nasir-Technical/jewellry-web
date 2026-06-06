"use client";

import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import ShopModal from "@/components/ShopModal";
import Hero from "@/sections/Hero";
import Collections from "@/sections/Collections";
import ProductShowcase from "@/sections/ProductShowcase";
import BrandStory from "@/sections/BrandStory";
import { Testimonials, InstagramGallery } from "@/sections/Social";
import Footer from "@/sections/Footer";

export default function Home() {
  return (
    <main className="relative bg-matte-black min-h-screen selection:bg-gold-500 selection:text-black">
      <Loader />
      <ShopModal />
      <Navbar />

      <Hero />
      <Collections />
      <ProductShowcase />
      <BrandStory />
      <Testimonials />
      <InstagramGallery />
      <Footer />
    </main>
  );
}
