import Cookies from "js-cookie";

interface GetCookieOptions {
  cookieName: string;
  req?: any;
}

export const GetCookie = ({
  cookieName,
  req,
}: GetCookieOptions): string | null => {
  if (typeof window !== "undefined") {
    // Cliente (navegador)
    return Cookies.get(cookieName) || null;
  } else if (req) {
    // Servidor (Next.js API routes o server actions)
    const cookieHeader = req.headers?.cookie || "";
    const cookies = Object.fromEntries(
      cookieHeader.split("; ").map((c) => {
        const [key, ...v] = c.trim().split("=");
        return [key, v.join("=")];
      })
    );
    return cookies[cookieName] || null;
  }
  return null;
};
