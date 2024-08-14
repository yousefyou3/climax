// auth.js

// Handle user login
function handleLogin(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form data
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Perform basic validation (you can replace this with your own logic)
    if (email && password) {
        // Check if the user credentials are valid
        if (isValidUser(email, password)) {
            // Set login status
            localStorage.setItem('isLoggedIn', 'true');

            // Redirect to home page
            window.location.href = 'index.html'; // Adjust the path as needed
        } else {
            // Show an error message
            const message = document.getElementById('login-message');
            message.textContent = 'Invalid email or password';
            message.className = 'error';
        }
    }
}

// Handle user signup
function handleSignup(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form data
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirmPassword = document.getElementById('signup-confirm-password').value;

    // Perform basic validation
    if (name && email && password && confirmPassword) {
        if (password === confirmPassword) {
            // Simulate saving user data (replace this with actual data storage logic)
            saveUser(name, email, password);

            // Set login status
            localStorage.setItem('isLoggedIn', 'true');

            // Show a success message and redirect
            const message = document.getElementById('signup-message');
            message.textContent = 'Signup successful! You can now login.';
            message.className = 'success';

            // Redirect to home page or login page after some time
            setTimeout(() => {
                window.location.href = 'index.html'; // Redirect to the home page
            }, 2000); // Redirect after 2 seconds
        } else {
            // Show error message
            const message = document.getElementById('signup-message');
            message.textContent = 'Passwords do not match';
            message.className = 'error';
        }
    }
}

// Simulate user validation (replace this with actual validation logic)
function isValidUser(email, password) {
    // Example validation: Check if credentials match a hardcoded user (replace with actual validation)
    return email === 'test@example.com' && password === 'password123';
}

// Simulate saving user data (replace this with actual data storage logic)
function saveUser(name, email, password) {
    // Example: Save user data in localStorage (replace with actual data storage)
    localStorage.setItem('user', JSON.stringify({ name, email, password }));
}

// Handle user logout
function handleLogout() {
    // Clear login status
    localStorage.removeItem('isLoggedIn');

    // Redirect to login page
    window.location.href = 'login.html'; // Adjust the path as needed
}

// Add event listeners for login and signup forms
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }
});