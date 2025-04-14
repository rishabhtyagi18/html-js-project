// Function to generate an array of random numbers
function generateRandomArray(size, min, max) {
    const randomArray = [];
    for (let i = 0; i < size; i++) {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        randomArray.push(randomNum);
    }
    return randomArray;
}

// Function to sort the array
function sortArray(arr) {
    return arr.sort((a, b) => a - b); // Sort in ascending order
}

// Example usage
const size = 10; // Size of the array
const min = 1;   // Minimum random number
const max = 100; // Maximum random number

const randomArray = generateRandomArray(size, min, max);
console.log("Random Array:", randomArray);

const sortedArray = sortArray(randomArray);
console.log("Sorted Array:", sortedArray);

// Explanation:
// Generating Random Numbers:

// The generateRandomArray function creates an array of a specified size filled with random numbers between a given minimum and maximum value.
// Sorting the Array:

// The sortArray function sorts the array in ascending order using the sort method. The comparison function (a, b) => a - b ensures that the numbers are sorted numerically rather than lexicographically.
// Example Usage:

// The example generates an array of 10 random numbers between 1 and 100, prints the random array, and then prints the sorted array.






// #Implementing Bubble Sort

// Bubble Sort implementation
function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}

// Example usage
const randomArrayForBubbleSort = generateRandomArray(size, min, max);
console.log("Random Array (Bubble Sort):", randomArrayForBubbleSort);

const sortedArrayBubbleSort = bubbleSort(randomArrayForBubbleSort);
console.log("Sorted Array (Bubble Sort):", sortedArrayBubbleSort);


// Explanation of Bubble Sort:
// Outer Loop: The outer loop runs from the start of the array to the second-to-last element.
// Inner Loop: The inner loop compares adjacent elements and swaps them if they are in the wrong order.
// Swapping: The swapping is done using destructuring assignment to swap the values in place.
// Sorted Array: After all iterations, the array is sorted in ascending order.