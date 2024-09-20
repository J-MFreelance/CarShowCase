import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Car J&MRent",
  description: "Discover the best cars in the world. J&MRent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className='relative'
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
