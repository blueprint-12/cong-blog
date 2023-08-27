import React from "react";
import styles from "./layout.module.css";

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav className={styles.nav}>
        <a href="">woman</a>
        <a href="">man</a>
      </nav>
      <section className={styles.product}>{children}</section>
    </>
  );
}
