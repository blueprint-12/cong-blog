"use client";
import { useEffect, useState } from "react";
import styles from "./MeowArticle.module.css";
import { error } from "console";

export default function MeowArticle() {
  const [text, setText] = useState("데이터 준비중...");
  useEffect(() => {
    fetch("https://meowfacts.herokuapp.com", {
      mode: "no-cors",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("데이터 불러오기 실패");
        }
        return res.json();
      })
      .then((data) => setText(data.data[0]))
      .catch((error) => {
        setText("데이터 불러오기 실패");
      });
  }, []);

  return <article className={styles.article}>{text}</article>;
}
