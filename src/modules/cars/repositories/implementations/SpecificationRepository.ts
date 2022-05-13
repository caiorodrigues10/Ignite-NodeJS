import { getRepository, Repository } from 'typeorm';

import { Specification } from '../../entities/Specification';
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from '../ISpecificationsRepository';

class SpecificationRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specificaition = this.repository.create({
      description,
      name,
    });

    await this.repository.save(specificaition);
  }

  async findByName(name: string): Promise<Specification> {
    const specificaition = this.repository.findOne({
      name,
    });
    return specificaition;
  }
}

export { SpecificationRepository };
