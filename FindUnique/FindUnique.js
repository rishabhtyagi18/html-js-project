// Method 1: Using a Frequency Map

function findUnique(arr) {
    const frequencyMap = {};
  
    // Count the frequency of each element
    for (const num of arr) {
      frequencyMap[num] = (frequencyMap[num] || 0) + 1;
    }
  
    // Filter elements that appear exactly once
    return Object.keys(frequencyMap).filter(key => frequencyMap[key] === 1).map(Number);
}

const array = [4, 5, 6, 7, 4, 5, 8, 9, 10, 10];
const uniqueElements = findUnique(array);
console.log(uniqueElements); // Output: [6, 7, 8, 9]


// Method 2: Without using Predefined function

function findUnique(arr) {
    const frequencyMap = {};
    const result = [];
    
    // Count occurrences of each element
    for (let i = 0; i < arr.length; i++) {
      const val = arr[i];
      if (frequencyMap[val] === undefined) {
        frequencyMap[val] = 1;
      } else {
        frequencyMap[val]++;
      }
    }
    
    // Extract elements that appear exactly once
    for (let key in frequencyMap) {
      if (frequencyMap.hasOwnProperty(key) && frequencyMap[key] === 1) {
        // Keys in objects are strings, convert back to number if needed
        const numberKey = Number(key);
        result.push(numberKey);
      }
    }
    
    return result;
}

const arr = [4, 5, 6, 7, 4, 5, 8, 9, 10, 10];
const unique = findUnique(arr);
console.log(unique); // Output: [6, 7, 8, 9]




// Explanation
// We use a plain for loop to iterate over the array manually.
// We build a frequencyMap object to count occurrences of each value.
// We use a for...in loop to iterate over keys in frequencyMap (ensuring via hasOwnProperty).
// We manually convert keys back to numbers (since object keys are strings).
// We append to the result array for each unique element found.
  





  
