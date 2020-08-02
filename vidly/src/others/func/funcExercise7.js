function printNumbers(from, to) {
  let i = from;
  //   setInterval(() => {
  //     if (i <= to) {
  //       console.log(i);
  //       i++;
  //     }
  //   }, 1000);
  setTimeout(function print() {
    if (i <= to) {
      console.log(i);
      i++;
      setTimeout(print, 1000);
    }
  }, 1000);
}
printNumbers(0, 100);
