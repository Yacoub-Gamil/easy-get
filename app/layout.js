import "./globals.css";
import Header from "./_components/header/Header";
import Footer from "./_components/Footer";
import { CartContextProvider } from "./_context/CartContext";

export const metadata = {
  title: {
    template: "Easy-Get | %s",
    default: "Easy-Get | Shop Smarter",
  },
  description: "Your go-to place for smart, fast, and easy online shopping.",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased min-h-screen flex flex-col`}>
        <CartContextProvider>
          <Header />
          <main className=" flex-1 container mx-auto">{children}</main>
          <Footer />
        </CartContextProvider>
      </body>
    </html>
  );
}
