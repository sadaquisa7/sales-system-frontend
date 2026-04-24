import { BaseService } from "@/services/base/base.service";
import { Unit, CreateOrUpdateUnitDto } from "@interfaces/services/catalog/units.interface";

class UnitsService extends BaseService<Unit, CreateOrUpdateUnitDto> {
  constructor() {
    super("/units");
  }
}

export const unitsService = new UnitsService();
