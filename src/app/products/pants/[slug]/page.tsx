import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { typesOfPants } from "@/app/shared/const";
import { getProduct } from "@/service/products";
import { getProducts } from "./../../../../service/products";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 3;

export function generateMetadata({ params }: Props): Metadata {
  if (!typesOfPants.includes(params.slug)) {
    return {
      title: `Pants | no search result😢 `,
    };
  }
  return {
    title: `Pants | ${params.slug}`,
  };
}

export default async function PantsDetailPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);
  if (!product) {
    notFound();
  }
  return <div>PantsDetail + {product.name}pants</div>;
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({ slug: product.id }));
}
