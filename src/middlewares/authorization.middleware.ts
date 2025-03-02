import { NextRequest, NextResponse } from "next/server";

export function authorizationMiddleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  console.log("Autorización validada para:", pathname);
  return NextResponse.next();
}
