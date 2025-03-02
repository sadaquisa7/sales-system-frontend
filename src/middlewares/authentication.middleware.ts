import { NextRequest, NextResponse } from "next/server";
import { authService } from "@/services/auth/auth.service";
import { generateUsername } from "@utils/auth/user.utils";
export async function authenticationMiddleware(
  request: NextRequest,
  sessionToken?: string
) {
  if (!sessionToken) {
    console.log("No autenticado. Redirigiendo a /login");
    return NextResponse.redirect(new URL("/login", request.url));
  }
  const { status, data } = await authService.me(sessionToken);
  if (!status) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  const response = NextResponse.next();
  if (data) {
    const { user, menus, permissions } = data;
    response.cookies.set(
      "user",
      JSON.stringify({
        ...generateUsername(user.first_name, user.last_name),
        email: user.email,
      }),
      {
        path: "/", // Asegura que la cookie esté disponible en toda la app
      }
    );
    response.cookies.set("menus", JSON.stringify(menus), {
      path: "/",
    });
    response.cookies.set("permissions", JSON.stringify(permissions), {
      path: "/",
    });
  }
  return response;
}
