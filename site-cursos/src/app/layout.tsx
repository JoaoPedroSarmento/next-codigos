import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "@/app/globals.css"
const openSans = Open_Sans({
  weight: "300",
  subsets: ["cyrillic"]
});

 

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
