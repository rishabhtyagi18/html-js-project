function countFrequency(arr) {
    const frequencyMap = {};
    
    for (let num of arr) {
        if (frequencyMap[num]) {
            frequencyMap[num]++;
        } else {
            frequencyMap[num] = 1;
        }
    }
    
    return frequencyMap;
}

const input = [1, 1, 5, 5, 5, 3, 3];
const output = countFrequency(input);
console.log(output); // Output: {1: 2, 5: 3, 3: 2}
