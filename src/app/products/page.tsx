import React from "react";
import Link from "next/link";
import { getProducts } from "@/service/products";
import MeowArticle from "@/components/MeowArticle";
import Image from "next/image";
import clothesImage from "public/images/clothes.jpg";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <h2>Products</h2>
      <Image src={clothesImage} alt="Clothes" />
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
