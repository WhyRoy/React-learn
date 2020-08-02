function showNotification({ top = 0, right = 0, className, html }) {
  /* your code */
  let div = document.createElement("div");
  div.className = "notification";
  if (className) {
    div.classList.add(className);
  }
  div.style.top = top;
  div.style.right = right;
  div.innerHTML = html;
  document.body.append(div);
  setTimeout(() => div.remove(), 1500);
}

// test it
let i = 1;
setInterval(() => {
  showNotification({
    top: 10,
    right: 10,
    html: "Hello " + i++,
    className: "welcome",
  });
}, 2000);
