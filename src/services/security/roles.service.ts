import { BaseService } from "@/services/base/base.service";
import {
  Role,
  CreateOrUpdateRoleDto,
} from "@interfaces/services/security/roles.interface";
class RolesService extends BaseService<Role, CreateOrUpdateRoleDto> {
  constructor() {
    super("/roles");
  }
}

export const rolesService = new RolesService();
