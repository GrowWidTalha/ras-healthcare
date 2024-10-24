import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/components/providers/CartContext";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <CartProvider>
        <Navbar />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </CartProvider>
    </div>
  );
}
