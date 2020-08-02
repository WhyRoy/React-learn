function filterRange(arr, a, b) {
  return arr.filter((item) => item <= b && item >= a);
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert(filtered); // 3,1（匹配值）

alert(arr); // 5,3,8,1（未修改）
