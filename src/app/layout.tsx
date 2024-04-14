import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flower Courses",
  description: "Website for buy of Courses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	console.log('inter',inter.className)
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
