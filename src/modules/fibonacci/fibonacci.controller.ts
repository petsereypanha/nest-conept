import { Controller, Get, Query } from '@nestjs/common';
// import { FibonacciWorkerHost } from './fibonacci-worker.host';
import Piscina from 'piscina';

@Controller('fibonacci')
export class FibonacciController {
  // constructor(private readonly fibonacciWorkerHost: FibonacciWorkerHost) {}

  fibonacciWorker = new Piscina({
    filename: require.resolve('./fibonacci.worker.js'),
  });

  @Get()
  fibonacci(@Query('n') n: number = 10) {
    return this.fibonacciWorker.run(n);
  }
}
