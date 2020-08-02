var node = {
  value: 2,
  left: {
    value: 3,
    left: {
      value: 5,
    },
    right: {
      value: 6,
    },
  },
  right: {
    value: 4,
    right: {
      value: 7,
    },
  },
};

function print(node) {
  if (node) {
    console.log(node.value);
    if (node.left) {
      print(node.left);
      console.log(node.value);
    }
    if (node.right) {
      print(node.right);
      console.log(node.value);
    }
  }
}
print(node);
