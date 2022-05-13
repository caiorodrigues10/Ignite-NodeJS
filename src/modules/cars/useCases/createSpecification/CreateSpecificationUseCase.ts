import { inject, injectable } from 'tsyringe';

import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

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
      throw new Error('Specification already exists!');
    }

    this.spectificationsRepository.create({
      name,
      description,
    });
  }
}

export { CreateSpecificationUseCase };
