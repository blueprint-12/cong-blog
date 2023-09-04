import React from "react";
import Link from "next/link";
import { getProducts } from "@/service/products";
import styles from "./page.module.css";

// export const revalidate = 3;

export default async function ProductsPage() {
  const products = await getProducts();
  const res = await fetch("https://meowfacts.herokuapp.com", {
    next: { revalidate: 0 },
  });
  const data = await res.json();
  const factText = data.data[0];
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(({ id, name }, index) => (
          <li key={index} style={{ listStyle: "none" }}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <article className={styles.article}>{factText}</article>
    </div>
  );
}
