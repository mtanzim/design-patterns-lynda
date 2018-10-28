// import IState from "./interfaces/IState";
import GumballMachine from "./GumballMachine";

export default abstract class AbstractState {
  gumballMachine: GumballMachine;
  protected name: string;

  constructor(machine: GumballMachine) {
    this.gumballMachine = machine;
  }

  getName() {
    return this.name;
  }

  abstract insertQuarter(): void;
  abstract ejectQuarter(): void;
  abstract turnCrank(): void;
  abstract dispense(): void;
  
}