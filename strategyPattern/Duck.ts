import QuackBehaviour from './interfaces/QuackBehaviour';
import FlyBehaviour from './interfaces/FlyBehaviour';


abstract class Duck {

  quackBehaviour: QuackBehaviour;
  flyBehaviour: FlyBehaviour;

  setFlyFB(fb:FlyBehaviour):void {
    this.flyBehaviour = fb;
  }

  setQuack(qb: QuackBehaviour):void {
    this.quackBehaviour = qb;
  }

  doFly() : void{
    this.flyBehaviour.fly();
  }

  doQuack() : void {
    this.quackBehaviour.quack();
  }

  doSwim(): void {
    console.log('All Ducks SWIM!!!');
  }

  abstract display(): void;
  
}



export default Duck;