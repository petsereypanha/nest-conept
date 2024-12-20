import { Module } from '@nestjs/common';
import { AppController } from './app/app.controller';
import { AppService } from './app/app.service';
import { CoffeesModule } from './modules/coffees/coffees.module';
import { RewardsModule } from './modules/rewards/rewards.module';
import { SchedulerModule } from './modules/scheduler/scheduler.module';
import { FibonacciModule } from './modules/fibonacci/fibonacci.module';
import { HttpClientModule } from './modules/http-client/http-client.module';
import { RecipesModule } from './recipes/recipes.module';
import { TagsModule } from './modules/tags/tags.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { PaymentsModule } from './modules/payments/payments.module';
import { DataSourceModule } from './modules/data-source/data-source.module';
import { UsersModule } from './modules/users/users.module';
import { ContextIdFactory } from '@nestjs/core';
import { AggregateByTenantContextIdStrategy } from './modules/common/core/aggregate-by-tenant.strategy';
import { I18nModule } from './i18n/i18n.module';
import { AggregateByLocaleContextIdStrategy } from './modules/common/core/aggregate-by-locale.strategy';

// ContextIdFactory.apply(new AggregateByTenantContextIdStrategy());
ContextIdFactory.apply(new AggregateByLocaleContextIdStrategy());

@Module({
  imports: [
    EventEmitterModule.forRoot(),
    CoffeesModule,
    RewardsModule,
    SchedulerModule,
    // CronModule,
    FibonacciModule,
    HttpClientModule.register({ baseUrl: 'http://nestjs.com' }),
    HttpClientModule.register({ baseUrl: 'http://nestjs.com' }),
    HttpClientModule.register({ baseUrl: 'http://nestjs.com' }),
    RecipesModule,
    TagsModule,
    PaymentsModule,
    DataSourceModule,
    UsersModule,
    I18nModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
