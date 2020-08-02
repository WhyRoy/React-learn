function getmaxSubSum(array) {
  let arr = [];
  for (let startIndex = 0; startIndex < array.length; startIndex++) {
    let sum = array[startIndex];
    for (let endIndex = startIndex; endIndex < array.length; endIndex++) {
      if (startIndex === endIndex) arr.push(sum);
      else {
        sum += array[endIndex];
        arr.push(sum);
      }
    }
  }
  console.log(Math.max(...arr) > 0 ? Math.max(...arr) : 0);
  //   return Math.max(...arr);
}
getmaxSubSum([-1, 2, 3, -9]);
getmaxSubSum([2, -1, 2, 3, -9]);
getmaxSubSum([-1, 2, 3, -9, 11]);
