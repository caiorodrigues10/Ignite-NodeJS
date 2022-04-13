import { Request, Response } from 'express';

import { ListCategoriesUseCase } from './ListCategoriesUseCase';

class ListCategoryController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}

  handle(req: Request, res: Response): Response {
    const all = this.listCategoriesUseCase.excute();
    return res.json(all);
  }
}

export { ListCategoryController };
