import { BaseService } from "@/services/base/base.service";
import { Product, CreateOrUpdateProductDto } from "@interfaces/services/products/products.interface";

class ProductsService extends BaseService<Product, CreateOrUpdateProductDto> {
  constructor() {
    super("/products");
  }
}

export const productsService = new ProductsService();
