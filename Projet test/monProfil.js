
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
