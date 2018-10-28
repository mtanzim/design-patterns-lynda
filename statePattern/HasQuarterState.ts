import GumballMachine from "./GumballMachine";
import AbstractState from "./AbstractState";

export default class HasQuarterState extends AbstractState {

  constructor(machine: GumballMachine) {
    super(machine);
    this.name = "Has Quarters";
  }

  insertQuarter() {
    throw 'Cannot insert additional quartters!';
  }
  ejectQuarter() {
    console.log('Ejecting quarter!');
    this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
  }
  turnCrank() {
    console.log('Turning Crank!');
    this.gumballMachine.setState(this.gumballMachine.getSoldState());
  }
  dispense() {
    throw 'Cannot dispense before cranking!';
  }


}