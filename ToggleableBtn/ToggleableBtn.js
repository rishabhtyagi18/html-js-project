const toggle = document.getElementById('toggle');
const statusText = document.getElementById('status');

toggle.addEventListener('change', function() {
    if (this.checked) {
        statusText.textContent = 'Status: On';
    } else {
        statusText.textContent = 'Status: Off';
    }
});