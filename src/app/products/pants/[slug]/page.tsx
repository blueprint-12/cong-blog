import React from "react";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};
const typesOfPants = [
  "sexy",
  "gentle",
  "unique",
  "whatever",
  "dark",
  "sunshine",
];

export default function PantsDetailPage({ params }: Props) {
  if (!typesOfPants.includes(params.slug)) {
    notFound();
  }
  return <div>PantsDetail + {params.slug}pants</div>;
}

export function generateStaticParams() {
  return typesOfPants.map((kind) => ({ slug: kind }));
}
