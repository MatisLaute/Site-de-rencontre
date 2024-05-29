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


// Simulons une vérification des permissions ici
const utilisateurEstAdmin = true; // Remplacez par la logique réelle

// Récupérez l'élément bouton par son ID
const boutonAdmin = document.getElementById("adminButton");

if (1) {
    // Affichez le bouton si l'utilisateur a les permissions d'administrateur
    boutonAdmin.style.display = "block";

    // Ajoutez un gestionnaire d'événements pour la redirection
    boutonAdmin.addEventListener("click", () => {
        // Redirigez l'utilisateur vers la page admin.html
        window.location.href = "http://localhost/phpmyadmin/index.php?route=/database/structure&db=user";
    });
} else {
    // Masquez le bouton sinon
    boutonAdmin.style.display = "none";
}


const profilePhoto = document.getElementById('profile-picture');
const profileUsername = document.getElementById('username');
const profileDescription = document.getElementById('description');
const profileEmail = document.getElementById('email');
const profileGender = document.getElementById('gender');
const profileAbonnement = document.getElementById('abonnement');
const profileAge = document.getElementById('age');

loadProfile();


function loadProfile() {

    var xhr = new XMLHttpRequest();
    
    //selection de la page ou envoyer les donner
    xhr.open("GET", "myprofile.php", true);

    

    //what to do when you receive a response
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
    
           

            var resparray = xhr.responseText.split(';');
            //on split la reponce en plusieur tableaux
            profilePhoto.src = resparray[1];
            profileUsername.textContent = resparray[0];
            profileDescription.textContent = resparray[2];
            profileEmail.textContent = resparray[3];//remplacer par age
            profileGender.textContent = resparray[5];
            if (resparray[4] === '1') {
                profileAbonnement.textContent = "non abonée";
            } else if(resparray[4] === '0') {
                profileAbonnement.textContent = "Admin";
            } else {
                profileAbonnement.textContent = resparray[4];
            }
            
            profileAbonnement.textContent = resparray[4];
            profileAge.textContent = resparray[3];
            
        }
    };
    xhr.send();
    }


    function deconnexion() {
        // Supprimez le cookie ou la valeur de stockage local représentant l'état de connexion de l'utilisateur
        document.cookie = 'conv_id=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC'; 
        document.cookie = 'user_id=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC'; 
        document.cookie = 'user2_id=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC'; 
        document.cookie = 'user_perm=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC'; 

        alert("Vous avez été déconnecté avec succès !");
        window.location.href = "base.html";
        
    }