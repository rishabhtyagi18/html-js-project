// script.js
class Row {
    constructor() {
        this.createRow();
    }

    createRow() {
        // Create a new row element
        const rowDiv = document.createElement('div');
        rowDiv.className = 'row';

        // Create an input box
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Enter something...';

        // Create a button to add more rows
        const addButton = document.createElement('button');
        addButton.className = 'add-button';
        addButton.innerText = 'Add Row';
        addButton.onclick = () => {
            if (input.value.trim() === '') {
                alert('Input is mandatory! Please enter something.');
                return; // Exit the function if input is empty
            }
            new Row(); // Create a new row when the button is clicked
        };

        // Append input and button to the row
        rowDiv.appendChild(input);
        rowDiv.appendChild(addButton);

        // Append the row to the container
        document.getElementById('rowsContainer').appendChild(rowDiv);
    }
}

// Event listener for the initial button to add the first row
document.getElementById('addRowButton').addEventListener('click', () => {
    new Row(); // Create the first row when the button is clicked
});