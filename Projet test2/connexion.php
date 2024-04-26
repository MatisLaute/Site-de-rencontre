<?php
    $pseudoU = $_POST ["uname"];
    $passwordU = $_POST ["psw"];

    $profile = $bdb->prepare("SELECT id, pseudo, password, perm FROM profile WHERE pseudo = ?")
    $profile->bind_param("s", $pseudoU);
    $profile->execute();

    $row = $profile->fetch_assoc();
    
    if ($row["password"] == $passwordU) {
        setcookie('user_id', '', time()-3600, '/', '', false, false);
        setcookie('user_id', $row["id"], time()+3600*24, '/', '', false, false);
        setcookie('user_perm', '', time()-3600, '/', '', false, false);
        setcookie('user_perm', $row["perm"], time()+3600*24, '/', '', false, false);
        header("Location:monProfil.html");
    }
    else {
        header("Location:base.html");
    }

?>