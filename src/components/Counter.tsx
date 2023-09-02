"use client";

import { useState } from "react";

export const Counter = () => {
  console.log("여기는 클라이언트야!");
  const [num, setNum] = useState<number>(0);
  return (
    <div>
      <div>Count : {num}</div>
      <button onClick={() => setNum((prev) => prev + 1)}>+</button>
    </div>
  );
};
