import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ListCategoryController } from './ListCategoriesController';
import { ListCategoriesUseCase } from './ListCategoriesUseCase';

const listCategoriesRepository = CategoriesRepository.getInstance();

const listCategoriesUseCase = new ListCategoriesUseCase(
  listCategoriesRepository,
);

const listCategoryController = new ListCategoryController(
  listCategoriesUseCase,
);

export { listCategoryController };
