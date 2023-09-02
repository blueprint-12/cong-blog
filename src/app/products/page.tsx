import React from "react";
import { typesOfItem } from "../shared/const";
import Link from "next/link";
import { getProducts } from "@/service/products";

export const revalidate = 3;

export default async function ProductsPage() {
  //서버 파일(DB)에 있는 제품의 리스트를 읽어와서, 그걸 보여준다.
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
    </div>
  );
}
