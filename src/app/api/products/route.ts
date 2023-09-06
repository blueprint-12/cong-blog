import { getProducts } from "@/service/products";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const products = await getProducts();
  // products: products 라서 아래처럼 생략
  return NextResponse.json({ products });
}
