import { getCookie } from "./Cookies.js";

let usernameInput = document.getElementById("user-name");
let passwordInput = document.getElementById("user-password");
let signupButton = document.getElementById("submit-btn");
let inputs = [usernameInput, passwordInput];
let users = [];

if (document.cookie.includes("users")) {
    users = JSON.parse(getCookie("users"));
}

function validateInput(input) {
    let isValid = true;
    switch (input.id) {
        case ("user-name"):
            if (input.value.trim() === "" || input.value.length < 3) {
                isValid = false;
            }
            break;
        case ("user-password"):
            if (input.value.length < 6) {
                isValid = false;
            }
            break;
    }
    return isValid;
}

inputs.forEach(input => {
    input.addEventListener("blur", () => {
        if (input.value.trim() === "") {
            input.classList.add("is-invalid");
            signupButton.disabled = true;
        } else {
            input.classList.remove("is-invalid");
        }
    })
    input.addEventListener("input", () => {
        if (validateInput(input)) {
            input.classList.remove("is-invalid");
            input.classList.add("is-valid");
            let allValid = inputs.every(inp => validateInput(inp));
            signupButton.disabled = !allValid;
        } else {
            input.classList.add("is-invalid");
            input.classList.remove("is-valid");
            signupButton.disabled = true;
        }
    })
});

signupButton.addEventListener("click", (e) => {
    e.preventDefault();
    let username = usernameInput.value.trim();
    let password = passwordInput.value;
    let existingUser = users.find(u => u.username === username && u.password === password);
    if (existingUser) {
        window.location.href = "./src/pages/home.html";
    } else {
        let errorDiv = document.getElementById("error-message");
        errorDiv.textContent = "Invalid username or password.";
        errorDiv.classList.remove("d-none");
    }
});