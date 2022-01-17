const $table = $("#fresh-table");
const $categoryTable = $("#category-table");

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
    '<i class="fa fa-edit"></i>',
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
  });
});
$(function () {
  $categoryTable.bootstrapTable({
    classes: "table table-hover table-striped ",
  });
});
