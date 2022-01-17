const notesData = [
  {
    name: "Shopping list",
    created: "April 20, 2021",
    category: "Task",
    content: "Tomatoes, bread",
    dates: "",
  },
  {
    name: "Theory of evolution",
    created: "April 27, 2021",
    category: "Random Thought",
    content:
      " Lorem ipsum dolor sit amet 3/5/2021 consectetur adipisicing elit. Id nostrum laudantium rerum, quas 5/5/2021 consequuntur officia aut amet 20/11/2021 quos similique numquam?",
    dates: "",
  },
  {
    name: "New features",
    created: "May 05, 2021",
    category: "Idea",
    content: "Implemented new Lorem ipsum dolor sit.",
    dates: "",
  },
  {
    name: "William Gaddis",
    created: "May 07, 2021",
    category: "Random Thought",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti, modi.",
    dates: "",
  },
  {
    name: "Books",
    created: "May 15, 2021",
    category: "Task",
    content: "The lean startup",
    dates: "",
  },
];

function getData() {
  try {
    notesData.forEach(function (obj) {
      let name = obj.name;
      let created = obj.created;
      let category = obj.category;
      let content = obj.content;
      let dates = datesSearch(obj.content);
      let row = `
                          <tr >
                              <td>${name}</td>
                              <td>${created}</td>
                              
                              <td>${category}</td>
                              <td>${content}</td>
                              <td >${dates}</td>
                              <td >${operateFormatter()}</td>
                          </tr>
                          `;
      notesTable.insertAdjacentHTML("beforeend", row);
    });
  } catch (error) {
    console.log(error);
    alert("NO DATA RECIEVED!");
  }
}

function edit() {
  let element = this.event.target;

  let row = element.closest("tr");
  let name = row.cells[0].innerHTML;
  let content = row.cells[3].innerHTML;
  let created = row.cells[1].innerHTML;
  let category = row.cells[2].innerHTML;
  let dates = row.cells[4].innerHTML;
  let newRow = `
        <tr>
            <td><input type="text" value="${name}"></td>
            <td>${created}</td>
            <td>${selectCategory(category)}</td>
            <td><input type="text" value="${content}"></td>
            <td>${dates}</td>
            <td >${operateFormatterSave()}</td>
        </tr>
        `;
  row.innerHTML = newRow;
}

function save() {
  let element = this.event.target;
  let row = element.closest("tr");
  let name = row.cells[0].firstChild.value;
  let created = row.cells[1].innerHTML;
  let category = row.cells[2].firstChild.value;
  let content = row.cells[3].firstChild.value;
  let dates = datesSearch(content);
  let newRow = `
        <tr> 
            <td>${name}</td>
            <td>${created}</td>
            <td>${category}</td>
            <td>${content}</td>
            <td>${dates}</td>
            <td>${operateFormatter()}</td>
        </tr>
        `;
  row.innerHTML = newRow;
}

function deleteContent() {
  let element = this.event.target;
  let row = element.closest("tr").remove();
}

function archieve() {
  let element = this.event.target;

  let row = element.closest("tr");
  let name = row.cells[0].innerHTML;
  let content = row.cells[3].innerHTML;
  let created = row.cells[1].innerHTML;
  let category = row.cells[2].innerHTML;
  let newRow = `
    
        <tr data="${category}">
          <td>      </td>
          <td>      </td>
          <td>Archieved</td>
          <td>      </td>
          <td>      </td>
          <td >${operateFormatterUnArchieve()}</td>
        </tr>
        <tr style="display: none">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
        </tr>
        `;
  row.style.display = "none";
  row.insertAdjacentHTML("afterend", newRow);
}

function unArchieve(e) {
  let element = this.event.target;
  let row = element.closest("tr ").previousElementSibling;
  let nextRow = element.closest("tr ").nextElementSibling.remove();
  let rowArchieve = element.closest("tr ").remove();

  let name = row.cells[0].innerHTML;
  let content = row.cells[3].innerHTML;
  let created = row.cells[1].innerHTML;
  let category = row.cells[2].innerHTML;
  row.style.display = "table-row";
}

function addNote() {
  let row = `
        <tr >
            <td>empty</td>
            <td>${date()}</td>
            <td>empty</td>
            <td></td>
            <td></td>
            <td >${operateFormatter()}</td>
        </tr>
        `;
  notesTable.insertAdjacentHTML("beforeend", row);
}
