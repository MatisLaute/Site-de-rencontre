
function validateForm() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    if (name == "" || email == "") {
        alert("Nom et Email sont requis.");
        return false;
    }
    if (!email.includes("@")) {
        alert("Email invalide.");
        return false;
    }
    return true;
}
