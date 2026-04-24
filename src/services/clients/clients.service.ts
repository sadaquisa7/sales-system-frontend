import { BaseService } from "@/services/base/base.service";
import { Client, CreateOrUpdateClientDto } from "@interfaces/services/clients/clients.interface";

class ClientsService extends BaseService<Client, CreateOrUpdateClientDto> {
  constructor() {
    super("/clients");
  }
}

export const clientsService = new ClientsService();
