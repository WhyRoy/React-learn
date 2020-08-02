function Calculator(str) {
  this.methods = {
    "+": (a, b) => +a + +b,
    "-": (a, b) => a - b,
  };
  this.calculate = (str) => {
    let arr = str.split(" ");
    return this.methods[arr[1]](arr[0], arr[2]);
  };
  this.addMethod = (name, func) => {
    this.methods[name] = func;
  };
}
let calc = new Calculator();

alert(calc.calculate("3 - 7")); // 10
let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert(result); // 8
