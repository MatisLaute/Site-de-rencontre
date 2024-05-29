<?php
    include 'beconect.php';


    $pseudoU = $_POST ["uname"];
    $passwordU = $_POST ["password"];
    $mailU = $_POST ["email"];

    $stmt = $bdd->prepare("INSERT INTO profile(pseudo, password, mail) VALUES (?, ?, ?)");

// Requête préparée, étape 2 : lie les valeurs et exécute la requête
    $stmt->bind_param("sss", $pseudoU, $passwordU, $mailU);
    $er = 0;

    try{
        $stmt->execute();
    } catch(Exception $e){
        $er = 1;
    }

    if ($er == 1) {
        header("Location:error.html");
    }
    else{
        header("Location:confirmationinscription.html");
    }
?>