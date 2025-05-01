function reverseString(str) {
    let reveresed = '';

    for(let i =  str.length - 1; i >= 0; i--) {
        reveresed += str[i];
    }

    return reveresed;
}

const originalString = "Hello, World!";
const reversedString = reverseString(originalString);
console.log(reversedString);
