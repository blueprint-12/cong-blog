import React from "react";
import Link from "next/link";
import { getProducts } from "@/service/products";
import MeowArticle from "@/components/MeowArticle";

// export const revalidate = 3;

export default async function ProductsPage() {
  const products = await getProducts();

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
      <MeowArticle />
    </div>
  );
}
