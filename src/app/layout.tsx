import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/Components/Header/Index";
import { Copyright } from "@/Components/Copyright/Index";

export const metadata: Metadata = {
  title: "Link gaabcraft",
  description: "Site criado por gaabcraft",
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
        <Copyright />
      </body>
    </html>
  );
}
