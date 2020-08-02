let week = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];

function getWeekDay(date) {
  let num = date.getDay();
  return week[num];
}

let date = new Date(2012, 0, 3); // 3 Jan 2012
alert(getWeekDay(date)); // 应该输出 "TU"
