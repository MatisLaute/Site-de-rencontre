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
    xhr.open("GET", "detailprofile.php", true);

    

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
            alert(resparray[4]);
            if (resparray[4] === '1') {
                profileAbonnement.textContent = "non abonée";
            } else if(resparray[4] === '0') {
                profileAbonnement.textContent = "Admin";
            } else {
                alert('tt');
                profileAbonnement.textContent = resparray[4];
            }
            
            profileAbonnement.textContent = resparray[4];
            profileAge.textContent = resparray[3];
            
        }
    };
    xhr.send();
    }
