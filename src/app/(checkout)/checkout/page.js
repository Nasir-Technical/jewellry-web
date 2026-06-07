"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Container } from "@/components/layout";
import { CartSummary } from "@/features/cart/components";
import { Button, Input, Divider } from "@/components/ui";
import { MOCK_CUSTOMER } from "@/data/customer";
import { ROUTES } from "@/constants/routes";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { selectCartItems, selectCartSubtotal, clearCart } from "@/redux/slices/cartSlice";
import {
  setShippingAddress,
  setBillingAddress,
  setCheckoutStep,
  resetCheckout,
} from "@/redux/slices/checkoutSlice";
import { showToast } from "@/redux/slices/uiSlice";

const steps = ["Shipping", "Payment", "Review"];

export default function CheckoutPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const items = useAppSelector(selectCartItems);
  const subtotal = useAppSelector(selectCartSubtotal);
  const [step, setStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const defaultAddress = MOCK_CUSTOMER.addresses.find((addr) => addr.isDefault);

  const [shipping, setShipping] = useState({
    firstName: MOCK_CUSTOMER.firstName,
    lastName: MOCK_CUSTOMER.lastName,
    email: MOCK_CUSTOMER.email,
    phone: MOCK_CUSTOMER.phone,
    line1: defaultAddress?.line1 ?? "",
    line2: defaultAddress?.line2 ?? "",
    city: defaultAddress?.city ?? "",
    postalCode: defaultAddress?.postalCode ?? "",
    country: defaultAddress?.country ?? "",
  });

  const [payment, setPayment] = useState({
    cardName: `${MOCK_CUSTOMER.firstName} ${MOCK_CUSTOMER.lastName}`,
    cardNumber: "•••• •••• •••• 4242",
    expiry: "09 / 28",
    cvv: "•••",
  });

  if (items.length === 0) {
    return (
      <Container className="py-24 text-center">
        <p className="mb-4 font-cormorant text-xl italic text-gold-500">Nothing to checkout</p>
        <h1 className="mb-8 font-serif text-4xl text-white">Your cart is empty</h1>
        <Button href={ROUTES.shop} size="lg">
          Return to Shop
        </Button>
      </Container>
    );
  }

  const handleContinue = () => {
    if (step === 0) {
      dispatch(setShippingAddress(shipping));
      dispatch(setCheckoutStep(2));
      setStep(1);
      return;
    }

    if (step === 1) {
      dispatch(setBillingAddress(payment));
      dispatch(setCheckoutStep(3));
      setStep(2);
      return;
    }

    setIsSubmitting(true);
    dispatch(setCheckoutStep(4));

    setTimeout(() => {
      dispatch(clearCart());
      dispatch(resetCheckout());
      dispatch(showToast({ type: "success", message: "Order placed successfully" }));
      setIsSubmitting(false);
      router.push(ROUTES.orders);
    }, 1500);
  };

  return (
    <Container>
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <p className="mb-4 font-cormorant text-xl italic text-gold-500">Private Checkout</p>
        <h1 className="font-serif text-4xl text-white md:text-5xl">
          Complete Your <span className="gold-text-gradient">Acquisition</span>
        </h1>
      </div>

      <div className="mb-16 flex items-center justify-center gap-4 md:gap-8">
        {steps.map((label, index) => (
          <div key={label} className="flex items-center gap-4">
            <div
              className={`flex h-8 w-8 items-center justify-center text-[10px] font-bold ${
                index <= step
                  ? "bg-gold-600 text-black"
                  : "border border-gold-500/30 text-gold-500/50"
              }`}
            >
              {index + 1}
            </div>
            <span
              className={`hidden text-[10px] uppercase tracking-[0.2em] md:inline ${
                index <= step ? "text-gold-400" : "text-gold-500/40"
              }`}
            >
              {label}
            </span>
            {index < steps.length - 1 && <Divider className="hidden w-12 md:block" />}
          </div>
        ))}
      </div>

      <div className="grid gap-16 lg:grid-cols-3">
        <div className="lg:col-span-2">
          {step === 0 && (
            <div className="space-y-8 border border-gold-500/10 p-8 glass md:p-12">
              <h2 className="font-serif text-2xl text-white">Shipping Details</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Input
                  label="First Name"
                  value={shipping.firstName}
                  onChange={(e) => setShipping({ ...shipping, firstName: e.target.value })}
                />
                <Input
                  label="Last Name"
                  value={shipping.lastName}
                  onChange={(e) => setShipping({ ...shipping, lastName: e.target.value })}
                />
              </div>
              <Input
                label="Email"
                type="email"
                value={shipping.email}
                onChange={(e) => setShipping({ ...shipping, email: e.target.value })}
              />
              <Input
                label="Phone"
                value={shipping.phone}
                onChange={(e) => setShipping({ ...shipping, phone: e.target.value })}
              />
              <Input
                label="Address"
                value={shipping.line1}
                onChange={(e) => setShipping({ ...shipping, line1: e.target.value })}
              />
              <div className="grid gap-6 md:grid-cols-3">
                <Input
                  label="City"
                  value={shipping.city}
                  onChange={(e) => setShipping({ ...shipping, city: e.target.value })}
                />
                <Input
                  label="Postal Code"
                  value={shipping.postalCode}
                  onChange={(e) => setShipping({ ...shipping, postalCode: e.target.value })}
                />
                <Input
                  label="Country"
                  value={shipping.country}
                  onChange={(e) => setShipping({ ...shipping, country: e.target.value })}
                />
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-8 border border-gold-500/10 p-8 glass md:p-12">
              <h2 className="font-serif text-2xl text-white">Payment Method</h2>
              <p className="font-cormorant text-sm text-gold-100/50">
                Your payment is secured through encrypted private banking networks.
              </p>
              <Input
                label="Name on Card"
                value={payment.cardName}
                onChange={(e) => setPayment({ ...payment, cardName: e.target.value })}
              />
              <Input
                label="Card Number"
                value={payment.cardNumber}
                onChange={(e) => setPayment({ ...payment, cardNumber: e.target.value })}
              />
              <div className="grid gap-6 md:grid-cols-2">
                <Input
                  label="Expiry"
                  value={payment.expiry}
                  onChange={(e) => setPayment({ ...payment, expiry: e.target.value })}
                />
                <Input
                  label="CVV"
                  value={payment.cvv}
                  onChange={(e) => setPayment({ ...payment, cvv: e.target.value })}
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-8 border border-gold-500/10 p-8 glass md:p-12">
              <h2 className="font-serif text-2xl text-white">Review Order</h2>
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between border-b border-gold-500/10 py-4 text-sm"
                  >
                    <span className="text-gold-100/70">
                      {item.name} × {item.quantity}
                    </span>
                    <span className="text-gold-400">
                      ${(item.price * item.quantity).toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
              <div className="space-y-2 pt-4 text-[10px] uppercase tracking-widest text-gold-100/40">
                <p>
                  Shipping to: {shipping.line1}, {shipping.city}
                </p>
                <p>Insured white-glove delivery · Complimentary</p>
              </div>
            </div>
          )}

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            {step > 0 && (
              <Button variant="secondary" size="lg" onClick={() => setStep(step - 1)}>
                Back
              </Button>
            )}
            <Button
              size="lg"
              className="flex-1"
              onClick={handleContinue}
              isLoading={isSubmitting}
            >
              {step === 2 ? "Place Order" : "Continue"}
            </Button>
          </div>
        </div>

        <CartSummary subtotal={subtotal} showCheckout={false} />
      </div>
    </Container>
  );
}
