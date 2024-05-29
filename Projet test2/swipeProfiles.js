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

// L'index actuel du profil affiché
window.profile = [];






// Éléments du DOM
const profilePhoto = document.getElementById('profile-picture');
const profileUsername = document.getElementById('username');
const profileDescription = document.getElementById('description');
const profileEmail = document.getElementById('email');
const profileGender = document.getElementById('gender');
const profileAbonnement = document.getElementById('abonnement');
const profileAge = document.getElementById('age');
/*
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');
*/
//profileUsername.insertAdjacentHTML("afterbegin", 'ttt');

var xhr = new XMLHttpRequest();
    
//selection de la page ou envoyer les donner
xhr.open("GET", "load_profile.php", false);


//what to do when you receive a response
xhr.onreadystatechange = function () {
    if (xhr.readyState == XMLHttpRequest.DONE) {
 
      const resparray = xhr.responseText.split(';');
      alert(resparray);
      profilePhoto.src = resparray[1];
      profileUsername.textContent = resparray[0];
      profileDescription.textContent = resparray[2];
      profileEmail.textContent = resparray[3];//remplacer par age
      profileGender.textContent = resparray[5];
      profileAbonnement.textContent = resparray[4];

    }
};
xhr.send();

// Fonction pour mettre à jour le profil affiché
function updateProfile() {
  var xhr = new XMLHttpRequest();
    
  //selection de la page ou envoyer les donner
  xhr.open("GET", "load_new_profile.php", false);


  //what to do when you receive a response
  xhr.onreadystatechange = function () {
      if (xhr.readyState == XMLHttpRequest.DONE) {
   
        const resparray = xhr.responseText.split(';');

        profilePhoto.src = resparray[1];
        profileUsername.textContent = resparray[0];
        profileDescription.textContent = resparray[2];
        profileEmail.textContent = resparray[3];//remplacer par age
        profileGender.textContent = resparray[5];
        profileAbonnement.textContent = resparray[4];

      }
  };
  xhr.send();



}

function detailedprofile() {
  window.location.href = "detailprofile.html";
  
}
