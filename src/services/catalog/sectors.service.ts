import { BaseService } from "@/services/base/base.service";
import { Sector, CreateOrUpdateSectorDto } from "@interfaces/services/catalog/sectors.interface";

class SectorsService extends BaseService<Sector, CreateOrUpdateSectorDto> {
  constructor() {
    super("/sectors");
  }
}

export const sectorsService = new SectorsService();
