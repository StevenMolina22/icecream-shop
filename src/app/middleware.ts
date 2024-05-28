import db, { pb } from "@/lib/pocketbase";

import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  console.log("middleware");
  // look if user is authenticated
  const isLoggedIn = await db.isAuthenticated(request.cookies as any);
  if (
    request.nextUrl.pathname &&
    request.nextUrl.pathname.startsWith("/auth")
  ) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return;
  }

  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static)_next/image|favicon.ico).*)"],
};
