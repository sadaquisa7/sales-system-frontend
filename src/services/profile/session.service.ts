import salesApi from "@libs/axios/salesApi.lib";
import { ApiResponse } from "@interfaces/axios/axio.interface";
import { Session } from "@interfaces/services/profile/config.interface";
import { QueryParams } from "@interfaces/components/form/tables/dataTable.interface";
const baseUrl = "/sessions";

export const sessionsService = {
  list: async (params?: QueryParams): Promise<ApiResponse<Session>> => {
    const response: ApiResponse<Session> = await salesApi.get<
      Session,
      QueryParams
    >(`${baseUrl}/list`, params);
    return response;
  },
};
