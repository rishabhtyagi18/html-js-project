// script.js
let count = 0; // Initialize counter
const counterDisplay = document.getElementById('counter');
const counterButton = document.getElementById('counterButton');

// Array of colors to change the button color
const colors = ['#28a745', '#007bff', '#ffc107', '#dc3545', '#17a2b8'];

counterButton.addEventListener('click', () => {
    count++; // Increase the counter
    counterDisplay.textContent = `Count: ${count}`; // Update the counter display

    // Change the button color
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    counterButton.style.backgroundColor = randomColor;
});