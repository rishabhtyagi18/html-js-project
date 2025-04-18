function maxSubArraySum(arr) {
    if (arr.length === 0) return 0; // Handle empty array case

    let maxSoFar = arr[0]; // Initialize with the first element
    let maxEndingHere = arr[0]; // Initialize with the first element

    for (let i = 1; i < arr.length; i++) {
        maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]); // Update maxEndingHere
        maxSoFar = Math.max(maxSoFar, maxEndingHere); // Update maxSoFar
    }

    return maxSoFar; // Return the maximum subarray sum
}

// Example usage
const array = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const largestSum = maxSubArraySum(array);
console.log(largestSum); // Outputs: 6 (subarray [4, -1, 2, 1] has the largest sum)