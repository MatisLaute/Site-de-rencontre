var cookie = document.cookie.split(';')

for (let index = 0; index < cookie.length; index++) {
    cookie[index] = cookie[index].split('=');
    cookie[index][0] = cookie[index][0].trim();
    
    if (cookie[index][0].localeCompare('user_perm') == 0) {
        var perm = cookie[index][1];
    }
}


if ((typeof perm).trim() == 'undefined') {
    alert("connectee vous");
    window.location.replace('connexion.html');
}





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


        function previewImage() {
            var file = document.getElementById("profile_image").files[0];
            var reader = new FileReader();

            reader.onloadend = function () {
                document.getElementById("image_preview").src = reader.result;
                document.getElementById("image_preview").style.display = "block";
            }

            if (file) {
                reader.readAsDataURL(file);
            } else {
                document.getElementById("image_preview").src = "";
                document.getElementById("image_preview").style.display = "none";
            }
        }
