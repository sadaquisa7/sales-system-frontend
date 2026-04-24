import { BaseService } from "@/services/base/base.service";
import { Menu, CreateOrUpdateMenuDto } from "@interfaces/services/menus/menus.interface";

class MenusService extends BaseService<Menu, CreateOrUpdateMenuDto> {
  constructor() {
    super("/menus");
  }
}

export const menusService = new MenusService();
