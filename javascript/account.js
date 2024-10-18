const loginButton = document.querySelector('.buttons button:first-child');
const registerButton = document.querySelector('.buttons button:last-child');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

loginButton.addEventListener('click', () => {
    loginButton.classList.add('active');
    registerButton.classList.remove('active');
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
});

registerButton.addEventListener('click', () => {
    loginButton.classList.remove('active');
    registerButton.classList.add('active');
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';

});
registerForm.addEventListener('submit', (event) => {
    if (registerPassword.value !== registerConfirmPassword.value) {
        alert('Passwords do not match.');
        event.preventDefault();
    }
});