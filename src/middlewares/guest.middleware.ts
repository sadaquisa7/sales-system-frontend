import { Response } from "@/interfaces/middlewares/middleware.interface";
import { authService } from "@/services/auth/auth.service";

export async function guestMiddleware(pathname: string, sessionToken?: string) {
  let res: Response = {
    status: false,
    redirect: "/",
  };
  if (sessionToken) {
    console.log("Usuario autenticado. Redirigiendo a /");
    const { status, data } = await authService.me(pathname, sessionToken);
    console.log("Verificando la session token ==> ", status);
    if (status && data) {
      res.data = data;
      res.status = true;
    }
  }
  return res;
}
