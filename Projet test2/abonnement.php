<?php
    include 'beconect.php';
    $abo = $_POST ["subscription"];
    
    if (isset($_COOKIE["perm"])) {
        # code...
    }
    else{
        header("Location:conection.html");
    }



    if(!(Isset($_COOKIE["user_perm"]))){
        header("Location:inscription.html");
    }
    switch ($abo) {
        case 'minidate':
            $time_perm = time() + 2628000; //nombre de seconde dans un mois
            break;
        case 'bigdate':
            $time_perm = time() + (2628000 * 3);
            break;
        
        case 'ultimatedate':
            $time_perm = time() + (2628000 * 12);
            break;


        default:
            $time_perm = time();
            break;
    }

    $requette = $bdd->prepare("SELECT perm_time FROM profile WHERE id = ?");
    $requette->bind_param("i", $_COOKIE['user_id']);
    $requette->execute();
    $result = $requette->get_result();
    $row = $result->fetch_assoc();


    switch ($_COOKIE["user_perm"]) {

        case 0:
            $abo = 0;
            $time_perm = 0;
            break;
        case 'bigdate':
            switch ($abo) {
                case 'minidate':
                    $time_perm = $row['perm_time'] + 2628000;
                    $abo = 'bigdate';
                    break; 
            }
            break;
        case 'ultimatedate':
            switch ($abo) {
                case 'minidate':
                    $time_perm = $row['perm_time'] + (2628000 * 3);
                    $abo = 'ultimatedate';
                    break;
                case 'bigdate':
                    $time_perm = $row['perm_time'] + (2628000 * 12);
                    $abo = 'ultimatedate';
                    break; 
            }
            break;
    }





    $profile = $bdd->prepare("UPDATE profile SET perm = ?, perm_time = ? WHERE id = ?");
    $profile->bind_param("sii", $abo, $time_perm, $_COOKIE['user_id']);
    $profile->execute();
    
    setcookie('user_perm', '', time()-3600, '/', '', false, false);
    setcookie('user_perm', $abo, time()+3600*24, '/', '', false, false);

    header("Location:monProfil.html");
?>