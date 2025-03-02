import { NextRequest, NextResponse } from "next/server";

export function authenticationMiddleware(
  request: NextRequest,
  sessionToken?: string
) {
  if (!sessionToken) {
    console.log("No autenticado. Redirigiendo a /login");
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}
