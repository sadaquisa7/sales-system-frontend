import { BaseService } from "@/services/base/base.service";
import { Session } from "@interfaces/services/profile/config.interface";
class SessionsService extends BaseService<Session> {
  constructor() {
    super("/sessions");
  }
}

export const sessionsService = new SessionsService();
