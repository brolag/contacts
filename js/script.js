/**
* Add a new row to the table and clean form values.
*/
function add() {
  let table = qs('table');
  let fields = qsa('.field');

  insertData(fields, table);
  clean('.field');
}

/**
* Insert data from the form fields to the table.
*/
function insertData(fields, table) {
  let row = table.insertRow(-1);
  let cells = [];
  fields.forEach(function (field, index) {
    cells.push(row.insertCell(index));
    cells[index].innerHTML = field.value;
  });

  cells.push(row.insertCell(-1));
  cells.push(row.insertCell(-1));
  cells[cells.length-2].append(createButton('Edit'));
  cells[cells.length-1].append(createButton('Remove'));
}

/**
* Create a button and bind a click event on it.
*/
function createButton(type) {
  let button = document.createElement('button');
  let buttonFn = window[type.toLowerCase()];
  button.innerHTML = type;
  if (buttonFn) {
    button.onclick = buttonFn;
  }
  return button;
}

/**
* Remove a row.
*/
function remove(event) {
  event.target.parentNode.parentNode.remove();
}

/**
* Move values from selected table row to the form.
*/
function edit(event) {
  toggleFormButtons();
  qs('#row-index').value = event.target.parentNode.parentNode.rowIndex;
  let cells = event.target.parentNode.parentNode.childNodes;
  let fields = qsa('.field');
  fields.forEach(function (field, index) {
    field.value = cells[index].innerHTML;
  });
}

/**
* Toggle form buttons.
*/
function toggleFormButtons() {
  toggle('#add');
  toggle('#save');
}

/**
* Save edited values for a row.
*/
function save() {
  let currentIndex = qs('#row-index').value;
  let row = qs('table').rows[currentIndex];
  let cells = row.cells;
  let fields = qsa('.field');

  fields.forEach(function (field, index) {
    cells[index].innerHTML = field.value;
  });

  clean('.field');
  toggleFormButtons();
}
