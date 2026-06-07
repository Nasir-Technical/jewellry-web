"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, ShoppingBag } from "@/components/Icons";
import { IconButton } from "@/components/ui";
import { formatPrice } from "@/lib/formatters";
import { ROUTES } from "@/constants/routes";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addCartItem } from "@/redux/slices/cartSlice";
import { toggleWishlistItem, selectIsInWishlist } from "@/redux/slices/wishlistSlice";
import { showToast } from "@/redux/slices/uiSlice";
import { cn } from "@/lib/cn";

export default function ProductCard({ product, index = 0, className }) {
  const dispatch = useAppDispatch();
  const isWishlisted = useAppSelector(selectIsInWishlist(product.id));

  const handleAddToCart = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(addCartItem(product));
    dispatch(showToast({ type: "success", message: `${product.name} added to cart` }));
  };

  const handleToggleWishlist = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch(toggleWishlistItem(product));
    dispatch(
      showToast({
        type: "info",
        message: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      })
    );
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.08 }}
      className={cn("group", className)}
    >
      <div className="relative mb-6 aspect-[3/4] overflow-hidden border border-gold-500/10 bg-luxury-gray glass transition-all duration-500 group-hover:border-gold-500/30">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {product.isNew && (
          <span className="absolute left-4 top-4 bg-gold-600 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-black">
            New
          </span>
        )}

        <div className="absolute right-4 top-4 flex translate-x-12 flex-col space-y-3 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
          <IconButton
            variant="filled"
            size="md"
            label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
            onClick={handleToggleWishlist}
            className={cn(isWishlisted && "bg-gold-500 text-black")}
          >
            <Heart size={18} />
          </IconButton>
          <IconButton
            variant="filled"
            size="md"
            label="Add to cart"
            onClick={handleAddToCart}
          >
            <ShoppingBag size={18} />
          </IconButton>
        </div>

        <Link
          href={ROUTES.product(product.slug)}
          className="absolute bottom-0 left-0 w-full translate-y-full bg-gold-600/90 py-4 text-center text-[10px] font-bold uppercase tracking-[0.3em] text-black backdrop-blur-sm transition-transform duration-500 group-hover:translate-y-0"
        >
          View Details
        </Link>
      </div>

      <div className="text-center">
        <p className="mb-1 font-cormorant text-sm uppercase tracking-widest text-gold-500/60">
          {product.category}
        </p>
        <Link href={ROUTES.product(product.slug)}>
          <h3 className="mb-2 font-serif text-xl text-white transition-colors group-hover:text-gold-300">
            {product.name}
          </h3>
        </Link>
        <p className="font-sans text-lg font-light tracking-widest text-gold-500">
          {formatPrice(product.price)}
        </p>
      </div>
    </motion.article>
  );
}
