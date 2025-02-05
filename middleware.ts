import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getUserIDFromToken } from "./lib/utils";

const protectedRoutes = ["/playground", "/dashboard", "/image"];

function redirectToLogin(url: URL, nextPath: string) {
  const searchParams = new URLSearchParams();
  searchParams.set("next", nextPath);
  url.pathname = `/auth/signin`;
  url.search = searchParams.toString();
  return NextResponse.redirect(url);
}

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();

  // Check if the current route is protected
  if (protectedRoutes.some((route) => url.pathname.startsWith(route))) {
    const accessToken = req.cookies.get("token");

    // If no access token, redirect to login page
    if (!accessToken) {
      return redirectToLogin(url, url.pathname);
    }

    // Check if the access token is valid
    const userID = await getUserIDFromToken(accessToken.value);

    // If the user ID is not null, continue
    if (!userID) {
      return redirectToLogin(url, url.pathname);
    }
  }

  // redirect /dashboard to /dashboard/api-keys
  if (url.pathname === "/dashboard") {
    url.pathname = "/dashboard/api-keys";
    return NextResponse.redirect(url);
  }

  // Allow request to proceed
  return NextResponse.next();
}

// Match all routes for middleware
export const config = {
  matcher: ["/((?!api|_next|static|favicon.ico).*)"], // Exclude certain paths
};
