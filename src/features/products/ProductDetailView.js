"use client";

import { motion } from "framer-motion";
import { Heart, ShoppingBag } from "@/components/Icons";
import { Button, IconButton } from "@/components/ui";
import { Container, SectionHeading } from "@/components/layout";
import { ProductGallery, ProductGrid, TrustBadges } from "@/features/products/components";
import { formatPrice } from "@/lib/formatters";
import { getRelatedProducts } from "@/data/products";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addCartItem } from "@/redux/slices/cartSlice";
import { toggleWishlistItem, selectIsInWishlist } from "@/redux/slices/wishlistSlice";
import { showToast } from "@/redux/slices/uiSlice";
import { cn } from "@/lib/cn";

export default function ProductDetailView({ product }) {
  const dispatch = useAppDispatch();
  const isWishlisted = useAppSelector(selectIsInWishlist(product.id));
  const relatedProducts = getRelatedProducts(product.slug);

  const handleAddToCart = () => {
    dispatch(addCartItem(product));
    dispatch(showToast({ type: "success", message: `${product.name} added to cart` }));
  };

  const handleToggleWishlist = () => {
    dispatch(toggleWishlistItem(product));
    dispatch(
      showToast({
        type: "info",
        message: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      })
    );
  };

  return (
    <>
      <section className="pb-20 pt-32 md:pt-48">
        <Container>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <ProductGallery images={product.images} alt={product.name} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col"
            >
              <p className="mb-4 font-cormorant text-xl italic text-gold-500">
                {product.category}
              </p>
              <h1 className="mb-6 font-serif text-4xl leading-tight text-white md:text-6xl">
                {product.name}
              </h1>
              <p className="mb-8 font-sans text-3xl font-light tracking-widest text-gold-400">
                {formatPrice(product.price)}
              </p>

              <div className="mb-12 space-y-6 font-cormorant text-lg leading-relaxed text-gold-100/60">
                <p>{product.description}</p>
                <ul className="list-disc space-y-3 pl-5 font-sans text-sm uppercase tracking-widest decoration-gold-500">
                  {product.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-6 pt-4 font-sans text-[10px] uppercase tracking-widest text-gold-100/40">
                  <span>Material: {product.material}</span>
                  <span>Origin: {product.origin}</span>
                </div>
              </div>

              <div className="mb-12 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Button
                  onClick={handleAddToCart}
                  size="lg"
                  className="flex-1"
                  leftIcon={<ShoppingBag size={18} />}
                >
                  Add to Collection
                </Button>
                <IconButton
                  variant="outline"
                  size="lg"
                  label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
                  onClick={handleToggleWishlist}
                  className={cn(
                    "h-auto rounded-none border-gold-500 px-8 py-5",
                    isWishlisted && "bg-gold-500/10"
                  )}
                >
                  <Heart size={20} />
                </IconButton>
              </div>

              <TrustBadges />
            </motion.div>
          </div>
        </Container>
      </section>

      {relatedProducts.length > 0 && (
        <section className="border-t border-gold-500/5 py-32">
          <Container>
            <SectionHeading
              eyebrow="Curated For You"
              title="You May Also"
              highlight="Admire"
              className="text-center"
            />
            <ProductGrid products={relatedProducts} columns={4} />
          </Container>
        </section>
      )}
    </>
  );
}
