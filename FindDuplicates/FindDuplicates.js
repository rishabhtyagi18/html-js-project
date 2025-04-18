// # Using a Set

function findDuplicates(arr) {
    const seen = new Set();
    const duplicates = new Set();

    for (const item of arr) {
        if (seen.has(item)) {
            duplicates.add(item);
        } else {
            seen.add(item);
        }
    }

    return Array.from(duplicates);
}

// Example usage
// const numbers = [1, 2, 3, 4, 5, 1, 2, 6, 7, 3];
// const duplicates = findDuplicates(numbers);
// console.log(duplicates); // Outputs: [1, 2, 3]


// # Using a Set

function findDuplicates(arr) {
    const counts = {};
    const duplicates = [];

    for (const item of arr) {
        counts[item] = (counts[item] || 0) + 1;
    }

    for (const [key, value] of Object.entries(counts)) {
        if (value > 1) {
            duplicates.push(key);
        }
    }

    return duplicates;
}

// Example usage
// const numbers = [1, 2, 3, 4, 5, 1, 2, 6, 7, 3];
// const duplicates = findDuplicates(numbers);
// console.log(duplicates); // Outputs: ['1', '2', '3']



// # Using Array.prototype.filter()

function findDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) !== index);
}

// Example usage
// const numbers = [1, 2, 3, 4, 5, 1, 2, 6, 7, 3];
// const duplicates = [...new Set(findDuplicates(numbers))]; // Remove duplicates from the result
// console.log(duplicates); // Outputs: [1, 2, 3]


// # Using Array.prototype.reduce()

function findDuplicates(arr) {
    return arr.reduce((acc, item) => {
        if (acc.seen.has(item) && !acc.duplicates.has(item)) {
            acc.duplicates.add(item);
        }
        acc.seen.add(item);
        return acc;
    }, { seen: new Set(), duplicates: new Set() }).duplicates;
}

// Example usage
const numbers = [1, 2, 3, 4, 5, 1, 2, 6, 7, 3];
const duplicates = Array.from(findDuplicates(numbers));
console.log(duplicates); // Outputs: [1, 2, 3]