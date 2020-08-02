function capitalize(str) {
  str = str[0].toUpperCase() + str.slice(1);
  // console.log(str);
  return str;
}

function camelize(str) {
  let array = str.split("-");
  for (let index = 1; index < array.length; index++) {
    array[index] = capitalize(array[index]);
  }
  console.log(array.join(""));
  return array.join("");
}
camelize("background-color");
camelize("list-style-image");
camelize("-webkit-transition");
