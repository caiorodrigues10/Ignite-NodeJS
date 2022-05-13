import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListCategoriesUseCase } from './ListCategoriesUseCase';

class ListCategoryController {
  async handle(req: Request, res: Response): Promise<Response> {
    const listCategoriesUseCase = container.resolve(ListCategoriesUseCase);

    const all = await listCategoriesUseCase.excute();
    return res.json(all);
  }
}

export { ListCategoryController };
