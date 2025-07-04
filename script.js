function createTable() {
  // Get table reference
  const table = document.getElementById('myTable');

  // Clear any existing table content
  table.innerHTML = '';

  // Prompt user for rows and columns
  const rowsInput = prompt("Input number of rows");
  const colsInput = prompt("Input number of columns");

  // Parse inputs to integers
  const rows = parseInt(rowsInput);
  const cols = parseInt(colsInput);

  // Validate inputs
  if (
    isNaN(rows) || isNaN(cols) ||
    rows <= 0 || cols <= 0
  ) {
    alert("Please enter positive numeric values for rows and columns.");
    return;
  }

  // Create the table
  for (let i = 0; i < rows; i++) {
    const tr = document.createElement('tr');
    for (let j = 0; j < cols; j++) {
      const td = document.createElement('td');
      td.textContent = `Row-${i} Column-${j}`;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}
