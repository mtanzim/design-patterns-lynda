import QuackBehaviour from './interfaces/QuackBehaviour'

export  default class Quack implements QuackBehaviour {
  quack ():void {
    console.log('quack quack!');
  }
}

/* function driver (): void {
  let quackTest = new Quack;
  quackTest.quack();
}

driver(); */