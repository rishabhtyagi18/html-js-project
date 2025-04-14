function maxSubarraySum(array) {
    let maxSoFar = array[0]; // Initialize with the first element
    let maxEndingHere = array[0]; // Initialize with the first element

    for (let i = 1; i < array.length; i++) {
        maxEndingHere = Math.max(array[i], maxEndingHere + array[i]); // Update maxEndingHere
        maxSoFar = Math.max(maxSoFar, maxEndingHere); // Update maxSoFar
    }

    return maxSoFar;
}

// Example usage
const inputArray1 = [34, -50, 42, 14, -5, 86];
console.log(maxSubarraySum(inputArray1)); // Output: 137

const inputArray2 = [-5, -1, -8, -9];
console.log(maxSubarraySum(inputArray2)); // Output: -1


// Explanation of the Code:
// Function Definition: The function maxSubarraySum takes an array of integers as input.

// Initialization:

// maxSoFar and maxEndingHere are both initialized to the first element of the array.
// Loop Through the Array:

// Starting from the second element, we update maxEndingHere to be the maximum of the current element or the sum of maxEndingHere and the current element.
// We then update maxSoFar to be the maximum of itself and maxEndingHere.
// Return Result: Finally, the function returns maxSoFar, which contains the maximum subarray sum.