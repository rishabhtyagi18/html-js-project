// Explanation
// Initialization: We create an empty array result to store the valid combinations.

// Backtracking Function: The backtrack function takes three parameters:

// start: The index in the candidates array from which to start considering candidates.
// currentCombination: An array that holds the current combination being formed.
// currentSum: The sum of the current combination.
// Base Cases:

// If currentSum equals target, we have found a valid combination, so we push a copy of currentCombination to result.
// If currentSum exceeds target, we return early since further exploration is unnecessary.
// Looping Through Candidates: We loop through the candidates array starting from the start index:

// We add the current candidate to currentCombination.
// We call backtrack recursively, allowing the same candidate to be reused (hence we pass i as the new start).
// After returning from the recursive call, we remove the last candidate from currentCombination to backtrack and explore other combinations.
// Starting the Process: We initiate the backtracking process by calling backtrack(0, [], 0).

// Return Result: Finally, we return the result array containing all unique combinations that sum up to the target.



function combinationSum(candidates, target) {
    const result = []; // This will hold the final combinations

    function backtrack(start, currentCombination, currentSum) {
        // If the current sum equals the target, we found a valid combination
        if (currentSum === target) {
            result.push([...currentCombination]); // Add a copy of the current combination
            return;
        }

        // If the current sum exceeds the target, no need to continue
        if (currentSum > target) {
            return;
        }

        // Loop through the candidates starting from the current index
        for (let i = start; i < candidates.length; i++) {
            currentCombination.push(candidates[i]); // Choose the candidate
            backtrack(i, currentCombination, currentSum + candidates[i]); // Recur with the updated sum
            currentCombination.pop(); // Backtrack to explore other combinations
        }
    }

    // Start the backtracking process
    backtrack(0, [], 0);

    return result; // Return the final combinations
}

// Test the function
const candidates = [2, 3, 6, 7];
const target = 7;
const output = combinationSum(candidates, target);
console.log(output); // Output: [[2,2,3],[7]]