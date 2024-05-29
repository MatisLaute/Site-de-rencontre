<?php

include 'beconect.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    if (isset($_POST['name'])) {
    
    $requette = $bdd->prepare("UPDATE profile SET pseudo = ? WHERE id LIKE ?");//get tt les pseudo contenet l'element rechercher
    $requette->bind_param("si", $_POST['name'], $_COOKIE["user_id"]);
    $requette->execute();   


    }

    if (isset($_POST['password'])) {
    
        $requette = $bdd->prepare("UPDATE profile SET password = ? WHERE id LIKE ?");//get tt les pseudo contenet l'element rechercher
        $requette->bind_param("si", $_POST['password'], $_COOKIE["user_id"]);
        $requette->execute();   
    
    
    }


    if (isset($_POST['email'])) {
    
        $requette = $bdd->prepare("UPDATE profile SET mail = ? WHERE id LIKE ?");//get tt les pseudo contenet l'element rechercher
        $requette->bind_param("si", $_POST['name'], $_COOKIE["user_id"]);
        $requette->execute();   
    
    
    }

    if (isset($_POST['bio'])) {
    
        $requette = $bdd->prepare("UPDATE profile SET bio = ? WHERE id LIKE ?");//get tt les pseudo contenet l'element rechercher
        $requette->bind_param("si", $_POST['bio'], $_COOKIE["user_id"]);
        $requette->execute();   
    
    
    }


    //debut de tt la partie image
    // Vérifier si le fichier a été téléchargé sans erreur
    if (isset($_FILES['profile_image'])) {
        echo("tt");
        $allowed = ['jpg', 'jpeg', 'PNG', 'gif']; // Extensions autorisées
        $filename = $_FILES['profile_image']['name'];
        $filetype = $_FILES['profile_image']['type'];
        $filesize = $_FILES['profile_image']['size'];

        // Vérifier l'extension du fichier
        $ext = pathinfo($filename, PATHINFO_EXTENSION);
        if (!in_array($ext, $allowed)) {
            die("Erreur : Veuillez sélectionner un format de fichier valide.");
        }

        // Vérifier la taille du fichier - 5Mo maximum
        if ($filesize > 5 * 1024 * 1024) {
            die("Erreur : La taille du fichier est trop grande.");
        }

        // Vérifier le type MIME du fichier
        if (in_array($filetype, ['image/jpeg', 'image/png', 'image/gif'])) {
            // Générer un nouveau nom pour le fichier
            $new_filename = uniqid() . "." . $ext;

            // Chemin de destination
            $destination = '' . $new_filename;
            
            $requette = $bdd->prepare("UPDATE profile SET profile_picture = ? WHERE id LIKE ?");//get tt les pseudo contenet l'element rechercher
            $requette->bind_param("si", $new_filename, $_COOKIE["user_id"]);
            $requette->execute();   





            // Déplacer le fichier téléchargé vers le répertoire de destination
            if (move_uploaded_file($_FILES['profile_image']['tmp_name'], $destination)) {
                echo "Le fichier a été téléchargé avec succès et renommé en $new_filename.";
            } else {
                echo "Erreur : Échec du téléchargement du fichier.";
            }
        } else {
            die("Erreur : Veuillez sélectionner un format de fichier valide.");
        }
    } else {
        //echo "Erreur : " . $_FILES['file']['error'];
    }
} else {
    echo "Erreur : Demande invalide.";
}
header("Location:")
?>
