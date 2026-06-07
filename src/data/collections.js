export const COLLECTIONS = [
  {
    slug: "high-jewelry",
    title: "High Jewelry",
    subtitle: "One-of-a-kind Masterpieces",
    description:
      "Exceptional creations where rare gemstones and visionary design converge. Each piece exists as a singular work of art, destined for generations.",
    image: "/images/hero.png",
    span: "md:col-span-2",
    pieceCount: 24,
  },
  {
    slug: "bridal-couture",
    title: "Bridal Couture",
    subtitle: "For Your Moments",
    description:
      "Rings and ceremonial jewels crafted to mark life's most profound promises, with bespoke consultation at every stage.",
    image: "/images/product-necklace.png",
    span: "md:col-span-1",
    pieceCount: 18,
  },
  {
    slug: "signature-pieces",
    title: "Signature Pieces",
    subtitle: "The Aurelia Identity",
    description:
      "Iconic designs that define our maison — sculptural gold, refined proportion, and the quiet confidence of true luxury.",
    image: "/images/collection-ring.png",
    span: "md:col-span-1",
    pieceCount: 32,
  },
  {
    slug: "timepieces",
    title: "Haute Horlogerie",
    subtitle: "Measured in Moments",
    description:
      "Manufacture movements encased in precious metals, where Swiss watchmaking tradition meets contemporary elegance.",
    image: "/images/brand-story.png",
    span: "md:col-span-2",
    pieceCount: 12,
  },
];

export function getCollectionBySlug(slug) {
  return COLLECTIONS.find((collection) => collection.slug === slug) ?? null;
}
