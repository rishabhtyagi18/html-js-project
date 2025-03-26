// script.js
document.getElementById('dataForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Create a card for the submitted data
    createCard(name, email);

    // Clear the form
    this.reset();
});

// Function to create a card
function createCard(name, email) {
    const cardsContainer = document.getElementById('cardsContainer');
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `<h3>${name}</h3><p>${email}</p>`;
    cardsContainer.appendChild(card);
}

// Function to fetch data from an API
async function fetchData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        populateTable(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Function to populate the table with fetched data
function populateTable(data) {
    const tableBody = document.getElementById('tableBody');
    data.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${user.name}</td><td>${user.email}</td>`;
        tableBody.appendChild(row);
    });
}

// Call fetchData on page load
window.onload = fetchData;