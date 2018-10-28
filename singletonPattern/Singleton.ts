
export default class Singleton {

  // note how static properties are referred to later
  private static instance: Singleton;
  private score: number = 10;
  private constructor() {
    this.score = 0;
  };

  addScore(num: number) {
    this.score += num;
  }

  remScore(num: number) {
    this.score -= num;
  }

  getScore(): number {
    return this.score;
  }


  static getInstance(): Singleton {
    if (!Singleton.instance) {
      // example of static properties being used
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

function driver() {
  // let errorClass = new Singleton();
  let subjectA = Singleton.getInstance();
  let subjectB = Singleton.getInstance(); 
  subjectA.addScore(5);
  subjectB.addScore(5);
  subjectA.remScore(2);
  console.log(`subject B scrore is: ${subjectB.getScore()}`);
  console.log(`subject A scrore is: ${subjectA.getScore()}`);  
}

driver();






