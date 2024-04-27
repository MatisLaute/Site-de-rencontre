<?php
    include 'beconect.php';
    $pseudoU = $_POST ["uname"];
    $passwordU = $_POST ["psw"];

    $requette = $bdd->prepare("SELECT id, pseudo, password, perm FROM profile WHERE pseudo = ?");
    $requette->bind_param("s", $pseudoU);
    
    $er = 0;

    try {
        $requette->execute();
        $result = $requette->get_result();
        $row = $result->fetch_assoc();
    } catch (Exception $e) {
        $er = 1;
    }
    
    if ($er == 1) {
        //^pseudo inexistant ou erreur de base de donnée
        header("Location:base.html");
    }

    
    if ($row["password"] == $passwordU) {//stockage de l'id utilisateur et des permition qu'il a dans les cookie en cas de connection réussite
        setcookie('user_id', '', time()-3600, '/', '', false, false);
        setcookie('user_id', $row["id"], time()+3600*24, '/', '', false, false);
        setcookie('user_perm', '', time()-3600, '/', '', false, false);
        setcookie('user_perm', $row["perm"], time()+3600*24, '/', '', false, false);
        header("Location:connecté.html");
    }
    else {
        //mauvais pasword
        header("Location:connexion.html");
    }

?>