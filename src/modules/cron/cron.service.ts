import { IntervalHost } from '../scheduler/decorators/interval-host.decorators';
import { Interval } from '../scheduler/decorators/interval.decorators';

@IntervalHost
export class CronService {
  @Interval(1000)
  everySecond() {
    console.log('Every second');
  }
}
