function getDataSummary() {
  categories.forEach((item) => {
    let row = `<tr id="${item.toLowerCase()}-category">
                <td>${item}</td>
                <td class="category-actives">0</td> 
                <td class="category-archieved">0</td>
               </tr>`;
    categoryTable.insertAdjacentHTML("beforeend", row);
  });
}

function changer() {
  const arr = [];

  //Get array with list of category of every note and their actieve or archieved status
  notesTable.children.forEach((item) => {
    let row = item;
    row.style.display === "none" || row.children[2].innerHTML === "empty"
      ? null
      : row.children[2].innerHTML !== "Archieved"
      ? arr.push([row.children[2].innerHTML, "Active"])
      : arr.push([row.getAttribute("data"), row.children[2].innerHTML]);
  });

  const categoriesElements = categoryTable.children;
  const activeNums = document.querySelectorAll(".category-actives");
  const archievedNums = document.querySelectorAll(".category-archieved");

  activeNums.forEach((item) => (item.innerHTML = 0));
  archievedNums.forEach((item) => (item.innerHTML = 0));

  arr.forEach((categoryArr) => {
    categoriesElements.forEach((categoryLine) => {
      if (categoryLine.children[0].innerHTML === categoryArr[0]) {
        categoryArr[1] === "Active"
          ? (categoryLine.children[1].innerHTML =
              +categoryLine.children[1].innerHTML + 1)
          : (categoryLine.children[2].innerHTML =
              +categoryLine.children[2].innerHTML + 1);
      }
    });
  });

  return arr;
}
