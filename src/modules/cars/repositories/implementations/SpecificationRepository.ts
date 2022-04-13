import { Specification } from '../../model/Specification';
import {
  ICreateSpecificationDTO,
  ISpecificationsRepository,
} from '../ISpecificationsRepository';

class SpecificationRepository implements ISpecificationsRepository {
  private specificaitions: Specification[];

  constructor() {
    this.specificaitions = [];
  }

  create({ name, description }: ICreateSpecificationDTO): void {
    const specificaition = new Specification();

    Object.assign(specificaition, {
      name,
      description,
      created_at: new Date(),
    });

    this.specificaitions.push(specificaition);
  }

  findByName(name: string): Specification {
    const specificaition = this.specificaitions.find(
      specificaition => specificaition.name === name,
    );
    return specificaition;
  }
}

export { SpecificationRepository };
