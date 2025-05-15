function findLeaders(arr) {
    const leaders = [];
    const n = arr.length;
  
    // Start from the rightmost element
    let maxFromRight = arr[n - 1];
    leaders.push(maxFromRight); // The rightmost element is always a leader
  
    // Traverse the array from right to left
    for (let i = n - 2; i >= 0; i--) {
      if (arr[i] > maxFromRight) {
        leaders.push(arr[i]);
        maxFromRight = arr[i]; // Update the maximum from the right
      }
    }
  
    // Reverse the leaders array to maintain the original order
    return leaders.reverse();
}
  
const array = [16, 17, 4, 3, 5, 2];
const leaders = findLeaders(array);
console.log(leaders); // Output: [17, 5, 2]


// # Explanation

// 1. Initialization
// We initialize an empty array leaders to store the leader elements we find.
// We also store the length of the input array in the variable n for convenience.

// 2. Start from the Rightmost Element
// We set maxFromRight to the last element of the array (arr[n - 1]). 
// This is because the rightmost element is always considered a leader (there are no elements to its right).
// We immediately push this element into the leaders array.

// 3. Traverse the Array from Right to Left
// We start a loop that iterates from the second-to-last element (n - 2) down to the first element (0).
// This is done in reverse order because we want to compare each element with the maximum value found to its right.

// 4. Check for Leaders
// Inside the loop, we check if the current element arr[i] is greater than maxFromRight.
// If it is, this means that arr[i] is a leader, so we push it into the leaders array.
// We then update maxFromRight to be the current element arr[i], as it will now be the maximum value for the next elements to the left.

// 5. Reverse the Result
// After the loop completes, the leaders array contains the leader elements but in reverse order 
// (since we traversed the array from right to left).
// We use the reverse() method to reverse the leaders array back to the original order before returning it.


// #Example Walkthrough
// Let's consider an example to illustrate how the function works:

// Initialization:

// leaders = []
// n = 6 (length of the array)
// maxFromRight = 2 (last element)
// leaders = [2]
// Iteration:

// i = 4: arr[4] = 5
// 5 > 2 → leaders = [2, 5], maxFromRight = 5
// i = 3: arr[3] = 3
// 3 > 5 → (not a leader)
// i = 2: arr[2] = 4
// 4 > 5 → (not a leader)
// i = 1: arr[1] = 17
// 17 > 5 → leaders = [2, 5, 17], maxFromRight = 17
// i = 0: arr[0] = 16
// 16 > 17 → (not a leader)
// Final Step:

// The leaders array is [2, 5, 17], which is reversed to [17, 5, 2] before returning.


// #Time Complexity
// The time complexity of this algorithm is (O(n)), where (n) is the number of elements in the array, as we traverse the array only once.