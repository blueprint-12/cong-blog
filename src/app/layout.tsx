import Link from "next/link";
import "./globals.css";
import styles from "./layout.module.css";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";

// ? next 폰트 사용법
// variable font를 제공하는 경우에는 weight를 지정하지 않아도 된다.
// 전체에 className을 줘도되고 부분 별로 className을 줘도 된다.
// page 컴포넌트보다는 최상위인 layout에 font를 적용하는 게 좋다.

export const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
});

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
    <html lang="en" className={roboto_mono.className}>
      <body className={roboto_mono.className}>
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
