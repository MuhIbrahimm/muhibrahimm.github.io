// Retrieve username from localStorage
const username = localStorage.getItem('username');
const greeting = document.getElementById('greeting');

// Display greeting
if (username) {
    greeting.textContent = `Hi, ${username}`;
} else {
    // Redirect back to login if no username is found
    window.location.href = 'index.html';
}