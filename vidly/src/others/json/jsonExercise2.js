let room = {
  number: 23,
};

let meetup = {
  title: "Conference",
  occupiedBy: [{ name: "John" }, { name: "Alice" }],
  place: room,
};

// 循环引用
room.occupiedBy = meetup;
meetup.self = meetup;

alert(
  JSON.stringify(meetup, (key, value) => {
    return key != "" && value === meetup ? undefined : value;
  })
);
