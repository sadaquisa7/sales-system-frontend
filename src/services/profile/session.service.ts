import { BaseService } from "@/services/base/base.service";
import { Session } from "@interfaces/services/profile/config.interface";

import salesApi from "@libs/axios/salesApi.lib";
import { ApiResponse } from "@interfaces/axios/axio.interface";
import { QueryParams } from "@interfaces/components/form/tables/dataTable.interface";
class SessionsService extends BaseService<Session> {
  constructor() {
    super("/sessions");
  }
  async listAll(params?: QueryParams): Promise<ApiResponse<Session>> {
    const response: ApiResponse<Session> = await salesApi.get<
      Session,
      QueryParams
    >(`/sessions/list-all`, params);
    return response;
  }
}

export const sessionsService = new SessionsService();
