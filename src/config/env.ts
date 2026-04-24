export const ENV = {
  APP_ENV: process.env.NEXT_PUBLIC_APP_ENV || "local",
  APP_URL: process.env.NEXT_PUBLIC_APP_URL || "",
  API_SALES: process.env.NEXT_PUBLIC_API_SALES || "",
  API_SALES_INTERNAL: process.env.API_SALES_INTERNAL || process.env.NEXT_PUBLIC_API_SALES || "",
  COOKIE_NAME_SESSION: process.env.NEXT_PUBLIC_COOKIE_NAME_SESSION || "access_token",
  IDLE_MINUTES: Number(process.env.NEXT_PUBLIC_IDLE_MINUTES) || 15,
  IDLE_WARNING_MINUTES: Number(process.env.NEXT_PUBLIC_IDLE_WARNING_MINUTES) || 2,
};
