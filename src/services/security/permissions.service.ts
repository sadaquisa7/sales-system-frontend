import { BaseService } from "@/services/base/base.service";
import {
  Permission,
  CreateOrUpdatePermissionDto,
} from "@interfaces/services/security/permissions.interface";
class PermissionsService extends BaseService<
  Permission,
  CreateOrUpdatePermissionDto
> {
  constructor() {
    super("/permissions");
  }
}

export const permissionsService = new PermissionsService();
