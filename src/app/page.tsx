import { Counter } from "@/components/Counter";
import styles from "./page.module.css";
import os from "os";
export default function Home() {
  console.log("여기는 서버단이야");
  console.log(os.hostname());
  return (
    <main className={styles.main}>
      <h1>여기는 홈페이지 </h1>
      <Counter />
    </main>
  );
}
