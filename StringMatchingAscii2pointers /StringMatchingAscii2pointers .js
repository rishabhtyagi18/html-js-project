function isSubstring(str1, str2) {
    const m = str1.length;
    const n = str2.length;

    // If str1 is longer than str2, it cannot be a substring
    if (m > n) {
        return false;
    }

    // Iterate through str2 with a pointer
    for (let i = 0; i <= n - m; i++) {
        let j;
        // Check if str1 matches str2 starting from index i
        for (j = 0; j < m; j++) {
            // Compare ASCII values
            if (str1.charCodeAt(j) !== str2.charCodeAt(i + j)) {
                break; // Mismatch found
            }
        }
        // If we reached the end of str1, it means we found a match
        if (j === m) {
            return true;
        }
    }
    return false; // No match found
}

// Example usage
const str1 = "abc";
const str2 = "xyzabcdef";
const result = isSubstring(str1, str2);
console.log(`Is "${str1}" a substring of "${str2}"?`, result); // Output: true


// Explanation:
// Function Definition: The function isSubstring takes two strings, str1 and str2.

// Length Check: If str1 is longer than str2, it cannot be a substring, so we return false.

// Outer Loop: The outer loop iterates through str2 up to the point where str1 can still fit.

// Inner Loop: The inner loop checks each character of str1 against the corresponding character in str2 starting from the current index i.

// ASCII Comparison: The characters are compared using their ASCII values with charCodeAt(). If a mismatch is found, the inner loop breaks.

// Match Found: If the inner loop completes without breaking, it means all characters of str1 matched the corresponding characters in str2, and we return true.

// No Match: If the outer loop completes without finding a match, we return false.