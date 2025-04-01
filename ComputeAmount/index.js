function computeAmount() {
    let total = 0;

    return {
        thousand: function (amount) {
            total += amount * 1000; // 1 thousand = 1000
            return this; // Return the current object for chaining
        },
        lacs: function (amount) {
            total += amount * 100000; // 1 lac = 100,000
            return this; // Return the current object for chaining
        },
        crores: function (amount) {
            total += amount * 10000000; // 1 crore = 10,000,000
            return this; // Return the current object for chaining
        },
        value: function () {
            return total; // Return the computed total
        }
    };
}

// Example usage:
const result = computeAmount()
    .thousand(55)
    .lacs(45)
    .crores(43)
    .lacs(14)
    .crores(23)
    .thousand(1)
    .value();

console.log(result); // Output: 665956000