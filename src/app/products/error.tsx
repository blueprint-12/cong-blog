"use client";

import { useEffect } from "react";

type Props = {
  error: Error;
  reset: () => void;
};

export default function ProductsError({
  error, // 에러 정보
  reset, // 리셋할 수 있는 함수
}: Props) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
