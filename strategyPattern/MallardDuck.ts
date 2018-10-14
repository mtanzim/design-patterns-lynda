import Duck from './Duck';
import FlyWithWings from './FlyWithWings';
import Quack from './Quack';

export default class MallardDuck extends Duck {
  constructor() {
    super();
    this.flyBehaviour = new FlyWithWings();
    this.quackBehaviour = new Quack();
  }

  display():void {
    console.log('I am displaying as a Mallard DUCK!');
  }
}

