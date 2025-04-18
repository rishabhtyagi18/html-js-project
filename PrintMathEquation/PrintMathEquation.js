function printMathEquation(num1, operator, num2) {
    let equation;

    // Construct the equation based on the operator
    switch (operator) {
        case '+':
            equation = `${num1} + ${num2} = ${num1 + num2}`;
            break;
        case '-':
            equation = `${num1} - ${num2} = ${num1 - num2}`;
            break;
        case '*':
        case '×':
            equation = `${num1} * ${num2} = ${num1 * num2}`;
            break;
        case '/':
            if (num2 !== 0) {
                equation = `${num1} / ${num2} = ${num1 / num2}`;
            } else {
                equation = 'Division by zero is undefined.';
            }
            break;
        default:
            equation = 'Invalid operator. Please use +, -, *, or /.';
    }

    // Print the equation
    console.log(equation);
}

// Example usage
printMathEquation(5, '+', 3); // Output: 5 + 3 = 8
printMathEquation(10, '-', 4); // Output: 10 - 4 = 6
printMathEquation(7, '*', 2);  // Output: 7 * 2 = 14
printMathEquation(8, '/', 0);   // Output: Division by zero is undefined.