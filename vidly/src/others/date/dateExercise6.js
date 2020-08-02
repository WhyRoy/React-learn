function getSecondsToday() {
  let now = new Date();
  let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let diff = now - today;
  document.querySelector("#container").innerHTML = Math.floor(diff / 1000);
  setTimeout(getSecondsToday, 100);
}
getSecondsToday();
