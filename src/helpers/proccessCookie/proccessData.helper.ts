import { cookies } from "next/headers";

export interface CookieMap {
  [key: string]: any;
}

export async function getAllCookies(): Promise<CookieMap> {
  const cookieStoreServer = await cookies();
  const allCookies: Record<string, any> = {};
  cookieStoreServer.getAll().forEach(({ name, value }) => {
    try {
      allCookies[name] = JSON.parse(value);
    } catch {
      allCookies[name] = value;
    }
  });
  return allCookies;
}
