// script.js
document.addEventListener('DOMContentLoaded', () => {
    const itemList = document.getElementById('itemList');
    const addButton = document.getElementById('addButton');
    const removeButton = document.getElementById('removeButton');
    let itemCount = 0; // To keep track of the number of items

    // Function to add an item to the list
    addButton.addEventListener('click', () => {
        itemCount++;
        const newItem = document.createElement('li'); // Create a new list item
        newItem.textContent = `Item ${itemCount}`; // Set the text content
        itemList.appendChild(newItem); // Append the new item to the list
    });

    // Function to remove the last item from the list
    removeButton.addEventListener('click', () => {
        const lastItem = itemList.lastElementChild; // Get the last item
        if (lastItem) {
            itemList.removeChild(lastItem); // Remove the last item if it exists
        } else {
            alert('No items to remove!'); // Alert if the list is empty
        }
    });
});