import { Counter } from "@/components/Counter";
import styles from "./page.module.css";
import os from "os";
import Image from "next/image";
export default function Home() {
  console.log("여기는 서버단이야");
  console.log(os.hostname());
  return (
    <main className={styles.main}>
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
