import { Metadata } from "next";
import React from "react";
import { typesOfItem } from "@/app/shared/const";
import { getProduct } from "@/service/products";
import { notFound, redirect } from "next/navigation";
import Image from "next/image";
import GoProductsBtn from "@/components/GoProductsBtn";
type Props = {
  params: {
    item: string;
  };
};

export const revalidate = 3;

export function generateMetadata({ params: { item } }: Props): Metadata {
  return {
    title: `제품의 이름: ${item}`,
  };
}

export default async function ProductItemDetailPage({
  params: { item },
}: Props) {
  const product = await getProduct(item);

  if (!product) {
    redirect("/products");
  }

  return (
    <>
      <div>{product.name} DetailPage</div>
      <Image
        priority={true}
        src={`/images/${product.imageUrl}`}
        alt={product.name}
        width={300}
        height={300}
      />
      <GoProductsBtn />
    </>
  );
}

// 모든 제품의 디테일 페이지를 미리 만들어둠(SSG)
//? generateStaticParams도 비동기 함수처리 가능
export async function generateStaticParams() {
  return typesOfItem.map((itemName) => ({ item: itemName }));
}
