import { Toaster } from "react-hot-toast";
import { ROBOTO_CLASS } from "./font";
import { TopMarquee } from "./core/shared/components/atoms";
import { Footer } from "./core/shared/components/molecules";
import { Header } from "./core/shared/components/organisms";

import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ROBOTO_CLASS} antialiased flex flex-col`}>
        <TopMarquee />
        <Header />
        <div className="flex-1 min-h-dvh">{children}</div>
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
