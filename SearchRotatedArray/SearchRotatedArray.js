function searchRotatedArray(arr, target) {
    let left = 0, right = arr.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) return mid;
  
      // Check if left half is sorted
      if (arr[left] <= arr[mid]) {
        if (arr[left] <= target && target < arr[mid]) {
          right = mid - 1;  // Search in the left sorted half
        } else {
          left = mid + 1;   // Search in the right half
        }
      }
      // Else right half is sorted
      else {
        if (arr[mid] < target && target <= arr[right]) {
          left = mid + 1;   // Search in the right sorted half
        } else {
          right = mid - 1;  // Search in the left half
        }
      }
    }
  
    return -1; // Not found
}

const arr = [6, 7, 8, 1, 2, 3, 4, 5];
const index = searchRotatedArray(arr, 3);
console.log(index);  // Output: 5


// #Time & Space Complexity
// Time: O(log n) — like binary search

// Space: O(1) — no extra memory used


  
