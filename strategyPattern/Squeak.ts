import QuackBehaviour from './interfaces/QuackBehaviour'

export default class Squeak implements QuackBehaviour {
  quack(): void {
    console.log('Squeak!');
  }
}

/* function driver(): void {
  let quackTest = new Quack;
  quackTest.quack();
}

driver(); */