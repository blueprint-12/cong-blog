import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { typesOfPants } from "@/app/shared/const";

type Props = {
  params: {
    slug: string;
  };
};

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

export default function PantsDetailPage({ params }: Props) {
  if (!typesOfPants.includes(params.slug)) {
    notFound();
  }
  return <div>PantsDetail + {params.slug}pants</div>;
}

export function generateStaticParams() {
  return typesOfPants.map((kind) => ({ slug: kind }));
}
