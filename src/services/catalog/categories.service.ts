import { BaseService } from "@/services/base/base.service";
import { Category, CreateOrUpdateCategoryDto } from "@interfaces/services/catalog/categories.interface";

class CategoriesService extends BaseService<Category, CreateOrUpdateCategoryDto> {
  constructor() {
    super("/categories");
  }
}

export const categoriesService = new CategoriesService();
