// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const emailValue = emailInput.value;

    // Clear previous error message
    emailError.textContent = '';

    // Validate email format
    if (!validateEmail(emailValue)) {
        emailError.textContent = 'Please enter a valid email address.';
        return; // Stop form submission
    }

    // If validation passes, you can proceed with form submission or further processing
    alert('Login successful!'); // Placeholder for successful login
    // Here you can add your login logic (e.g., API call)
});

// Function to validate email format
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email validation
    return regex.test(email);
}