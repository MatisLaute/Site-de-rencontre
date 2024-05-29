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

let messages = [
    /*
    { "type": "received", "text": "Bonjour !" },
    { "type": "sent", "text": "Salut ! Comment ça va ?" },
    { "type": "received", "text": "Ça va bien, merci. Et toi ?" },
    { "type": "sent", "text": "Je vais bien aussi, merci." },
    { "type": "received", "text": "Quoi de neuf ?" },
    { "type": "sent", "text": "Pas grand-chose, juste du boulot." },
    { "type": "received", "text": "Je comprends." },
    { "type": "sent", "text": "Et toi, quoi de neuf ?" },
    { "type": "received", "text": "Pas grand-chose non plus." },
    { "type": "received", "text": "Bonjour !" },
    { "type": "received", "text": "Bonjour !" },
    { "type": "received", "text": "Bonjour !" },
    { "type": "received", "text": "Bonjour !" },
    { "type": "received", "text": "Bonjour !" },
    { "type": "received", "text": "Bonjour !" },
    { "type": "received", "text": "Bonjour !" },
    { "type": "received", "text": "Bonjour !" },
    { "type": "received", "text": "Bonjour !" },
    { "type": "received", "text": "Bonjour !" },
    { "type": "received", "text": "Bonjour !" },
    { "type": "received", "text": "Bonjour !" },
    { "type": "received", "text": "Bonjour !" },
    { "type": "received", "text": "Bonjour !" },
    { "type": "received", "text": "Bonjour !" },
    { "type": "received", "text": "Bonjour !" },
    { "type": "received", "text": "Bonjour !" },
    { "type": "received", "text": "Bonjour !" },
    { "type": "received", "text": "Bonjour !" },
    { "type": "received", "text": "Bonjour !" },
    { "type": "received", "text": "Bonjour !" },
    { "type": "received", "text": "Bonjour !" },
    { "type": "received", "text": "Bonjour !" },
    { "type": "received", "text": "Bonjour !" },
    { "type": "received", "text": "Bonjour !" },
    { "type": "received", "text": "Bonjour !" },
    { "type": "received", "text": "Bonjour !" },
    { "type": "received", "text": "Bonjour !" },
    { "type": "received", "text": "Bonjour !" },
    { "type": "received", "text": "Bonjour !" },
    { "type": "received", "text": "Bonjour !" },
    { "type": "received", "text": "Bonjour !" },

*/
    // Ajoutez ici jusqu'à 30 messages pour la démonstration
];

let lastid = -1;
let displayedMessages = [];
let messagesPerLoad = 2;
let messagesLoaded = 0;
window.msgarray = [];


function load_msg() {
    var conv_Space = document.getElementById("conv");//selectionne la liste ul qui affichera la conv


    var xhr = new XMLHttpRequest();
    
    //selection de la page ou envoyer les donner
    xhr.open("GET", "load_msg.php", false);


    //what to do when you receive a response
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {

            let resparray = xhr.responseText.split('µ');
            //on splitl a reponse en un tableau (une ligne par message)
            for (let index = 0; index < resparray.length - 1; index++) {
                
                msgarray[index] = resparray[index].split('§');//on split chaque message ses information cléf : son id, son
                
            }
                
        }
    };
    xhr.send();
 }

load_msg()



for (let i = 0; i < msgarray.length ; i++) {
    const temp1 = msgarray[i][0];
    const temp2 = msgarray[i][3];
    messages.push({ type: temp1, text: temp2 });
    lastid = msgarray[i][2];
}


document.addEventListener('DOMContentLoaded', () => {
    loadMessages();
    const chatMessages = document.getElementById('chat-messages');
    chatMessages.addEventListener('scroll', () => {
        if (chatMessages.scrollTop === 0 && displayedMessages.length < messages.length) {
            document.getElementById('load-more-container').style.display = 'block';
        }
    });
});

setInterval(laodfrombdb,2000);//regarde si un nouveaux message a été poster dans la bdd tt les 2 s


function loadMessages() {
	


    const chatMessages = document.getElementById('chat-messages');
    const endIndex = messages.length - messagesLoaded;
    const startIndex = Math.max(messages.length - messagesLoaded - messagesPerLoad, 0);
    


    for (let i = startIndex; i <= endIndex; i++) {
        const message = messages[i];
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${message.type}`;
        messageDiv.textContent = message.text;
        chatMessages.appendChild(messageDiv);
        displayedMessages.push(message);
    }
    messagesLoaded += messagesPerLoad;

    if (messagesLoaded >= messages.length) {
        document.getElementById('load-more-container').style.display = 'none';
    }

    chatMessages.scrollTop = chatMessages.scrollHeight; // Défile automatiquement vers le bas
}



function loadMoreMessages() {
    const chatMessages = document.getElementById('chat-messages');
    const oldScrollHeight = chatMessages.scrollHeight;
    messagesLoaded += messagesPerLoad;
    


    temp = messages.length - messagesLoaded - messagesPerLoad;
 
    if (temp < 0) {
        temp = 0;
    }

    const newMessages = messages.slice(temp, messages.length - messagesLoaded);

    let firstchild = chatMessages.firstChild;

    newMessages.forEach(message => {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${message.type}`;
        messageDiv.textContent = message.text;
        chatMessages.insertBefore(messageDiv, firstchild);
        
        
        displayedMessages.push(message);
    });


    if (messagesLoaded >= messages.length - messagesPerLoad) {
        document.getElementById('load-more-container').style.display = 'none';
    }

    chatMessages.scrollTop = chatMessages.scrollHeight - oldScrollHeight; // Maintenir la position de défilement
}



function laodfrombdb() {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "load_new_msg.php", false);
    //what to do when you receive a response
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {

            var resparray = xhr.responseText.split('§');
            
            var message = resparray[3];

            if(resparray[2] == lastid){//verifie que le message loader est diférent du dernier message charger

            }else{

                lastid = resparray[2];
                const newMessage = { type: resparray[0], text: message };
                messages.push(newMessage);
                displayedMessages.push(newMessage); // Ajout du nouveau message à la fin de la liste

                const chatMessages = document.getElementById('chat-messages');
    
                const messageDiv = document.createElement('div');
                messageDiv.className = `message sent`;
                messageDiv.textContent = message;
                chatMessages.appendChild(messageDiv); // Ajouter à la fin de la liste


                messageInput.value = '';
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }

        }
    };
    xhr.send();

}


function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value;

    if (message.trim() === '') {
        return;
    }

    const newMessage = { type: 'sent', text: message };
    messages.push(newMessage);
    displayedMessages.push(newMessage); // Ajout du nouveau message à la fin de la liste

    const chatMessages = document.getElementById('chat-messages');
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `message sent`;
    messageDiv.textContent = message;
    chatMessages.appendChild(messageDiv); // Ajouter à la fin de la liste

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "send_msg.php", false);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            lastid = xhr.responseText;
        }
    };


    xhr.send(JSON.stringify(message));



    messageInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight; // Défile automatiquement vers le bas
}


