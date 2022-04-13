import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private spectificationsRepository: ISpecificationsRepository) {}

  execute({ name, description }: IRequest): void {
    const SpecificationAlreadyExists =
      this.spectificationsRepository.findByName(name);

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
