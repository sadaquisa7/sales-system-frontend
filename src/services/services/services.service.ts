import { BaseService } from "@/services/base/base.service";
import { Service, CreateOrUpdateServiceDto } from "@interfaces/services/services/services.interface";

class ServicesService extends BaseService<Service, CreateOrUpdateServiceDto> {
  constructor() {
    super("/services");
  }
}

export const servicesService = new ServicesService();
