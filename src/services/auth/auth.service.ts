import salesApi from "@libs/axios/salesApi.lib";
import { ApiResponse } from "@interfaces/axios/axio.interface";
import {
  LoginRequest,
  LoginResponse,
} from "@interfaces/services/login/login.interface";

const baseUrl = "/auth";

export const loginService = {
  login: async (
    credentials: LoginRequest
  ): Promise<ApiResponse<LoginResponse>> => {
    const response: ApiResponse<LoginResponse> = await salesApi.post<
      LoginRequest,
      LoginResponse
    >(`${baseUrl}/login`, credentials);
    return response;
  },
};
