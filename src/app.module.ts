import { Module } from '@nestjs/common';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { CoffeesModule } from './modules/coffees/coffees.module';
import { RewardsModule } from './modules/rewards/rewards.module';
import { SchedulerModule } from './modules/scheduler/scheduler.module';
import { FibonacciModule } from './modules/fibonacci/fibonacci.module';
import { HttpClientModule } from './modules/http-client/http-client.module';
import { RecipesModule } from './recipes/recipes.module';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [
    CoffeesModule,
    RewardsModule,
    SchedulerModule,
    // CronModule,
    FibonacciModule,
    HttpClientModule.register({ baseUrl: 'http://nestjs.com' }),
    HttpClientModule.register({ baseUrl: 'http://nestjs.com' }),
    HttpClientModule.register({ baseUrl: 'http://nestjs.com' }),
    RecipesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
