function isEmpty(obj) {
  let arr = [];

  for (let key in obj) key && arr.push(key);
  return arr.length ? false : true;
}

let schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false
