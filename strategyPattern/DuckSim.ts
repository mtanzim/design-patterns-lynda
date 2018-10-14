import TestDuck from './TestDuck';
import MallardDuck from './MallardDuck';
import FlyWithWings from './FlyWithWings';
import Squeak from './Squeak';

export default function simDuck(): void {
  let testDuck = new TestDuck();
  let mallard = new MallardDuck();

  console.log('Testing Test Duck');
  testDuck.doFly();
  testDuck.setFlyFB(new FlyWithWings());
  testDuck.doFly();
  testDuck.doQuack();
  testDuck.setQuack(new Squeak());
  testDuck.doSwim();
  testDuck.display();
  testDuck.doFly();
  testDuck.doQuack();

  console.log('\nTesting Mallard Duck');
  mallard.doFly();
  mallard.setFlyFB(new FlyWithWings());
  mallard.doFly();
  mallard.doQuack();
  mallard.setQuack(new Squeak());
  mallard.doSwim();
  mallard.display();
  mallard.doFly();
  mallard.doQuack();
  
}

simDuck();