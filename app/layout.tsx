import { Toaster } from "react-hot-toast";
import { ROBOTO_CLASS } from "./font";
import { TopMarquee } from "./core/shared/components/atoms";
import { Footer, Navbar } from "./core/shared/components/molecules";

import "./globals.css";

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
        <Footer />
        <Toaster
          toastOptions={{
            duration: 6000,
          }}
        />
      </body>
    </html>
  );
}
