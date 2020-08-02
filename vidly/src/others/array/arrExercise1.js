function sumInput() {
  let arr = [],
    sum = 0;
  while (1) {
    let value = prompt("请输入一个数字", "0");
    if (value == null || value === "" || !isFinite(value)) {
      break;
    }
    arr.push(+value);
  }
  for (let item of arr) {
    sum += item;
  }
  console.log(sum);
  return sum;
}
sumInput();
