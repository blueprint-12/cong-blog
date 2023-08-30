import Link from "next/link";
import "./globals.css";
import styles from "./layout.module.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cong Blog",
  description: "SEO test",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className={styles.header}>
          <h1>Demo Note</h1>
          <nav className={styles.nav}>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/products">Product</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
