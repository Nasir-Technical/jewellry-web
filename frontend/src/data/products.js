export const PRODUCTS = [
  {
    id: 1,
    slug: "elysian-emerald-necklace",
    name: "Elysian Emerald Necklace",
    price: 45000,
    category: "High Jewelry",
    collectionSlug: "high-jewelry",
    image: "/images/product-necklace.png",
    images: [
      "/images/product-necklace.png",
      "/images/hero.png",
      "/images/collection-ring.png",
      "/images/brand-story.png",
    ],
    description:
      "A breathtaking celebration of nature's beauty, featuring a 25-carat Zambian emerald suspended from a cascade of pear-shaped D-color diamonds. Handcrafted in 18k white gold.",
    details: ["GIA Certified Grade", "Conflict-Free Diamonds", "Limited Production"],
    material: "18k White Gold",
    origin: "Geneva, Switzerland",
    isNew: true,
    isBestseller: true,
  },
  {
    id: 2,
    slug: "golden-solstice-ring",
    name: "Golden Solstice Ring",
    price: 12800,
    category: "Engagement",
    collectionSlug: "bridal-couture",
    image: "/images/collection-ring.png",
    images: [
      "/images/collection-ring.png",
      "/images/hero.png",
      "/images/product-necklace.png",
      "/images/brand-story.png",
    ],
    description:
      "An oval-cut diamond of exceptional fire set within a cathedral of brushed gold, inspired by the golden hour over Lake Geneva.",
    details: ["D-Color Center Stone", "Platinum Prong Setting", "Lifetime Resize"],
    material: "18k Yellow Gold",
    origin: "Paris, France",
    isNew: false,
    isBestseller: true,
  },
  {
    id: 3,
    slug: "celestial-diamond-drops",
    name: "Celestial Diamond Drops",
    price: 28500,
    category: "Earrings",
    collectionSlug: "high-jewelry",
    image: "/images/hero.png",
    images: [
      "/images/hero.png",
      "/images/product-necklace.png",
      "/images/collection-ring.png",
      "/images/brand-story.png",
    ],
    description:
      "Graduated pear diamonds descend like constellations, each stone hand-matched for symmetry and spectral brilliance.",
    details: ["Matched Pair Guarantee", "Secure Lock Backs", "Complimentary Cleaning"],
    material: "Platinum",
    origin: "Geneva, Switzerland",
    isNew: true,
    isBestseller: false,
  },
  {
    id: 4,
    slug: "aurora-gold-cuff",
    name: "Aurora Gold Cuff",
    price: 18200,
    category: "Bracelets",
    collectionSlug: "signature-pieces",
    image: "/images/brand-story.png",
    images: [
      "/images/brand-story.png",
      "/images/collection-ring.png",
      "/images/hero.png",
      "/images/product-necklace.png",
    ],
    description:
      "Sculptural lines of satin-finished gold embrace the wrist, punctuated by a single brilliant-cut diamond at the apex.",
    details: ["Articulated Hinge", "Hand-Polished Finish", "Engraving Available"],
    material: "18k Rose Gold",
    origin: "Milan, Italy",
    isNew: false,
    isBestseller: false,
  },
  {
    id: 5,
    slug: "nocturne-sapphire-pendant",
    name: "Nocturne Sapphire Pendant",
    price: 22400,
    category: "Necklaces",
    collectionSlug: "signature-pieces",
    image: "/images/product-necklace.png",
    images: [
      "/images/product-necklace.png",
      "/images/brand-story.png",
      "/images/hero.png",
      "/images/collection-ring.png",
    ],
    description:
      "A velvety Kashmir sapphire rests within a halo of micro-pavé diamonds, evoking the depth of a midnight sky.",
    details: ["Gübelin Certified Sapphire", "Adjustable Chain 16–18in", "Presentation Case Included"],
    material: "18k White Gold",
    origin: "Zürich, Switzerland",
    isNew: true,
    isBestseller: false,
  },
  {
    id: 6,
    slug: "regent-diamond-band",
    name: "Regent Diamond Band",
    price: 9600,
    category: "Rings",
    collectionSlug: "bridal-couture",
    image: "/images/collection-ring.png",
    images: [
      "/images/collection-ring.png",
      "/images/product-necklace.png",
      "/images/hero.png",
      "/images/brand-story.png",
    ],
    description:
      "A continuous river of baguette and round diamonds encircles the finger in an unbroken line of light.",
    details: ["Eternity Profile", "Comfort-Fit Band", "Annual Inspection"],
    material: "Platinum",
    origin: "London, United Kingdom",
    isNew: false,
    isBestseller: true,
  },
  {
    id: 7,
    slug: "lumiere-pearl-choker",
    name: "Lumière Pearl Choker",
    price: 31500,
    category: "Necklaces",
    collectionSlug: "high-jewelry",
    image: "/images/hero.png",
    images: [
      "/images/hero.png",
      "/images/brand-story.png",
      "/images/product-necklace.png",
      "/images/collection-ring.png",
    ],
    description:
      "South Sea pearls of exceptional luster are interspersed with diamond rondelles, creating a choker of quiet opulence.",
    details: ["AAA South Sea Pearls", "Silk Thread Re-Stringing", "Museum-Grade Clasp"],
    material: "18k Yellow Gold",
    origin: "Tokyo, Japan",
    isNew: false,
    isBestseller: false,
  },
  {
    id: 8,
    slug: "atlas-chronograph",
    name: "Atlas Chronograph",
    price: 52000,
    category: "Watches",
    collectionSlug: "timepieces",
    image: "/images/brand-story.png",
    images: [
      "/images/brand-story.png",
      "/images/hero.png",
      "/images/collection-ring.png",
      "/images/product-necklace.png",
    ],
    description:
      "A manufacture chronograph with a skeletonized dial revealing a hand-finished movement, housed in a 42mm gold case.",
    details: ["72-Hour Power Reserve", "Alligator Strap", "5-Year Warranty"],
    material: "18k Rose Gold",
    origin: "Geneva, Switzerland",
    isNew: true,
    isBestseller: true,
  },
];

export const PRODUCT_CATEGORIES = [
  "All Pieces",
  "High Jewelry",
  "Engagement",
  "Rings",
  "Necklaces",
  "Earrings",
  "Bracelets",
  "Watches",
];

export function getProductBySlug(slug) {
  return PRODUCTS.find((product) => product.slug === slug) ?? null;
}

export function getProductById(id) {
  return PRODUCTS.find((product) => product.id === Number(id)) ?? null;
}

export function getProductsByCollection(collectionSlug) {
  return PRODUCTS.filter((product) => product.collectionSlug === collectionSlug);
}

export function getProductsByCategory(category) {
  if (!category || category === "All Pieces") return PRODUCTS;
  return PRODUCTS.filter((product) => product.category === category);
}

export function getRelatedProducts(slug, limit = 4) {
  const product = getProductBySlug(slug);
  if (!product) return PRODUCTS.slice(0, limit);

  return PRODUCTS.filter(
    (entry) => entry.slug !== slug && entry.collectionSlug === product.collectionSlug
  ).slice(0, limit);
}

export function getAllProductSlugs() {
  return PRODUCTS.map((product) => product.slug);
}
