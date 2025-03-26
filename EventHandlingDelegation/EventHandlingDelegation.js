// script.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const successMessage = document.getElementById('successMessage');

    // Event delegation for form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Clear previous error messages
        nameError.textContent = '';
        emailError.textContent = '';
        successMessage.textContent = '';

        // Validate inputs
        let isValid = true;

        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Name is required.';
            isValid = false;
        }

        if (!validateEmail(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address.';
            isValid = false;
        }

        // If valid, show success message
        if (isValid) {
            successMessage.textContent = 'Registration successful!';
            // Here you can add your logic to send data to the server
            form.reset(); // Reset the form
        }
    });

    // Function to validate email format
    function validateEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple regex for email validation
        return regex.test(email);
    }
});