function handleSubmit(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (username && password) {
        // Store username in localStorage for the home page
        localStorage.setItem('username', username);
        // Redirect to home page
        window.location.href = 'home.html';
    }
}