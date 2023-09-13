import { NextRequest, NextResponse } from "next/server";
let resCount = 0;
export function middleware(request: NextRequest) {
  // 전체 페이지를 대상으로 돌아가는 미들웨어
  console.log("미들웨어가 실행되고 있음 체크중 @@", resCount);
  if (request.nextUrl.pathname.startsWith("/products/1004")) {
    console.log("@@ 미들웨어 경로 리다이렉트 @@");
    // new URL(path, baseURL)
    // ? 아래코드는 기존 경로(request.url)에서 products로 보내겠다.
    return NextResponse.redirect(new URL("/products", request.url));
  }
  resCount++;
}

export const config = {
  matcher: ["/products/:path+"],
};
