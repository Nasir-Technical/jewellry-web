export const WHOLESALE_QUOTES = [
  {
    id: "QT-2026-1042",
    date: "2026-03-01",
    status: "Pending",
    validUntil: "2026-03-15",
    totalEstimate: 820800,
    items: [
      { id: "AU-24K-882", type: "Gold Bullion", quantity: "12kg", unitPrice: 68420 },
      { id: "EM-ZM-102", type: "Emerald Lot", quantity: "1 lot", unitPrice: 420000 },
    ],
    notes: "Priority allocation requested for Q2 production cycle.",
  },
  {
    id: "QT-2026-0987",
    date: "2026-02-18",
    status: "Approved",
    validUntil: "2026-03-04",
    totalEstimate: 124000,
    items: [{ id: "DM-RD-441", type: "Raw Diamonds", quantity: "45ct", unitPrice: 124000 }],
    notes: "Approved at locked rate. Proceed to order within validity window.",
  },
  {
    id: "QT-2026-0812",
    date: "2026-01-30",
    status: "Expired",
    validUntil: "2026-02-13",
    totalEstimate: 160500,
    items: [{ id: "PT-950-33", type: "Platinum Grain", quantity: "5kg", unitPrice: 32100 }],
    notes: "Quote expired. Request re-pricing for current market conditions.",
  },
  {
    id: "QT-2026-0744",
    date: "2026-01-12",
    status: "Declined",
    validUntil: "2026-01-26",
    totalEstimate: 195000,
    items: [{ id: "SA-BL-903", type: "Sapphire Lot", quantity: "1 lot", unitPrice: 195000 }],
    notes: "Material reserved for maison production. Alternative lot suggested.",
  },
];

export const QUOTE_STATUS_VARIANT = {
  Pending: "warning",
  Approved: "success",
  Expired: "default",
  Declined: "default",
};
