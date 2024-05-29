var cookie = document.cookie.split(';')
/*
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
*/
const chatMessages = document.getElementById("list_profile");

var div = '<li onclick="redirect(ss)"><img src="vv">tt</img></li>';

chatMessages.insertAdjacentHTML('beforeend', div);


laodfrombdb();
function laodfrombdb() {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "messagerie.php", false);
    //what to do when you receive a response
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {

            var resparray = xhr.responseText.split(',');
            alert(resparray);
            
            for (let index = 0; index < resparray.length; index++) {
                const element =  resparray[index].split(';');
                alert(resparray[index]);
                var div = '<li onclick="redirect(' + resparray[index][2] + ')"><img src="' + resparray[index][0] + '">' + resparray[index][1] + '</img></li>';
                chatMessages.insertAdjacentHTML('beforeend', div);
                alert(div);
            }
            

            

        }
    };
    xhr.send();

}

function redirect(user2id) {
    let date = new Date(Date.now() + 86400000); //86400000ms = 1 jour
    date = date.toUTCString();

    //Crée ou met à jour un cookie 'user2_id'
    document.cookie = 'user2_id=' + user2id +'; path=/; expires=' + date;

    window.location.replace("acces_msg.php");

}