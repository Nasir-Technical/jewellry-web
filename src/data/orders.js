export const MOCK_ORDERS = [
  {
    id: "AUR-2026-00842",
    date: "2026-02-14",
    status: "Delivered",
    total: 48600,
    items: [
      {
        id: 1,
        slug: "elysian-emerald-necklace",
        name: "Elysian Emerald Necklace",
        price: 45000,
        quantity: 1,
        image: "/images/product-necklace.png",
        category: "High Jewelry",
      },
    ],
    shipping: {
      method: "Insured White Glove",
      address: "12 Rue du Rhône, 1204 Geneva, Switzerland",
      tracking: "AUR-INS-8829104",
    },
  },
  {
    id: "AUR-2026-00719",
    date: "2026-01-08",
    status: "In Transit",
    total: 13824,
    items: [
      {
        id: 2,
        slug: "golden-solstice-ring",
        name: "Golden Solstice Ring",
        price: 12800,
        quantity: 1,
        image: "/images/collection-ring.png",
        category: "Engagement",
      },
    ],
    shipping: {
      method: "Insured Express",
      address: "45 Avenue Montaigne, 75008 Paris, France",
      tracking: "AUR-INS-7712048",
    },
  },
  {
    id: "AUR-2025-01903",
    date: "2025-11-22",
    status: "Delivered",
    total: 30780,
    items: [
      {
        id: 3,
        slug: "celestial-diamond-drops",
        name: "Celestial Diamond Drops",
        price: 28500,
        quantity: 1,
        image: "/images/hero.png",
        category: "Earrings",
      },
    ],
    shipping: {
      method: "Insured White Glove",
      address: "12 Rue du Rhône, 1204 Geneva, Switzerland",
      tracking: "AUR-INS-6601922",
    },
  },
];

export function getOrderById(id) {
  return MOCK_ORDERS.find((order) => order.id === id) ?? null;
}
