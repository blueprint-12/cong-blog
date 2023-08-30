import { Metadata } from "next";
import React from "react";
import { typesOfItem } from "@/app/shared/const";
type Props = {
  params: {
    item: string;
  };
};

// ? 동적인 메타 데이터를 만들 떄, 내부에서 비동기 작업을 하지 않는다면 비동기함수(async 키워드)로 만들어 줄 필요없음
export function generateMetadata({ params }: Props): Metadata {
  return {
    title: `제품의 이름: ${params.item}`,
  };
}

export default function ProductItemDetailPage({ params }: Props) {
  return <div>{params.item} DetailPage</div>;
}

export function generateStaticParams() {
  return typesOfItem.map((itemName) => ({ item: itemName }));
}
