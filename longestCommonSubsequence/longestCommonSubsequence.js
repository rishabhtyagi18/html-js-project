function lcsRecursive(X, Y, m, n) {
    // Base case: If either string is empty
    if (m === 0 || n === 0) {
        return 0;
    }

    // If the last characters match
    if (X[m - 1] === Y[n - 1]) {
        return 1 + lcsRecursive(X, Y, m - 1, n - 1);
    } else {
        // If the last characters do not match
        return Math.max(lcsRecursive(X, Y, m, n - 1), lcsRecursive(X, Y, m - 1, n));
    }
}

// Example usage
const X = "AGGTAB";
const Y = "GXTXAYB";
const m = X.length;
const n = Y.length;

console.log("Length of LCS is", lcsRecursive(X, Y, m, n));


// Explanation:
// Base Case: The function checks if either string is empty (m === 0 or n === 0). If so, it returns 0 because the LCS of an empty string is 0.

// Matching Characters: If the last characters of both strings match (X[m - 1] === Y[n - 1]), the function returns 1 plus the result of the LCS of the remaining substrings.

// Non-Matching Characters: If the last characters do not match, the function returns the maximum of:

// The LCS of the first string and the second string without the last character of the second string.
// The LCS of the first string without the last character and the second string.