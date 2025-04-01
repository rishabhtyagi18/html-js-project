function memoize(fn) {
    const cache = new Map(); // Create a cache to store results

    return function(...args) {
        const key = JSON.stringify(args); // Create a unique key for the arguments

        if (cache.has(key)) {
            console.log('Fetching from cache for:', args);
            return cache.get(key); // Return cached result if it exists
        }

        console.log('Calculating result for:', args);
        const result = fn(...args); // Call the original function
        cache.set(key, result); // Store the result in cache
        return result; // Return the result
    };
}

// Example usage
function expensiveFunction(num) {
    // Simulate an expensive computation
    let result = 0;
    for (let i = 0; i < 1e6; i++) {
        result += i * num;
    }
    return result;
}

// Create a memoized version of the expensive function
const memoizedExpensiveFunction = memoize(expensiveFunction);

// Test the memoized function
console.log(memoizedExpensiveFunction(5)); // Calculating result for: [5]
console.log(memoizedExpensiveFunction(5)); // Fetching from cache for: [5]
console.log(memoizedExpensiveFunction(10)); // Calculating result for: [10]
console.log(memoizedExpensiveFunction(10)); // Fetching from cache for: [10]