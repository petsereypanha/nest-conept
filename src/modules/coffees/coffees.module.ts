import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { COFFEES_DATA_SOURCES, CoffeesService } from './coffees.service';

@Module({
  controllers: [CoffeesController],
  providers: [
    CoffeesService,
    {
      provide: COFFEES_DATA_SOURCES,
      useValue: [],
    },
  ],
})
export class CoffeesModule {}
