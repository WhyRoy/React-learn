import { Person } from "./person";
export class Teacher extends Person {
  constructor(sub, name) {
    super(name);
    this.sub = sub;
  }
  teach() {
    console.log("teach");
  }
}
