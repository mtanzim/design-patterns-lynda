import FlyWithWings from './FlyWithWings';
import FlyNoWay from './FlyNoWay';
import Mute from './Mute';
import Squeak from './Squeak';
import Duck from './Duck';

export default class TestDuck extends Duck {
  constructor() {
    super();
    this.flyBehaviour = new FlyNoWay();
    this.quackBehaviour =  new Mute();
  }

  display():void {
    console.log('I am displaying as a TEST DUCK!');
  }
}

