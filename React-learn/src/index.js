import { Person } from "./person";
import { Teacher } from "./teacher";

const person1 = new Person("Roy");
person1.walk();

const teacher = new Teacher("Math", "H");
teacher.teach();
console.log(teacher.name);
