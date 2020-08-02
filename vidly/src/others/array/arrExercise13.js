function unique(array) {
  /* your code */
  for (let index1 = 0; index1 < array.length; index1++) {
    for (let index2 = index1 + 1; index2 < array.length; index2++) {
      if (array[index1] === array[index2]) {
        array.splice(index2, 1);
        index2--;
      }
    }
  }
  return array;
}

let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

alert(unique(strings)); // Hare, Krishna, :-O
