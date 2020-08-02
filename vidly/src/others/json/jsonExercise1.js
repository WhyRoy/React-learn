let user = {
  name: "John Smith",
  age: 35,
};

let user2 = JSON.parse(JSON.stringify(user));

console.log(user);
console.log(user2);
alert(user2);
alert(user);
