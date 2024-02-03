import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  console.log("middlware:  ", request.url);
  console.log("middleare next: ", request.nextUrl);
  console.log("clone in middleware: ", request.nextUrl.clone());

  const isAuth = request.cookies.get("isAuthenticated")?.value;

  const publicRoutesNoAuth = ["/signup", "/login"];
  const publicRouteAndAuth = ["/"];

  if (request.nextUrl.pathname === "/signup/otp") {
  } else {
    if (publicRoutesNoAuth.includes(request.nextUrl.pathname)) {
      console.log("public route");
    } else if (publicRouteAndAuth.includes(request.nextUrl.pathname)) {
      console.log("public route and auth");
    } else {
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
