"use client";

import Loader from "@/components/Loader";
import ShopModal from "@/components/ShopModal";
import Hero from "@/sections/Hero";
import Collections from "@/sections/Collections";
import ProductShowcase from "@/sections/ProductShowcase";
import BrandStory from "@/sections/BrandStory";
import { Testimonials, InstagramGallery } from "@/sections/Social";

export default function HomePage() {
  return (
    <>
      <Loader />
      <ShopModal />
      <Hero />
      <Collections />
      <ProductShowcase />
      <BrandStory />
      <Testimonials />
      <InstagramGallery />
    </>
  );
}
