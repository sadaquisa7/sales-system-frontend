import { BaseService } from "@/services/base/base.service";
import { Inventory, CreateInventoryDto } from "@interfaces/services/inventory/inventory.interface";

class InventoryService extends BaseService<Inventory, CreateInventoryDto> {
  constructor() {
    super("/inventories");
  }
}

export const inventoryService = new InventoryService();
