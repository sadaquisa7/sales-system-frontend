import { BaseService } from "@/services/base/base.service";
import { Method } from "@interfaces/services/security/permissions.interface";
class MethodsService extends BaseService<Method> {
  constructor() {
    super("/methods");
  }
}
export const methodsService = new MethodsService();
