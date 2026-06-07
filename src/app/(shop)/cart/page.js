"use client";

import Link from "next/link";
import { Container, PageHeader } from "@/components/layout";
import { CartLineItem, CartSummary, EmptyCart } from "@/features/cart/components";
import { ROUTES } from "@/constants/routes";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import {
  selectCartCount,
  selectCartItems,
  selectCartSubtotal,
  removeCartItem,
  updateCartItemQuantity,
} from "@/redux/slices/cartSlice";

export default function CartPage() {
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartItems);
  const subtotal = useAppSelector(selectCartSubtotal);
  const count = useAppSelector(selectCartCount);

  const handleUpdateQuantity = (id, quantity) => {
    if (quantity < 1) {
      dispatch(removeCartItem(id));
      return;
    }
    dispatch(updateCartItemQuantity({ id, quantity }));
  };

  return (
    <section className="pb-32 pt-48">
      <Container>
        <PageHeader
          align="left"
          title="Shopping"
          highlight="Cart"
          description={
            count
              ? `${count} ${count === 1 ? "Piece" : "Pieces"} Selected`
              : "Your cart is empty"
          }
          className="mb-16"
        />

        {items.length === 0 ? (
          <EmptyCart />
        ) : (
          <div className="grid gap-16 lg:grid-cols-3">
            <div className="space-y-4 lg:col-span-2">
              {items.map((item, index) => (
                <CartLineItem
                  key={item.id}
                  item={item}
                  index={index}
                  onUpdateQuantity={handleUpdateQuantity}
                  onRemove={(id) => dispatch(removeCartItem(id))}
                />
              ))}

              <Link
                href={ROUTES.shop}
                className="inline-block border-b border-gold-500/30 pb-2 pt-8 text-[10px] uppercase tracking-[0.3em] text-gold-500 transition-colors hover:text-gold-300"
              >
                ← Continue Browsing
              </Link>
            </div>

            <CartSummary subtotal={subtotal} />
          </div>
        )}
      </Container>
    </section>
  );
}
