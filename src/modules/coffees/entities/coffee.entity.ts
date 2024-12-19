import { WithUuid } from '../../common/mixins/with-uuid.mixin';

export class Coffee {
  constructor(public name: string) {}
}

const CoffeWithUuidCls = WithUuid(Coffee);
const coffee = new CoffeWithUuidCls('Buddy Brew');
