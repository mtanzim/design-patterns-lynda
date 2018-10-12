import FlyBehaviour from './interfaces/FlyBehaviour';

export default class FlyWithWings implements FlyBehaviour {
  fly(): void {
    console.log('Flap Flap!');
  }
}

/* function driver(): void {
  let quackTest = new FlyWithWings;
  quackTest.fly();
}

driver(); */