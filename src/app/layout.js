import { Playfair_Display, Cormorant_Garamond, Poppins } from "next/font/google";
import AppProviders from "@/providers/AppProviders";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "AURELIA | Luxury High-End Jewelry",
    template: "%s | AURELIA",
  },
  description:
    "Exquisite high-end jewelry and raw materials for the discerning collector.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-matte-black text-white selection:bg-gold-500 selection:text-black">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
