function minSwapsToGroupElements(arr, k) {
    let n = arr.length;
    
    // Count elements less than K
    let count = arr.filter(num => num < k).length;
    
    if (count === 0) return 0; // No swaps needed if no elements are less than K

    // Find the max number of elements < K in a window of size 'count'
    let bad = 0; // Elements >= K in the current window
    for (let i = 0; i < count; i++) {
        if (arr[i] >= k) bad++;
    }

    // Sliding window to find the minimum swaps needed
    let minSwaps = bad;
    for (let i = count; i < n; i++) {
        // Remove the first element of previous window
        if (arr[i - count] >= k) bad--;
        // Add the new element of the current window
        if (arr[i] >= k) bad++;
        // Update the minimum swaps needed
        minSwaps = Math.min(minSwaps, bad);
    }

    return minSwaps;
}

// Example usage:
console.log(minSwapsToGroupElements([2, 1, 5, 6, 3], 3)); // Output: 0
console.log(minSwapsToGroupElements([2, 7, 9, 5, 8, 7, 4], 6)); // Output: 2
