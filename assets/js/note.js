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
    category: "Quote",
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

const selectCategory = () => {
  return `<select name="select"> 
    <option value="Task">Task</option>
    <option value="Random Thought" selected>Random Thought</option>
    <option value="Idea">Idea</option>
  </select>`;
};
function edit() {
  let element = this.event.target;

  let row = element.closest("tr");
  let name = row.cells[0].innerHTML;
  let content = row.cells[3].innerHTML;
  let created = row.cells[1].innerHTML;
  console.log(element, row, name, content, created);
  let newRow = `
      <tr>
          <td><input type="text" value="${name}"></td>
          <td>${created}</td>
          <td>${selectCategory()}</td>
          <td><input type="text" value="${content}"></td>
          <td></td>
          <td >${operateFormatterSave()}</td>
      </tr>
      `;
  row.innerHTML = newRow;
}
function getData() {
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
  // },
  // error: function () {
  //   alert("NO DATA RECEIVED!");
  // },
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

const $table = $("#fresh-table");

window.operateEvents = {
  // "click .like": function (e, value, row, index) {
  //   alert("You click like icon, row: " + JSON.stringify(row));
  //   console.log(value, row, index);
  // },
  // "click .edit": function () {
  //   edit();
  //   console.log(edit);
  //   console.log(value, row, index);
  // },
  // "click .remove": function (e, value, row, index) {
  //   $table.bootstrapTable("remove", {
  //     field: "name",
  //     values: [row.name],
  //   });
  //   console.log(row);
  // },
};

function operateFormatter() {
  return [
    '<a rel="tooltip" title="Edit" onclick="edit()" class="table-action edit" href="javascript:void(0)" title="Edit">',
    '<i class="fa fa-edit"></i>',
    "</a>",
    '<a rel="tooltip"  title="Archive" class="table-action like" href="javascript:void(0)" title="Like">',
    '<i class="fas fa-folder"></i>',
    "</a>",

    '<a rel="tooltip" title="Remove" class="table-action remove" href="javascript:void(0)" title="Remove">',
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

    '<a rel="tooltip" title="Remove" class="table-action remove" href="javascript:void(0)" title="Remove">',
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
