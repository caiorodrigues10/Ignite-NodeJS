import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';
import { ImportCategoryController } from '../modules/cars/useCases/importCategory/importCategoryController';
import { ListCategoryController } from '../modules/cars/useCases/listCategoriesController/ListCategoriesController';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

const createCategoryCoantroller = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoryController = new ListCategoryController();

categoriesRoutes.post('/', createCategoryCoantroller.handle);

categoriesRoutes.get('/', listCategoryController.handle);

categoriesRoutes.post(
  '/import',
  upload.single('file'),
  importCategoryController.handle,
);

export { categoriesRoutes };
