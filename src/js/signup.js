import { getCookie, setCookie } from "./Cookies.js";

let usernameInput = document.getElementById("user-name");
let passwordInput = document.getElementById("user-password");
let repasswordInput = document.getElementById("user-repassword");
let emailInput = document.getElementById("user-email");
let signupButton = document.getElementById("submit-btn");
let inputs = [usernameInput, passwordInput, repasswordInput, emailInput]
let user = [];

if (document.cookie.includes("users")) {
    user = JSON.parse(getCookie("users"));
}



function validateInput(input) {
    let isValid = true;
    switch (input.id) {
        case ("user-name"):
            if (input.value.trim() === "" || input.value.length < 3) {
                isValid = false;
            }
            break;
        case ("user-email"):
            let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(input.value.trim())) {
                isValid = false;
            }
            break;
        case ("user-password"):
            if (input.value.length < 6) {
                isValid = false;
            }
            break;
        case ("user-repassword"):
            if (input.value !== passwordInput.value || input.value.trim() === "") {
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
            input.nextElementSibling.classList.remove("d-none");
            signupButton.disabled = true;
        } else {
            input.nextElementSibling.classList.add("d-none");
            input.classList.remove("is-invalid");
        }
    })

    input.addEventListener("input", () => {
        if (validateInput(input)) {
            input.classList.remove("is-invalid");
            input.classList.add("is-valid");
            input.nextElementSibling.classList.add("d-none");
            let allValid = inputs.every(inp => validateInput(inp));
            signupButton.disabled = !allValid;
        } else {
            input.classList.add("is-invalid");
            input.classList.remove("is-valid");
            input.nextElementSibling.classList.remove("d-none");
            signupButton.disabled = true;
        }
    })
})



signupButton.addEventListener("click", (e) => {
    e.preventDefault();
    let valid = true;
    inputs.forEach(input => {
        if (!validateInput(input)) {
            let err = document.getElementById('error-message');
            err.classList.remove('d-none');
            valid = false;
        }
    })
    if (!valid) {
        return;
    }
    let isExist = user.find(u => u.email === emailInput.value.trim());
    if (isExist) {
        let err = document.getElementById('error-message');
        err.innerHTML = "Email is already registered.";
        err.classList.remove('d-none');
        return;
    }
    user.push({
        username: usernameInput.value.trim(),
        email: emailInput.value.trim(),
        password: passwordInput.value.trim()
    });
    setCookie("users", JSON.stringify(user), 7);
    window.location.href = "./index.html";
});



