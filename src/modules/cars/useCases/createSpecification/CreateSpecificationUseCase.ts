import { ISpecificationsRepository } from '@modules/cars/repositories/ISpecificationsRepository';
import { inject, injectable } from 'tsyringe';

import { AppError } from '@shared/errors/AppError';

interface IRequest {
  name: string;
  description: string;
}
@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationRepository')
    private spectificationsRepository: ISpecificationsRepository,
  ) {}

  async execute({ name, description }: IRequest): Promise<void> {
    const SpecificationAlreadyExists =
      await this.spectificationsRepository.findByName(name);

    if (SpecificationAlreadyExists) {
      throw new AppError('Specification already exists!');
    }

    this.spectificationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
