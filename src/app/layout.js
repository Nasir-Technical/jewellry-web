import { Playfair_Display, Cormorant_Garamond, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata = {
  title: "AURELIA | Luxury High-End Jewelry",
  description: "Exquisite high-end jewelry and raw materials for the discerning collector.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${cormorant.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="bg-black text-white selection:bg-gold-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
