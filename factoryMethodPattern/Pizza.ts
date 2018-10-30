export default abstract class Pizza {
  name: string;
  dough: string;
  sauce: string;
  toppings: string[];

  getName(): string {
    return this.name;
  }

  prepare(): void {
    console.log(`Preparing ${this.name}`);
  }
  cut(): void {
    console.log(`Cutting ${this.name}`);
  }
  bake(): void {
    console.log(`Baking ${this.name}`);
  }
  box(): void {
    console.log(`Boxing ${this.name}`);
  }

  addTopping(topping: string): void {
    this.toppings.push(topping);
  }

  showPizza(): string {
    let retString = (`-------- ${this.name} --------\n${this.dough}\n${this.sauce}\n`);
    retString += `Toppings:\n`
    this.toppings.forEach(t => retString += `  ${t}\n`);
    return retString;

  }

}