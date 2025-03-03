import { authenticationMiddleware } from "./middlewares/authentication.middleware";
import { authorizationMiddleware } from "./middlewares/authorization.middleware";
import { guestMiddleware } from "./middlewares/guest.middleware";
import { NextRequest, NextResponse } from "next/server";
import { generateUsername } from "@utils/auth/user.utils";
import { MeResponse } from "@interfaces/services/auth/me.interface";
import { CookieData } from "@/interfaces/middlewares/middleware.interface";

export async function middleware(request: NextRequest) {
  const { nextUrl, cookies } = request;
  const { pathname } = nextUrl;
  const sessionToken = cookies.get("session_token")?.value;
  if (pathname === "/login") {
    const { status, redirect } = await guestMiddleware(pathname, sessionToken);
    if (status) return redirectTo(redirect, request);
    return NextResponse.next();
  }
  const { status, redirect, data } = await authenticationMiddleware(
    pathname,
    sessionToken
  );
  if (status) return redirectTo(redirect, request);

  if (pathname !== "/") {
    const { status, redirect } = authorizationMiddleware(pathname, data);
    if (status) return redirectTo(redirect, request);
  }

  const { user, menus, permissions } = data as MeResponse;

  const response = NextResponse.next();

  const cookieData: CookieData = {
    user: {
      ...generateUsername(user.first_name, user.last_name),
      email: user.email,
    },
    menus,
    permissions,
  };

  return setResponseCookies(response, cookieData);
}

const redirectTo = (redirect: string, request: NextRequest): NextResponse => {
  return NextResponse.redirect(new URL(redirect, request.url));
};

const setResponseCookies = (
  response: NextResponse,
  cookieData: CookieData,
  cookieOptions: { path: string } = { path: "/" }
): NextResponse => {
  Object.entries(cookieData).forEach(([key, value]) => {
    response.cookies.set(key, JSON.stringify(value), cookieOptions);
  });

  return response;
};

// Opcional: Configurar las rutas donde se aplica el middleware
export const config = {
  matcher: ["/((?!_next|static|favicon.ico).*)"],
};
