import { NextRequest, NextResponse } from "next/server";

export function guestMiddleware(request: NextRequest, sessionToken?: string) {
  if (sessionToken) {
    console.log("Usuario autenticado. Redirigiendo a /");
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}
