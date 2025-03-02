import { createHttpClient } from "./base.lib"; // Reutilizamos la base
import Cookies from "js-cookie";

const BASE_URL = process.env.NEXT_PUBLIC_API_SALES || "";
const NAME_SESSION =
  process.env.NEXT_PUBLIC_COOKIE_NAME_SESSION || "session_token";

const token = Cookies.get(NAME_SESSION);

const headers: HeadersInit = {
  Authorization: token ? `Bearer ${token}` : "",
};

// Crear cliente HTTP con `fetch` y la base URL
export const configApiClient = createHttpClient(BASE_URL, headers);

export default configApiClient;
