import { BaseService } from "@/services/base/base.service";
import {
  User,
  CreateOrUpdateUserDto,
} from "@/interfaces/services/security/users.interface";
class UsersService extends BaseService<User, CreateOrUpdateUserDto> {
  constructor() {
    super("/users");
  }
}

export const usersService = new UsersService();
