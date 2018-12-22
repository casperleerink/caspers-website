document.getElementById('works_list_table_button').addEventListener("click", function () {
  var table = document.getElementById('works_list_table');
  if (table.style.display === "table") {
    table.style.display = "none";
  }
  else {
    table.style.display = "table";
  }
});
