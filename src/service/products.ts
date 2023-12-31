import path from "path";
import { promises as fs } from "fs";

export type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
};
// ? fs가 promise라 비동기함수로 만들어줘야 한다.
export async function getProducts(): Promise<Product[]> {
  const filePath = path.join(process.cwd(), "data", "products.json");
  const data = await fs.readFile(filePath, "utf-8");
  return JSON.parse(data); // json obj로 변환
}

export async function getProduct(id: string): Promise<Product | undefined> {
  const products = await getProducts();
  return products.find((item) => item.id === id);
}
