import salesApi from "@libs/axios/salesApi.lib";
import salesApiFetch from "@libs/fetch/salesApi.lib";
import { ApiResponse } from "@interfaces/axios/axio.interface";
import {
  LoginRequest,
  LoginResponse,
} from "@interfaces/services/auth/login.interface";
import { MeResponse } from "@interfaces/services/auth/me.interface";
const baseUrl = "/auth";

export const authService = {
  login: async (
    credentials: LoginRequest
  ): Promise<ApiResponse<LoginResponse>> => {
    const response: ApiResponse<LoginResponse> = await salesApi.post<
      LoginRequest,
      LoginResponse
    >(`${baseUrl}/login`, credentials);
    return response;
  },

  me: async (
    pathname: string,
    token?: string
  ): Promise<ApiResponse<MeResponse>> => {
    const headers: HeadersInit = {
      Authorization: token ? `Bearer ${token}` : "",
    };
    const response: ApiResponse<MeResponse> =
      await salesApiFetch.get<MeResponse>(
        `${baseUrl}/me`,
        { pathname },
        headers
      );
    return response;
  },

  logout: async (): Promise<ApiResponse> => {
    const response: ApiResponse = await salesApi.get(`${baseUrl}/logout`);
    return response;
  },

  refreshToken: async (): Promise<ApiResponse<LoginResponse>> => {
    const response: ApiResponse<LoginResponse> = await salesApi.get(
      `${baseUrl}/refresh-token`
    );
    return response;
  },
};
