import { url } from "inspector";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log(request.nextUrl);

  const isAuth = request.cookies.get("isAuthenticated")?.value;

  const publicRoutesNoAuth = ["/signup", "/login"];
  const publicRouteAndAuth = ["/"];

  if (publicRoutesNoAuth.includes(request.nextUrl.pathname)) {
    if (isAuth === "true") {
      console.log("yo you already login ", request.nextUrl);
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  if (request.nextUrl.pathname === "/signup/otp") {
  } else {
    if (publicRoutesNoAuth.includes(request.nextUrl.pathname)) {
      console.log("public route", request.url);
    } else if (publicRouteAndAuth.includes(request.nextUrl.pathname)) {
      console.log("public route and auth", request.url);
    } else {
      if (isAuth === undefined) {
        return NextResponse.redirect(new URL("/", request.url));
      }
      if (!(isAuth === "true")) {
        return NextResponse.redirect(new URL("/", request.url));
      }
    }
  }

  //   return NextResponse.redirect(new URL("/admin/dashboard", request.url));
}

// See "Matching Paths" below to learn more
// export const config = {
//   matcher: "/",
// };

// custom code
export const config = {
  // matcher: ["/admin"],
  matcher: [
    {
      source: "/((?!api|_next/static|_next/image|favicon.ico).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    // "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
