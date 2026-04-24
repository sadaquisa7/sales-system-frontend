import { createHttpClient } from "./base.lib";
import { ENV } from "@/config/env";

export const configApiClient = createHttpClient(ENV.API_SALES_INTERNAL);

export default configApiClient;
