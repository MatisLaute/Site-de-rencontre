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


if (perm == 1) {
    alert("abonnée vous");
    window.location.replace('abonnement.html');
}


function load_msg() {
    alert("start function");
    var conv_Space = document.getElementById("conv");//selectionne la liste ul qui affichera la conv

     
    var xhr = new XMLHttpRequest();
    
    //selection de la page ou envoyer les donner
    xhr.open("GET", "load_profile.php", true);


    pseudo.insertAdjacentHTML('beforeend', "test");
    //what to do when you receive a response
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {

            var resparray = xhr.responseText.split('§');
            alert(resparray[0]);
            //on splitl a reponce en plusieur tableaux
            var msg = '<li classe="' + resparray[0] + '"> ' + resparray[2] + ' </li> <li classe="' + resparray[0] + '_timestemp"> ' + resparray[1] + '</li>';
            propose.insertAdjacentHTML("afterbegin", msg);

        }
    };
    xhr.send();
    }


function afficher_conv() {

    setTimeout(() => {//on set un delay d'attendte pour etre sur que la fonc
        
        while (list.hasChildNodes()) {//remoov les resultat précédent
            conv_Space.removeChild(list.firstChild);
        }

        for (let index = 0; index < 30; index++) {//
            load_msg();
        }
    }, 1000);


}

afficher_conv();