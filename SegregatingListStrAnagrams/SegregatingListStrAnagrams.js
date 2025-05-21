/**
 * @param {string[]} strs
 * @return {string[][]}
 */
function groupAnagrams(strs) {
    const map = new Map();
  
    for (const str of strs) {
      // Sort the string characters to form the key
      const key = str.split('').sort().join('');
      if (!map.has(key)) {
        map.set(key, []);
      }
      map.get(key).push(str);
    }
  
    // Return the grouped anagrams as an array of arrays
    return Array.from(map.values());
}

// Example usage:
const inputStrs = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams(inputStrs);
console.log(result);

// [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ], [ '' ] ]
  
// #Explanation
// We split each string into characters, sort them, and join them back to form a key.
// We use a JavaScript Map to store lists of strings with the same sorted key.
// Finally, we convert the map values into an array of arrays for the output.



