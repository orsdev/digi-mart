import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";

import "./globals.css";
import { ROBOTO_CLASS } from "./font";
import { Navbar, TopMarquee } from "./core/shared/components/atoms";

export const metadata: Metadata = {
  title: "Digi Mart – Your One-Stop Shop for Fashion, Tech, and More!",
  description:
    "Discover the latest trends in clothing, electronics, and footwear at Digi Mart! Enjoy fast shipping, great deals, and premium quality. Shop now for the best prices!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ROBOTO_CLASS} antialiased`}>
        <TopMarquee />
        <Navbar />
        {children}
        <Toaster
          toastOptions={{
            duration: 6000,
          }}
        />
      </body>
    </html>
  );
}
