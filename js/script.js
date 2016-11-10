function add() {
  let table = qs('table');
  let fields = qsa('.field');

  insertData(table, fields);
  clean();
}

function toggleFormButtons() {
  toggle('#add');
  toggle('#save');
}

function insertData(table, fields) {
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

function createButton(type) {
  let button = document.createElement('button');
  button.innerHTML = type;
  button.onclick = window[type.toLowerCase()];
  return button;
}

function remove(event) {
  event.target.parentNode.parentNode.remove();
}

function edit(event) {
  toggleFormButtons();
  qs('#row-index').value = event.target.parentNode.parentNode.rowIndex;
  let cells = event.target.parentNode.parentNode.childNodes;
  let fields = qsa('.field');
  fields.forEach(function (field, index) {
    field.value = cells[index].innerHTML;
  });
}

function save() {
  let currentIndex = qs('#row-index').value;
  let row = qs('table').rows[currentIndex];
  let cells = row.cells;
  let fields = qsa('.field');

  fields.forEach(function (field, index) {
    cells[index].innerHTML = field.value;
  });

  clean();
  toggleFormButtons();
}
