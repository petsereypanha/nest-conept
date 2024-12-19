import {
  ArgumentMetadata,
  Inject,
  Injectable,
  PipeTransform,
  Type,
} from '@nestjs/common';

export function EntityExists(entityClass: Type): Type<PipeTransform> {
  @Injectable()
  class EntityExistsPipe implements PipeTransform {
    constructor(
      @Inject(entityClass)
      private entityRepository: { exists(condition: unknown): Promise<void> },
    ) {}

    async transform(value: any, metadata: ArgumentMetadata) {
      await this.entityRepository.exists({ where: { id: value } }); // throw if entity does not exist
      return value;
    }
  }

  return EntityExistsPipe;
}
