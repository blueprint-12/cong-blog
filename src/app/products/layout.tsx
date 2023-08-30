import React from "react";
import styles from "./layout.module.css";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cong Blog | Products page",
  description: "리스트를 확인해보세요. from page.tsx",
};
export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className={styles.nav}>
        <Link href="/products/pants">Pants</Link>
        <Link href="/products/women">women</Link>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
}
