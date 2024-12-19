import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Inject,
  UseInterceptors,
  RequestTimeoutException,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';
import { CreateCoffeeDto } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { CircuitBreakerInterceptor } from '../common/interceptors/circuit-breaker.interceptor';
import { EntityExists } from '../common/pipes/entity-exists.pipe';
import { Coffee } from './entities/coffee.entity';

@UseInterceptors(CircuitBreakerInterceptor)
@Controller('coffees')
export class CoffeesController {
  constructor(
    @Inject(CoffeesService) private readonly coffeesService: CoffeesService,
  ) {}

  @Post()
  create(@Body() createCoffeeDto: CreateCoffeeDto) {
    return this.coffeesService.create(createCoffeeDto);
  }

  @Get()
  findAll() {
    console.log('findAll handler Error');
    throw new RequestTimeoutException('Error');
    return this.coffeesService.findAll();
  }

  @Get(':id')
  // findOne(@Param('id', EntityExists(Coffee)) id: string) {
  findOne(@Param('id') id: string) {
    return this.coffeesService.findOne(+id);
  }

  @Patch(':id')
  update(
    // @Param('id', EntityExists(Coffee)) id: string,
    @Param('id') id: string,
    @Body() updateCoffeeDto: UpdateCoffeeDto,
  ) {
    return this.coffeesService.update(+id, updateCoffeeDto);
  }

  @Delete(':id')
  // remove(@Param('id', EntityExists(Coffee)) id: string) {
  remove(@Param('id') id: string) {
    return this.coffeesService.remove(+id);
  }
}
