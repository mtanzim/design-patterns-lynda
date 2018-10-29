import GumballMachine from "./GumballMachine";

function driver() {
  let machine = new GumballMachine(2);
/*   console.log(machine.getHasQuarterState().getName());
  console.log(machine.getNoQuarterState().getName());
  console.log(machine.getSoldOutState().getName());
  console.log(machine.getSoldState().getName());
  console.log(machine.getCurrentState().getName()); */

  machine.insertQuarter();
  machine.turnCrank();

  console.log();

  machine.insertQuarter();
  machine.ejectQuarter();
  // machine.dispense();

  try {
    machine.resetM();
    console.log();
    machine.insertQuarter();
    machine.ejectQuarter();
    machine.turnCrank();
  } catch (err) {
    console.log("ERROR");
    console.log(err);
  }

  try {
    machine.resetM();
    console.log();
    // machine.insertQuarter();
    machine.ejectQuarter();
    machine.turnCrank();
  } catch (err) {
    console.log("ERROR");
    console.log(err);
  }
  try {
    machine.resetM();
    console.log();
    // machine.insertQuarter();
    // machine.ejectQuarter();
    machine.turnCrank();
  } catch (err) {
    console.log("ERROR");
    console.log(err);
  }

  try {
    machine.resetM();
    console.log();
    machine.insertQuarter();
    machine.insertQuarter();
    // machine.ejectQuarter();
    // machine.turnCrank();
  } catch (err) {
    console.log("ERROR");
    console.log(err);
  }

  try {
    machine.resetM();
    console.log();
    machine.insertQuarter();
    machine.turnCrank();
  } catch (err) {
    console.log("ERROR");
    console.log(err);
  }

  try {
    machine.resetM();
    console.log();
    machine.insertQuarter();
    machine.turnCrank();
  } catch (err) {
    console.log("ERROR");
    console.log(err);
  }


  machine.resetM();
  machine.refillM(4);

  for (let i = 0; i < 10; i++) {
    try {
      console.log(`\nstarting iter: ${i}`);
      machine.insertQuarter();
      machine.turnCrank();
    } catch (err) {
      console.log("ERROR");
      console.log(err);
    }
  }
}

driver();