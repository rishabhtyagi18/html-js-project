function printRightAngledTriangle(rows) {
    for (let i = 1; i <= rows; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '* '; // Append an asterisk followed by a space
        }
        console.log(row.trim()); // Print the row, trimming any trailing space
    }
}

// Test the function
printRightAngledTriangle(5);
