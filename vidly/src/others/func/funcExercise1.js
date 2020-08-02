function sumTo(n) {
  //   let sum = 0;
  //   for (let i = 1; i <= n; i++) {
  //     sum += i;
  //   }
  //   return sum;

  //   return n === 1 ? 1 : n + sumTo(n - 1);

  return (n * (1 + n)) / 2;
}

alert(sumTo(100)); // 5050
