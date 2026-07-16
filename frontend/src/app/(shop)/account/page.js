"use client";

import Link from "next/link";
import { Container, PageHeader } from "@/components/layout";
import { Card, CardBody, CardHeader, Button, Divider } from "@/components/ui";
import { MOCK_CUSTOMER } from "@/data/customer";
import { ROUTES } from "@/constants/routes";
import { User, Mail, Package } from "@/components/Icons";

export default function AccountPage() {
  const customer = MOCK_CUSTOMER;

  return (
    <section className="pb-32 pt-48">
      <Container>
        <PageHeader
          align="left"
          eyebrow={`${customer.tier} Member`}
          title={`Welcome, ${customer.firstName}`}
          description={`Maison member since ${customer.memberSince}. Manage your profile, addresses, and preferences.`}
          className="mb-16"
        />

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <Card>
              <CardHeader>
                <h2 className="flex items-center gap-3 font-serif text-2xl text-white">
                  <User size={20} className="text-gold-500" />
                  Personal Information
                </h2>
              </CardHeader>
              <CardBody className="grid gap-6 md:grid-cols-2">
                <div>
                  <p className="mb-1 text-[10px] uppercase tracking-widest text-gold-500/60">Name</p>
                  <p className="font-serif text-xl text-white">
                    {customer.firstName} {customer.lastName}
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-[10px] uppercase tracking-widest text-gold-500/60">Email</p>
                  <p className="flex items-center gap-2 text-gold-100/70">
                    <Mail size={14} className="text-gold-500" />
                    {customer.email}
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-[10px] uppercase tracking-widest text-gold-500/60">Phone</p>
                  <p className="text-gold-100/70">{customer.phone}</p>
                </div>
                <div>
                  <p className="mb-1 text-[10px] uppercase tracking-widest text-gold-500/60">Membership</p>
                  <p className="gold-text-gradient font-serif text-xl">{customer.tier}</p>
                </div>
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="font-serif text-2xl text-white">Saved Addresses</h2>
              </CardHeader>
              <CardBody className="space-y-6">
                {customer.addresses.map((address) => (
                  <div
                    key={address.id}
                    className="border border-gold-500/10 p-6 transition-colors hover:border-gold-500/20"
                  >
                    <div className="mb-3 flex items-center justify-between">
                      <p className="text-[10px] uppercase tracking-widest text-gold-500">
                        {address.label}
                      </p>
                      {address.isDefault && (
                        <span className="text-[9px] uppercase tracking-widest text-gold-100/40">
                          Default
                        </span>
                      )}
                    </div>
                    <p className="font-cormorant text-lg text-gold-100/70">
                      {address.line1}
                      {address.line2 && `, ${address.line2}`}
                      <br />
                      {address.postalCode} {address.city}, {address.country}
                    </p>
                  </div>
                ))}
              </CardBody>
            </Card>

            <Card>
              <CardHeader>
                <h2 className="font-serif text-2xl text-white">Preferences</h2>
              </CardHeader>
              <CardBody className="space-y-4">
                {Object.entries(customer.preferences).map(([key, value]) => (
                  <div key={key} className="flex items-center justify-between py-2">
                    <span className="text-sm capitalize text-gold-100/60">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </span>
                    <span
                      className={`text-[10px] uppercase tracking-widest ${
                        value ? "text-green-400" : "text-gold-900/60"
                      }`}
                    >
                      {value ? "Enabled" : "Disabled"}
                    </span>
                  </div>
                ))}
              </CardBody>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="luxury-shadow">
              <CardBody className="space-y-6">
                <h3 className="font-serif text-xl text-white">Quick Links</h3>
                <Divider />
                <Link
                  href={ROUTES.orders}
                  className="flex items-center gap-3 text-sm text-gold-100/60 transition-colors hover:text-gold-400"
                >
                  <Package size={18} className="text-gold-500" />
                  Order History
                </Link>
                <Link
                  href={ROUTES.wishlist}
                  className="flex items-center gap-3 text-sm text-gold-100/60 transition-colors hover:text-gold-400"
                >
                  Wishlist
                </Link>
                <Link
                  href={ROUTES.cart}
                  className="flex items-center gap-3 text-sm text-gold-100/60 transition-colors hover:text-gold-400"
                >
                  Shopping Cart
                </Link>
                <Divider />
                <Button href={ROUTES.shop} variant="outline" className="w-full">
                  Continue Shopping
                </Button>
              </CardBody>
            </Card>

            <Card>
              <CardBody>
                <p className="mb-4 font-cormorant text-lg italic text-gold-100/50">
                  Your dedicated concierge is available 24 hours for private appointments.
                </p>
                <Button variant="secondary" className="w-full">
                  Book Appointment
                </Button>
              </CardBody>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
