function deleteUser(email) {
    // Trouvez la ligne correspondante dans le tableau
    const rowToDelete = document.querySelector(`tr td:nth-child(4):contains(${email})`).parentNode;

    // Supprimez la ligne du tableau
    rowToDelete.remove();
}
    // Fonction pour modifier un utilisateur
    function editUser(email) {
        // Afficher le formulaire de modification
        document.getElementById('userForm').style.display = 'block';
        // Pré-remplir les champs avec les données de l'utilisateur
        document.getElementById('editName').value = 'John';
        document.getElementById('editPrenom').value = 'Doe';
        document.getElementById('editPseudo').value = 'JD';
        // Implémentez la logique de modification ici
        console.log('Modifier l\'utilisateur avec l\'email : ' + email);
    }

    // Fonction pour supprimer un utilisateur
    function deleteUser(email) {
        // Implémentez la logique de suppression ici
        console.log('Supprimer l\'utilisateur avec l\'email : ' + email);
    }

    // Fonction pour afficher les détails d'un utilisateur
    function viewUserDetails(email) {
        // Implémentez la logique d'affichage des détails ici
        console.log('Afficher les détails de l\'utilisateur avec l\'email : ' + email);
    }

    // Fonction pour ajouter un nouvel utilisateur
    function addNewUser() {
        // Implémentez la logique d'ajout d'utilisateur ici
        console.log('Ajouter un nouvel utilisateur');
    }

    // Fonction pour rechercher un utilisateur
    function searchUser() {
        const searchValue = document.getElementById('searchInput').value;
        // Implémentez la logique de recherche ici
        console.log('Rechercher l\'utilisateur : ' + searchValue);
    }

    // Fonction pour enregistrer les modifications de l'utilisateur
// Fonction pour enregistrer les modifications de l'utilisateur
function saveUserChanges() {
const newName = document.getElementById('editName').value;
const newPrenom = document.getElementById('editPrenom').value;
const newPseudo = document.getElementById('editPseudo').value;
const newPassword = document.getElementById('editPassword').value;
const newImage = document.getElementById('editImage').value; // Note: You'll need to handle image uploads separately

// Implémentez la logique pour sauvegarder les modifications dans la base de données
// (mise à jour du nom, prénom, pseudo, mot de passe, image, etc.)

console.log('Enregistrer les modifications pour l\'utilisateur :', {
    newName,
    newPrenom,
    newPseudo,
    newPassword,
    newImage,
});
}

// Fonction pour afficher les messages des utilisateurs avec lesquels l'utilisateur a communiqué
function showUserMessages(userId) {
// Implémentez la logique pour récupérer les messages associés à l'utilisateur
// avec l'ID `userId` depuis la base de données

// Exemple : récupérez les messages d'une conversation entre l'utilisateur actuel
// et l'utilisateur avec l'ID `userId`

console.log('Afficher les messages de l\'utilisateur avec l\'ID :', userId);
}

// Exemple d'utilisation : lorsque l'utilisateur clique sur un bouton "Messages"
const otherUserId = '123'; // Remplacez par l'ID de l'autre utilisateur
showUserMessages(otherUserId);
    // Fonction pour afficher les messages d'un utilisateur
    function showUserMessages(userId) {
        // Implémentez la logique pour récupérer les messages associés à l'utilisateur
        // avec l'ID `userId` depuis la base de données

        // Exemple : récupérez les messages d'une conversation entre l'utilisateur actuel
        // et l'utilisateur avec l'ID `userId`

        // Affichez les messages dans la liste
        const messageList = document.getElementById('messageList');
        messageList.innerHTML = ''; // Effacez les messages précédents

        // Exemple de messages (à remplacer par les vrais messages)
        const messages = [
            'Salut User 1, comment ça va ?',
            'Ça va bien, merci ! Et toi ?',
            'Super !',
        ];

        messages.forEach(message => {
            const li = document.createElement('li');
            li.textContent = message;
            messageList.appendChild(li);
        });

        // Affichez la section des messages
        document.getElementById('messageContainer').style.display = 'block';
    }
