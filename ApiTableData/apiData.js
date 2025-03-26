// script.js
const apiUrl = 'https://fakestoreapi.com/products'; // Replace with your API URL

async function fetchData() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        populateTable(data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function populateTable(data) {
    const tableBody = document.getElementById('table-body');
    tableBody.innerHTML = ''; // Clear existing data

    data.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.title}</td>
            <td>${item.description}</td>
            <td>${item.price}</td>
            <td><img src="${item.image}" alt="${item.title}" style="width: 100px;"></td>
        `;
        tableBody.appendChild(row);
    });
}

// Call the fetchData function to load data when the page loads
fetchData();