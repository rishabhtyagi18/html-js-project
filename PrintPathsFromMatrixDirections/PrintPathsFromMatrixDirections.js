function printPaths(matrix, path = "", row = 0, col = 0) {
    const rows = matrix.length;
    const cols = matrix[0].length;

    // Base case: If we reach the bottom-right corner
    if (row === rows - 1 && col === cols - 1) {
        console.log(path);
        return;
    }

    // Move Right
    if (col < cols - 1) {
        printPaths(matrix, path + 'R', row, col + 1);
    }

    // Move Down
    if (row < rows - 1) {
        printPaths(matrix, path + 'D', row + 1, col);
    }
}

// Example usage with a 2x2 matrix
const matrix = [
    [1, 2],
    [3, 4]
];

console.log("All paths from source to end:");
printPaths(matrix);


// #Explanation:
// Function Definition: The printPaths function takes the matrix, the current path as a string, and the current row and column indices as parameters.

// Base Case: When the current position is the bottom-right corner of the matrix, it prints the accumulated path.

// Recursive Calls:

// If moving right is possible (i.e., the current column is less than the last column), it makes a recursive call to move right and appends 'R' to the path.
// If moving down is possible (i.e., the current row is less than the last row), it makes a recursive call to move down and appends 'D' to the path.
// Example Usage: The function is called with a 2x2 matrix, and it will print all possible paths from the top-left to the bottom-right corner.