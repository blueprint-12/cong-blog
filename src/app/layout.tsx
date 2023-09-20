import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

export const open_sans = Open_Sans({
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
    <html lang="en" className={open_sans.className}>
      <body className="">
        <header className=""></header>
        {children}
        <footer className=""></footer>
      </body>
    </html>
  );
}
