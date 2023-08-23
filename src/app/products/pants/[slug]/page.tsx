import React from "react";
type Props = {
  params: {
    slug: string;
  };
};

export default function PantsDetailPage({ params }: Props) {
  return <div>PantsDetail + {params.slug}pants</div>;
}

export function generateStaticParams() {
  const typesOfPants = [
    "sexy",
    "gentle",
    "unique",
    "whatever",
    "dark",
    "sunshine",
  ];
  return typesOfPants.map((kind) => ({ slug: kind }));
}
