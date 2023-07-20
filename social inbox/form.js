const email = document.getElementById("email")
const password = document.getElementById("password");
const form = document.getElementById("form");
const error = document.getElementById("error");

const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '\\', ':', ';', '"', '\'', '<', '>', ',', '.', '?', '/', '`', '~'];



form.addEventListener('submit', (e) => {
    let messages = [];
    let sixCharacters = '6 characters';

    if (password.value.length <= 6) {
        messages.push('Password must be longer than 6 characters');
    }

    if (password.value.length >= 18) {
        messages.push('Password must be shorter than 18 characters.');
    }

    let containsNumber = false;
    for (let i = 0; i < password.value.length; i++) {
        if (!isNaN(parseInt(password.value[i]))) {
            containsNumber = true;
            break;
        }
    }

    if (!containsNumber) {
        messages.push('Password must contain at least one number.');
    }

    let containsSpecialCharacter = false;
    for (let i = 0; i < specialCharacters.length; i++) {
        if (password.value.includes(specialCharacters[i])) {
            containsSpecialCharacter = true;
            break;
        }
    }

    if (!containsSpecialCharacter) {
        messages.push('Password must contain special character.')
    }

    let upperCase = password.value !== password.value.toUpperCase();

    if (upperCase) {
        messages.push('Password must contain uppercase.')
    }

    if (messages.length > 0) {
        e.preventDefault();
        error.innerText = messages.join( '\n');
    }

    error.style.paddingTop = '10px';
    error.style.paddingBottom = '10px';
});