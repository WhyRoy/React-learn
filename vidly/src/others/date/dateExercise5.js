function getLastDayOfMonth(year, month) {
  let date = null;
  if (year === 11) {
    date = new Date(year + 1, 0);
  } else {
    date = new Date(year, month + 1);
  }
  date.setDate(0);
  let num = date.getDate();
  alert(num);
}
getLastDayOfMonth(2012, 11);
