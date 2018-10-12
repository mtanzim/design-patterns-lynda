import QuackBehaviour from './interfaces/QuackBehaviour'

export default class Mute implements QuackBehaviour {
  quack(): void {
    console.log('**SILENCE**');
  }
}

/* function driver(): void {
  let quackTest = new Mute;
  quackTest.quack();
}

driver(); */