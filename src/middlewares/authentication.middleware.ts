import { authService } from "@/services/auth/auth.service";
import { Response } from "@/interfaces/middlewares/middleware.interface";

export async function authenticationMiddleware(
  pathname: string,
  sessionToken?: string
) {
  const res: Response = {
    status: true,
    redirect: "/login",
  };
  if (!sessionToken) {
    console.log("No autenticado. Redirigiendo a /login");
  } else {
    const { status, data } = await authService.me(pathname, sessionToken);
    if (status && data && !("items" in data)) {
      res.data = data;
      res.status = false;
    }
  }
  return res;
}
