<?php
    $abo = $_POST ["subscription"];

    $profile = $bdb->prepare("UPDATE profile SET perm = ? WHERE id = ?")
    $profile->bind_param("si", $abo, $_COOKIE['user_id']);
    $profile->execute();
    setcookie('user_perm', '', time()-3600, '/', '', false, false);
    setcookie('user_perm', $row["perm"], time()+3600*24, '/', '', false, false);

    header("Location:monProfil.html");
?>