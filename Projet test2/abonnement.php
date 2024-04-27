<?php
    include 'beconect.php';
    $abo = $_POST ["subscription"];
    
    if(!(Isset($_COOKIE["user_perm"]))){
        header("Location:inscription.html");
    }

    switch ($_COOKIE["user_perm"]) {

        case 0:
            $abo = 0;
            break;
        case 'bigdate':
            switch ($abo) {
                case 'minidate':
                    $abo = 'bigdate';
                    break; 
            }
            break;
        case 'ultimatedate':
            switch ($abo) {
                case 'minidate':
                    $abo = 'ultimatedate';
                    break;
                case 'bigdate':
                    $abo = 'ultimatedate';
                    break; 
            }
            break;
    }

    $profile = $bdd->prepare("UPDATE profile SET perm = ? WHERE id = ?");
    $profile->bind_param("si", $abo, $_COOKIE['user_id']);
    $profile->execute();
    
    setcookie('user_perm', '', time()-3600, '/', '', false, false);
    setcookie('user_perm', $abo, time()+3600*24, '/', '', false, false);

    header("Location:monProfil.html");
?>