console.log("hello");
// import { notesData } from "./data.js";
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
      "Evolution is Lorem ipsum dolor sit amet consectetur adipisicing elit Vitae!",
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

const table = document.querySelector("#tableNotes");
let time = notesData;
const date = () => {
  let arr = new Date().toDateString().split(" ");
  arr.shift();
  arr[1] += ",";
  return arr.join(" ");
};

const selectCategory = (category) => {
  switch (category) {
    case "Task":
      return `<select name="select"> 
    <option value="Task" selected>Task</option>
    <option value="Random Thought" >Random Thought</option>
    <option value="Idea" >Idea</option>
  </select>`;
    case "Random Thought":
      return `<select name="select"> 
    <option value="Task">Task</option>
    <option value="Random Thought" selected >Random Thought</option>
    <option value="Idea" >Idea</option>
  </select>`;
    case "Idea":
      return `<select name="select"> 
    <option value="Task">Task</option>
    <option value="Random Thought" >Random Thought</option>
    <option value="Idea" selected>Idea</option>
  </select>`;
    default:
      return `<select name="select" > 
      <option value="empty">empty</option>
      
    </select>`;
  }
};

function getData() {
  try {
    notesData.forEach(function (obj) {
      let name = obj.name;
      let created = obj.created;
      let category = obj.category;
      let content = obj.content;
      let dates = obj.date;
      let row = `
                        <tr >
                            <td>${name}</td>
                            <td>${created}</td>
                            
                            <td>${category}</td>
                            <td>${content}</td>
                            <td ></td>
                            <td >${operateFormatter()}</td>
                        </tr>
                        `;
      table.insertAdjacentHTML("afterbegin", row);
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

  let newRow = `
      <tr>
          <td><input type="text" value="${name}"></td>
          <td>${created}</td>
          <td>${selectCategory(category)}</td>
          <td><input type="text" value="${content}"></td>
          <td></td>
          <td >${operateFormatterSave()}</td>
      </tr>
      `;
  row.innerHTML = newRow;
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
  table.insertAdjacentHTML("beforeend", row);
}

function save() {
  let element = this.event.target;
  let row = element.closest("tr");
  let name = row.cells[0].firstChild.value;
  let created = row.cells[1].innerHTML;
  let category = row.cells[2].firstChild.value;

  let content = row.cells[3].firstChild.value;
  //   let dates = row.cells[4].firstChild.value;
  let newRow = `
      <tr>
          <td>${name}</td>
          <td>${created}</td>
          <td>${category}</td>
          <td>${content}</td>
          <td></td>
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
      <tr>
        <td>      </td>
        <td>      </td>
      
        <td>Archieved</td>
        <td>       </td>
        <td >       </td>
        <td >${operateFormatterUnArchieve()}</td>
      
        
      </tr>
      `;

  row.style.display = "none";
  row.insertAdjacentHTML("afterend", newRow);
}
function unArchieve(e) {
  let element = this.event.target;
  let row = element.closest("tr ").previousElementSibling;
  let rowArchieve = element.closest("tr ").remove();

  let name = row.cells[0].innerHTML;
  let content = row.cells[3].innerHTML;
  let created = row.cells[1].innerHTML;
  let category = row.cells[2].innerHTML;
  row.style.display = "table-row";
}

const $table = $("#fresh-table");

window.operateEvents = {};

function operateFormatter() {
  return [
    '<a rel="tooltip" title="Edit" onclick="edit()" class="table-action edit" href="javascript:void(0)" title="Edit">',
    '<i class="fa fa-edit"></i>',
    "</a>",
    '<a rel="tooltip" onclick="archieve()" title="Archive" class="table-action like" href="javascript:void(0)" title="Like">',
    '<i class="fas fa-folder"></i>',
    "</a>",

    '<a rel="tooltip" title="Remove" onclick="deleteContent()" class="table-action remove" href="javascript:void(0)" title="Remove">',
    '<i class="fas fa-trash"></i>',
    "</a>",
  ].join("");
}
function operateFormatterSave() {
  return [
    '<a rel="tooltip" title="Save" onclick="save()" class="table-action edit" href="javascript:void(0)" title="Edit">',
    '<i class="fas fa-save"></i>',
    "</a>",
    '<a rel="tooltip"  title="Archive" class="table-action like" href="javascript:void(0)" title="Like">',
    '<i class="fas fa-folder"></i>',
    "</a>",

    '<a rel="tooltip" title="Remove" onclick="deleteContent()" class="table-action remove" href="javascript:void(0)" title="Remove">',
    '<i class="fas fa-trash"></i>',
    "</a>",
  ].join("");
}
function operateFormatterUnArchieve() {
  return [
    '<a rel="tooltip" title="Edit"  class="table-action edit" href="javascript:void(0)" title="Edit">',
    '<i class="fa fa-edit"></i>',
    "</a>",
    '<a rel="tooltip"  title="Unarchive" onclick="unArchieve()" class="table-action like" href="javascript:void(0)" title="Like">',
    '<i class="fas fa-folder"></i>',
    "</a>",

    '<a rel="tooltip" title="Remove" onclick="deleteContent()" class="table-action remove" href="javascript:void(0)" title="Remove">',
    '<i class="fas fa-trash"></i>',
    "</a>",
  ].join("");
}

$(function () {
  $table.bootstrapTable({
    classes: "table table-hover table-striped",
    toolbar: ".toolbar",

    height: $(window).height(),
  });

  $(window).resize(function () {
    $table.bootstrapTable("resetView", {
      height: $(window).height(),
    });
  });
});
