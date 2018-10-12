import FlyWithWings from './FlyWithWings';
import FlyNoWay from './FlyNoWay';
import Duck from './Duck';

class TestDuck extends Duck {
  constructor() {
    super();
    this.flyBehaviour = new FlyNoWay();
  }
}

function driver() {
  let testDuck = new TestDuck();
  testDuck.doFly();
}

driver();