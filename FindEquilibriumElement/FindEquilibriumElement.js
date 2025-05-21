function findEquilibriumElement(arr) {
    const totalSum = arr.reduce((acc, num) => acc + num, 0);
    let leftSum = 0;

    for (let i = 0; i < arr.length; i++) {
        // Calculate right sum
        const rightSum = totalSum - leftSum - arr[i];

        // Check if left sum equals right sum
        if (leftSum === rightSum) {
            return arr[i]; // Return the equilibrium element
        }

        // Update left sum for the next iteration
        leftSum += arr[i];
    }

    return null; // No equilibrium element found
}

// Example usage
const array = [1, 3, 5, 2, 2];
const equilibriumElement = findEquilibriumElement(array);

console.log(equilibriumElement); // 5



// # Explanation of the Code
// 1. Total Sum Calculation: We use the reduce method to calculate the total sum of the array.
// 2. Left Sum Initialization: We initialize leftSum to zero.
// 3. Loop Through the Array: We iterate through each element of the array:
//     i. Calculate the rightSum by subtracting the leftSum and the current element from the totalSum.
//     ii. Check if leftSum is equal to rightSum. If they are equal, we return the current element as the equilibrium element.
//     iii. Update leftSum by adding the current element to it for the next iteration.
// 4. Return Statement: If no equilibrium element is found after the loop, we return null.

// #Example
// For the array [1, 3, 5, 2, 2]:

// The equilibrium element is 5 because the sum of elements on the left (1 + 3 = 4) equals the sum of elements on the right (2 + 2 = 4).

