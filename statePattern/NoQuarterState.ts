import GumballMachine from "./GumballMachine";
import HasQuarterState from "./HasQuarterState";
import AbstractState from "./AbstractState";

export default class NoQuarterState extends AbstractState {


  constructor(machine: GumballMachine) {
    super(machine);
    this.name = "No Quarters";
  }

  insertQuarter() {
    console.log(`Inserting quarter!`);
    this.gumballMachine.setState(this.gumballMachine.getHasQuarterState());
  }
  ejectQuarter() {
    throw 'No quarters to eject';
  }
  turnCrank() {
    throw 'Cannot turn crank without quarters!';
  }
  dispense() {
    throw 'Cannot dispense without any quarters!';
  }


}