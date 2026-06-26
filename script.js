function checkPassword() {
    let password = document.getElementById("password").value;
    let strength = "Weak";

    if (password.length > 8 &&
        /[A-Z]/.test(password) &&
        /[0-9]/.test(password) &&
        /[!@#$%^&*]/.test(password)) {
        strength = "Strong";
    } 
    else if (password.length > 6) {
        strength = "Medium";
    }

    document.getElementById("result").innerText = "Strength: " + strength;
}

function checkURL() {
    let url = document.getElementById("url").value;

    if (url.includes("https") && url.length < 50) {
        document.getElementById("urlResult").innerText = "Safe URL ✅";
    } else {
        document.getElementById("urlResult").innerText = "Suspicious URL ⚠️";
    }
}