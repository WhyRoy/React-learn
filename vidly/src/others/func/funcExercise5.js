let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function reverse(list) {
  //   let arr = [];
  //   while (list) {
  //     arr.push(list.value);
  //     list = list.next;
  //   }
  //   while (arr[0]) {
  //     alert(arr.pop());
  //   }
  if (list.next) {
    reverse(list.next);
  }
  alert(list.value);
}
reverse(list);
