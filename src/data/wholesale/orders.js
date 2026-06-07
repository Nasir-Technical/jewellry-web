export const WHOLESALE_ORDERS = [
  {
    id: "WS-2026-0551",
    date: "2026-02-20",
    status: "In Transit",
    total: 160500,
    items: [
      {
        id: "PT-950-33",
        type: "Platinum Grain",
        quantity: "5kg",
        unitPrice: 32100,
        subtotal: 160500,
      },
    ],
    shipping: {
      method: "Armored Courier",
      origin: "Johannesburg Vault",
      destination: "Lyon Atelier, France",
      tracking: "AUR-ARM-990214",
      eta: "2026-03-08",
    },
  },
  {
    id: "WS-2026-0488",
    date: "2026-02-03",
    status: "Delivered",
    total: 820800,
    items: [
      {
        id: "AU-24K-882",
        type: "Gold Bullion",
        quantity: "12kg",
        unitPrice: 68420,
        subtotal: 821040,
      },
    ],
    shipping: {
      method: "Insured Air Freight",
      origin: "Zürich Vault",
      destination: "Lyon Atelier, France",
      tracking: "AUR-AIR-881902",
      eta: "2026-02-07",
    },
  },
  {
    id: "WS-2026-0312",
    date: "2026-01-15",
    status: "Processing",
    total: 285000,
    items: [
      {
        id: "RU-SP-229",
        type: "Ruby Lot",
        quantity: "1 lot",
        unitPrice: 285000,
        subtotal: 285000,
      },
    ],
    shipping: {
      method: "Secure Escort",
      origin: "Maputo Sorting House",
      destination: "Lyon Atelier, France",
      tracking: "Pending",
      eta: "2026-03-12",
    },
  },
  {
    id: "WS-2025-1190",
    date: "2025-12-08",
    status: "Delivered",
    total: 124000,
    items: [
      {
        id: "DM-RD-441",
        type: "Raw Diamonds",
        quantity: "45ct",
        unitPrice: 124000,
        subtotal: 124000,
      },
    ],
    shipping: {
      method: "Insured Air Freight",
      origin: "Gaborone Export",
      destination: "Lyon Atelier, France",
      tracking: "AUR-AIR-771208",
      eta: "2025-12-14",
    },
  },
];

export const WHOLESALE_ORDER_STATUS_VARIANT = {
  Processing: "warning",
  "In Transit": "info",
  Delivered: "success",
  Cancelled: "default",
};

export const PROCUREMENT_HISTORY = [
  { batch: "Batch #902", material: "Platinum 950 Grain", date: "Oct 24, 2025", amount: 160500 },
  { batch: "Batch #891", material: "Gold Bullion 24K", date: "Sep 12, 2025", amount: 821040 },
  { batch: "Batch #877", material: "Raw Diamond Lot", date: "Aug 03, 2025", amount: 124000 },
];
