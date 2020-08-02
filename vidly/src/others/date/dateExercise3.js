function getLocalDay(date) {
  let num = date.getDay();
  if (num === 0) num = 7;
  return num;
}
let date = new Date(2012, 0, 3); // 3 Jan 2012
alert(getLocalDay(date)); // 星期二，应该显示 2
