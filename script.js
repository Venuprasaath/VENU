document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Simple validation (example only)
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === 'ramya' && password === 'rm2525') {
        errorMessage.textContent = 'Login successful!';
        errorMessage.style.color = '#00ff00';
    } else {
        errorMessage.textContent = 'Invalid username or password';
        errorMessage.style.color = '#ff0000';
    }
});
