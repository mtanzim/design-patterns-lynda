import Beverage from './Beverage';

abstract class ConidmentDecorator extends Beverage {

  constructor() {
    super();
  }

  abstract getDesc(): string;
}

export default ConidmentDecorator;