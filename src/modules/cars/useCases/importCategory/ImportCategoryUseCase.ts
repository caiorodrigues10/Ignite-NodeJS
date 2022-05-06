import { parse } from 'csv-parse';
import fs from 'fs';

import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IImportCategory {
  name: string;
  description: string;
}

class ImportCategoryUseCase {
  constructor(private categoriesRepostory: ICategoriesRepository) {}

  loadCategories(file: Express.Multer.File) {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategory[] = [];

      const parseFile = parse();

      stream.pipe(parseFile);

      parseFile
        .on('data', async line => {
          const [name, description] = line;
          categories.push({
            name,
            description,
          });
        })
        .on('end', () => {
          resolve(categories);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = this.loadCategories(file);
    console.log(categories);
  }
}

export { ImportCategoryUseCase };