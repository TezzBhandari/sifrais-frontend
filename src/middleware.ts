import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log("middlware:  ", request.url, request.nextUrl);
  console.log("clone in middleware: ", request.nextUrl.clone());
  return NextResponse.redirect(new URL("/signup", request.url));
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: "/",
// };

// custom code
export const config = {
  matcher: ["/"],
};
