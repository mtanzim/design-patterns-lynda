import GumballMachine from "./GumballMachine";
import AbstractState from "./AbstractState";

export default class SoldOutState extends AbstractState {

  errorMsg: string;

  constructor(machine: GumballMachine) {
    super(machine)
    this.name = "Sold Out";
    this.errorMsg = 'Sold out!';
  }

  insertQuarter() {
    throw this.errorMsg;
  }
  ejectQuarter() {
    throw this.errorMsg;
    
  }
  turnCrank() {
    throw this.errorMsg;
    
  }
  dispense() {
    throw this.errorMsg;

  }


}