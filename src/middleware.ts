import { authenticationMiddleware } from "./middlewares/authentication.middleware";
import { authorizationMiddleware } from "./middlewares/authorization.middleware";
import { guestMiddleware } from "./middlewares/guest.middleware";
import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const { nextUrl, cookies } = request;
  const { pathname } = nextUrl;
  const sessionToken = cookies.get("session_token")?.value;

  if (pathname === "/login") {
    return guestMiddleware(request, sessionToken);
  }
  const authResponse = authenticationMiddleware(request, sessionToken);
  if (authResponse.status !== 200) return authResponse;
  if (pathname !== "/") {
    return authorizationMiddleware(request);
  }

  return NextResponse.next();
}

// Opcional: Configurar las rutas donde se aplica el middleware
export const config = {
  matcher: ["/((?!_next|static|favicon.ico).*)"],
};
