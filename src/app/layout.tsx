import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/Components/Header/Index";

export const metadata: Metadata = {
  title: "Multiverso Aprender",
  description: "Site feito pela Multiverso Aprender",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
