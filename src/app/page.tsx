import { Counter } from "@/components/Counter";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-4 pt-2">
      <Image
        src="https://images.unsplash.com/photo-1441986300917-64674bd600d8"
        alt="외부 이미지"
        width={400}
        height={400}
      />
      <h1>여기는 홈페이지 </h1>
      <Counter />
    </main>
  );
}
