import FlyBehaviour from './interfaces/FlyBehaviour'

export default class FlyNoWay implements FlyBehaviour {
  fly(): void {
    console.log('No way HOSE!');
  }
}

/* function driver(): void {
  let quackTest = new FlyNoWay;
  quackTest.fly();
}

driver(); */