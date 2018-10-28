import GumballMachine from "./GumballMachine";
import AbstractState from "./AbstractState";

export default class SoldState extends AbstractState {

  constructor(machine: GumballMachine) {
    super(machine);
    this.name = "Sold";
  }


  insertQuarter() {
    throw "Cannot insert quarters yet";
    
  }
  ejectQuarter() {
    throw "Cannot eject quarters any longer";
    
  }
  turnCrank() {
    throw "Cannot turn crank again";
  }
  dispense() {
    console.log('Dispensing Gumball');
    this.gumballMachine.setState(this.gumballMachine.getNoQuarterState());
  }


}