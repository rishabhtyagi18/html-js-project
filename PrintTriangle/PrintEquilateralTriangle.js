function printEquilateralTriangle(rows) {
    for (let i = 1; i <= rows; i++) {
        let row = '';

        // Print leading spaces
        for (let j = 1; j <= rows - i; j++) {
            row += ' '; // Append a space
        }

        // Print asterisks
        for (let j = 1; j <= (2 * i - 1); j++) {
            row += '*'; // Append an asterisk
        }

        console.log(row); // Print the row
    }
}

// Test the function
printEquilateralTriangle(5);