import { Metadata } from "next";
import React from "react";
import { typesOfItem } from "@/app/shared/const";
import { getProduct } from "@/service/products";
import { notFound } from "next/navigation";
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
    notFound();
  }

  //서버 파일에 있는 데이터 중 해당 제품의 정보를 찾아서 그걸 보여준다.
  return <div>{product.name} DetailPage</div>;
}

// 모든 제품의 디테일 페이지를 미리 만들어둠(SSG)
//? generateStaticParams도 비동기 함수처리 가능
export async function generateStaticParams() {
  return typesOfItem.map((itemName) => ({ item: itemName }));
}
