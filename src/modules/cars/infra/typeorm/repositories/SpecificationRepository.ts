import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from '@modules/cars/repositories/ISpecificationsRepository';
import { getRepository, Repository } from 'typeorm';

import { Specification } from '../entities/Specification';

class SpecificationRepository implements ISpecificationsRepository {
  private repository: Repository<Specification>;

  constructor() {
    this.repository = getRepository(Specification);
  }

  async create({
    name,
    description,
  }: ICreateSpecificationDTO): Promise<Specification> {
    const specificaition = this.repository.create({
      description,
      name,
    });

    await this.repository.save(specificaition);

    return specificaition;
  }

  async findByName(name: string): Promise<Specification> {
    const specificaition = this.repository.findOne({
      name,
    });
    return specificaition;
  }

  async findByIds(ids: string[]): Promise<Specification[]> {
    const specificaition = await this.repository.findByIds(ids);

    return specificaition;
  }
}

export { SpecificationRepository };
