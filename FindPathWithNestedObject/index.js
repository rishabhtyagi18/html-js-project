function findPath(obj, target, path = []) {
    for (let key in obj) {
        let newPath = [...path, key]; // Track the path
        
        if (obj[key] === target) {
            return newPath; // Found the target, return the path
        }
        
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            let result = findPath(obj[key], target, newPath);
            if (result) return result; // Return path if found
        }
    }
    return null; // Value not found
}

// Example Usage
const nestedObj = {
    a: {
        b: {
            c: 42,
            d: {
                e: 99
            }
        }
    },
    x: {
        y: {
            z: 42
        }
    }
};

console.log(findPath(nestedObj, 42));  // Output: ["a", "b", "c"]
console.log(findPath(nestedObj, 99));  // Output: ["a", "b", "d", "e"]
console.log(findPath(nestedObj, 100)); // Output: null
