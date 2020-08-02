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

function printList(list) {
  // while (list) {
  //   alert(list.value);
  //   list = list.next;
  // }

  // return list.next === null ? alert(list.value) : printList(list.next);
  alert(list.value);
  if (list.next) printList(list.next);
}
printList(list);
