let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};
function isEmpty(obj) {
  for (let key in obj) return true;
  return false;
}
function calculate(obj) {
  let sum = 0;
  if (isEmpty(obj)) {
    for (let item in obj) sum += obj[item];
    console.log(sum);
  } else {
    console.log(sum);
  }
}
calculate(salaries);
