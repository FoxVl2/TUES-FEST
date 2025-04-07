function showLogin() {
    document.getElementById("login-container").style.display = "block";
    document.getElementById("register-container").style.display = "none";
    document.getElementById("forgot-password-container").style.display = "none";
}

function showRegister() {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("register-container").style.display = "block";
    document.getElementById("forgot-password-container").style.display = "none";
}

function showForgotPassword() {
    document.getElementById("login-container").style.display = "none";
    document.getElementById("register-container").style.display = "none";
    document.getElementById("forgot-password-container").style.display = "block";
}

function register() {
    let email = document.getElementById("register-email").value;
    let password = document.getElementById("register-password").value;
    let errorMessages = [];
    
    if (password.length < 6) {
        errorMessages.push("Паролата трябва да е поне 6 символа!");
    }
    
    if (!/[A-Z]/.test(password)) {
        errorMessages.push("Паролата трябва да съдържа поне една главна буква!");
    }

    if (!/\d/.test(password)) {
        errorMessages.push("Паролата трябва да съдържа поне една цифра!");
    }

    if (!email || !password) {
        errorMessages.push("Попълни всички полета!");
    }
    
    if (errorMessages.length > 0) {
        alert(errorMessages.join("\n"));
        return;
    }
    
    let users = JSON.parse(localStorage.getItem("ttw_users")) || [];
    if (users.some(user => user.email === email)) {
        alert("Имейлът вече е регистриран!");
        return;
    }
    
    users.push({ email, password });
    localStorage.setItem("ttw_users", JSON.stringify(users));
    alert("Успешна регистрация! Влез в акаунта си.");
    showLogin();
}

function login() {
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;
    
    let users = JSON.parse(localStorage.getItem("ttw_users")) || [];
    let user = users.find(user => user.email === email && user.password === password);
    
    if (user) {
        alert("Успешен вход!");
        localStorage.setItem("ttw_currentUser", email);
        window.location.href = "index.html"; 
    } else {
        alert("Грешен имейл или парола!");
    }
}

function forgotPassword() {
    let email = document.getElementById("forgot-email").value;
    let users = JSON.parse(localStorage.getItem("ttw_users")) || [];
    let user = users.find(user => user.email === email);
    
    if (!user) {
        alert("Имейлът не е намерен!");
        return;
    }
    
    let newPassword = prompt("Въведи нова парола:");
    if (!newPassword) return;
    
    user.password = newPassword;
    localStorage.setItem("ttw_users", JSON.stringify(users));
    alert("Паролата е сменена успешно!");
    showLogin();
}