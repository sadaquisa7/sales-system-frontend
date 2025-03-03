import { Response } from "@/interfaces/middlewares/middleware.interface";
import { MeResponse } from "@interfaces/services/auth/me.interface";

export function authorizationMiddleware(pathname: string, data?: MeResponse) {
  let res: Response = {
    status: false,
    redirect: "/not-authorization",
  };
  console.log("Autorización validada para:", pathname);
  return res;
}
