import { MeResponse } from "@interfaces/services/auth/me.interface";

export interface Response {
  status: boolean;
  redirect: string;
  data?: MeResponse;
}

export interface CookieData {
  [key: string]: unknown;
}
