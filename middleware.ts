import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/profile", "/playground"];

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  // Check if the current route is protected
  if (protectedRoutes.some((route) => url.pathname.startsWith(route))) {
    const accessToken = req.cookies.get("access_token");

    // If no access token, redirect to login page
    if (!accessToken) {
      url.pathname = "/auth/signin"; // Redirect to login page
      return NextResponse.redirect(url);
    }
  }

  // Allow request to proceed
  return NextResponse.next();
}

// Match all routes for middleware
export const config = {
  matcher: ["/((?!api|_next|static|favicon.ico).*)"], // Exclude certain paths
};
