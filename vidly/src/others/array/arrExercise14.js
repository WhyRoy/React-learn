function groupById(users) {
  return users.reduce((obj, current) => {
    obj[current.id] = current;
    return obj;
  }, {});
}
let users = [
  { id: "john", name: "John Smith", age: 20 },
  { id: "ann", name: "Ann Smith", age: 24 },
  { id: "pete", name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users);
console.log(usersById);
