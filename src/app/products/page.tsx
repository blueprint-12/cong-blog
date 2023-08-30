import React from "react";
import { typesOfItem } from "../shared/const";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <div>
      <h2>Products</h2>
      <ul>
        {typesOfItem.map((item, index) => (
          <li key={index} style={{ listStyle: "none" }}>
            <Link href={`/products/${item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
