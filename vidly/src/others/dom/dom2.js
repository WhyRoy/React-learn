let table = document.body.children[1];
console.log(table);
for (let i = 0; i < table.rows.length; i++) {
  //   for (let td = 0; td < table.rows[i].cells.length; td++) {
  //     if (i === td) {
  //       table.rows[i].cells[td].style.backgroundColor = "red";
  //     }
  //   }
  let rows = table.rows[i];
  rows.cells[i].style.backgroundColor = "red";
}
