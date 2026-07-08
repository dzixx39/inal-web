import "./globals.css";
import { CartProvider } from "@/components/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

export const metadata = {
  title: "INAL Electric — Industrijski dijelovi i mjerno-regulaciona oprema",
  description:
    "Prodaja industrijskih dijelova, mjerno-regulacione opreme, instalacija i upravljanje industrijskim postrojenjima.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="bs">
      <body>
        <CartProvider>
          <Header />
          {children}
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
