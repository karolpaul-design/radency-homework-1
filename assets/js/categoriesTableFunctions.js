function changer() {
  const arr = [];
  notesTable.children.forEach((item) => {
    let row = item;
    row.style.display === "none" || row.children[2].innerHTML === "empty"
      ? null
      : row.children[2].innerHTML !== "Archieved"
      ? arr.push(row.children[2].innerHTML)
      : arr.push([row.children[2].innerHTML, row.getAttribute("data")]);
  });

  categoryTable.children[0].children[1].innerHTML = 0;
  categoryTable.children[1].children[1].innerHTML = 0;
  categoryTable.children[2].children[1].innerHTML = 0;
  categoryTable.children[0].children[2].innerHTML = 0;
  categoryTable.children[1].children[2].innerHTML = 0;
  categoryTable.children[2].children[2].innerHTML = 0;

  arr.forEach((category) => {
    switch (category) {
      case "Task":
        categoryTable.children[0].children[1].innerHTML =
          +categoryTable.children[0].children[1].innerHTML + 1;

        return;
      case "Random Thought":
        categoryTable.children[1].children[1].innerHTML =
          +categoryTable.children[1].children[1].innerHTML + 1;
        return;
      case "Idea":
        categoryTable.children[2].children[1].innerHTML =
          +categoryTable.children[2].children[1].innerHTML + 1;
        return;
      default:
        switch (category[1]) {
          case "Task":
            categoryTable.children[0].children[2].innerHTML =
              +categoryTable.children[0].children[2].innerHTML + 1;

            return;
          case "Random Thought":
            categoryTable.children[1].children[2].innerHTML =
              +categoryTable.children[1].children[2].innerHTML + 1;
            return;
          case "Idea":
            categoryTable.children[2].children[2].innerHTML =
              +categoryTable.children[2].children[2].innerHTML + 1;
            return;
        }
    }
  });

  return arr;
}
