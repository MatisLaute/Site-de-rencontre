function searchUpdate() {
    //a besoin d'une structure sous la forme <ul id="proposeList"></ul> pour fonctionner
    var data = document.getElementById("searchbare").value;

   

    const list = document.getElementById("proposeList");//retire les resultat précedent
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }

    var xhr = new XMLHttpRequest();

    //selection de la page ou envoyer les donner
    xhr.open("POST", "searchbare.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    //what to do when you receive a response
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            var resparray = xhr.responseText.split(',|,');
            var pseudolist = resparray[0].split(',');
            var idlist = resparray[1].split(',');
            //on split la reponce en plusieur tableaux
            var propose = document.getElementById("proposeList");
            

            for (let index = 0; index < pseudolist.length; index++) {
                var ligne = '<li><button onclick="toprofile(' + idlist[index] + ')">' + pseudolist[index] + '</button></li>';
                propose.insertAdjacentHTML('beforeend', ligne);
            }
            
        }
    };

    //l'envoi des donnée
    xhr.send(JSON.stringify(data));
}

function toprofile(idu2) {//on set les cookie pour que la page suivent save quel profile ouvrir
    

    document.cookie = 'user2_id=' + idu2 + '; max-age=86400; path=/';//24h*60min*60s = 86400

    window.location.href="base.html"
}

