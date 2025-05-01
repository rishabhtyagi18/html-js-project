// Explanation
// Mapping: We create a mapping of digits to their corresponding letters 
// using an object called phoneMap.

// Base Case: If the input string digits is empty, we return an empty array.

// Backtracking Function: We define a recursive function backtrack 
// that takes the current index in the digits string and the current combination of letters being formed.

// Combination Formation:

// If the current combination's length matches the length of the input digits, we push it to the result array.
// Otherwise, we retrieve the letters corresponding to the current digit and iterate through each letter,
//  recursively calling backtrack to build the next part of the combination.
// Starting the Process: We initiate the backtracking process by calling backtrack(0, ''),
// starting from the first digit and an empty combination.

// Return Result: Finally, we return the result array containing all possible combinations.


function letterCombinations(digits) {
    if (!digits) return []; // Return an empty array if the input is empty

    const phoneMap = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    const result = []; // This will hold the final combinations

    function backtrack(index, currentCombination) {
        // If the current combination is the same length as digits, we found a valid combination
        if (index === digits.length) {
            result.push(currentCombination);
            return;
        }

        // Get the letters that the current digit maps to
        const letters = phoneMap[digits[index]];

        // Loop through the letters and continue building combinations
        for (let letter of letters) {
            backtrack(index + 1, currentCombination + letter);
        }
    }

    // Start the backtracking process
    backtrack(0, '');

    return result; // Return the final combinations
}

// Test the function
const input = "23";
const output = letterCombinations(input);
console.log(output); // Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]


