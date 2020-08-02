function filterRangeInPlace(array, a, b) {
  arr = array.filter((item) => item <= b && item >= a);
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // 删除了范围在 1 到 4 之外的所有值

alert(arr); // [3, 1]
