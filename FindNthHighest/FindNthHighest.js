function findNthHighest(arr, n) {
    // Remove duplicates by converting to a Set and back to an array
    const uniqueArr = [...new Set(arr)];
    
    // Sort the array in descending order
    uniqueArr.sort((a, b) => b - a);
    
    // Check if n is within the bounds of the array
    if (n > uniqueArr.length) {
        return null; // or throw an error
    }
    
    // Return the nth highest number
    return uniqueArr[n - 1];
}

// Example usage
// const numbers = [3, 1, 4, 4, 5, 2];
// const nthHighest = findNthHighest(numbers, 2); // 4
// console.log(nthHighest);



// #Using a Set and Array Methods

function findNthHighest(arr, n) {
    // Use Set to remove duplicates
    const uniqueArr = Array.from(new Set(arr));
    
    // Sort the unique array in descending order
    uniqueArr.sort((a, b) => b - a);
    
    // Check if n is within the bounds of the array
    if (n > uniqueArr.length) {
        return null; // or throw an error
    }
    
    // Return the nth highest number
    return uniqueArr[n - 1];
}

// Example usage
// const numbers = [7, 5, 3, 9, 1, 9, 5];
// const nthHighest = findNthHighest(numbers, 3); // 5
// console.log(nthHighest);


// #Using a Min-Heap

function findNthHighest(arr, n) {
    if (n > arr.length) return null; // or throw an error

    // Create a min-heap of size n
    const minHeap = [];

    for (const num of arr) {
        // Add the number to the heap
        minHeap.push(num);
        // If the heap size exceeds n, remove the smallest element
        if (minHeap.length > n) {
            minHeap.sort((a, b) => a - b);
            minHeap.shift(); // Remove the smallest element
        }
    }

    // The root of the min-heap is the nth highest number
    return minHeap[0];
}

// Example usage
const numbers = [12, 3, 5, 7, 19];
const nthHighest = findNthHighest(numbers, 2); // 12
console.log(nthHighest);