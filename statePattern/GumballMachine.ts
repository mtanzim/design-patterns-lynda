import AbstractState from "./AbstractState";
import SoldOutState from "./SoldOutState";
import NoQuarterState from "./NoQuarterState";
import HasQuarterState from "./HasQuarterState";
import SoldState from "./SoldState";

export default class GumballMachine {

  private soldOutState: AbstractState;
  private noQuarterState: AbstractState;
  private hasQuarterState: AbstractState;
  private soldState: AbstractState;

  private state: AbstractState;
  private numBalls: number;
  private MAX_BALLS: number;

  constructor(numBalls) {
    this.soldOutState = new SoldOutState(this);
    this.noQuarterState = new NoQuarterState(this);
    this.hasQuarterState = new HasQuarterState(this);
    this.soldState = new SoldState(this);

    this.state = this.soldOutState;
    if (numBalls > 0) this.state = this.noQuarterState;
    this.numBalls = numBalls;
    this.MAX_BALLS = 200;

    console.log(`Starting gumball machine with ${this.numBalls} balls and state to :${this.state.getName()}`);
  }

  insertQuarter() : void {
    if (this.numBalls > 0) this.state.insertQuarter();
    else {
      throw 'Machine empty';
    }
  }

  ejectQuarter() : void {
    this.state.ejectQuarter();
  }

  turnCrank() : void {
    this.state.turnCrank();
    if (this.numBalls > 0) {
      this.state.dispense();
      this.numBalls--;
      if (this.numBalls === 0) console.log('WARNING: Please refill machine');
    } else {
      
      this.state = this.soldOutState;
    }
  }

  setState(state: AbstractState): void {
    console.log(`Setting gumball machine state to :${state.getName()}`);
    this.state = state;
  }

  resetM(): void {
    this.state = this.noQuarterState;
  }

  refillM(numBalls: number): void {
    if (numBalls < 1 || numBalls + this.numBalls > this.MAX_BALLS) {
      throw "Can't refill"
    }
    this.numBalls += numBalls;
  }

  getCurrentCount () : number {
    return this.numBalls;
  }

  getCurrentState(): AbstractState {
    return this.state;
  }

  getHasQuarterState(): AbstractState {
    return this.hasQuarterState;
  }

  getNoQuarterState(): AbstractState {
    return this.noQuarterState;
  }

  getSoldOutState(): AbstractState {
    return this.soldOutState;
  }

  getSoldState(): AbstractState {
    return this.soldState;
  }

}