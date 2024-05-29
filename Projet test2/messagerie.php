<?php
    include 'beconect.php';

//recherche les profile avec qui on deja eu une conv pour les afficher
$requette = $bdd->prepare("SELECT idu1, idu2, id FROM conv WHERE idu1 = ? OR idu2 = ?");
$requette->bind_param("ii", $_COOKIE['user_id'],$_COOKIE['user_id']);//affiche tt les message si on a les perm admin
$requette->execute();
$result = $requette->get_result();  

$row = $result->fetch_assoc();

if ($row == null) {
    # code...
}
else{
do {
    
    if ($row["idu1"] == $_COOKIE["user_id"]) {
        $iduser2 = $row["idu2"];
        $requette2 = $bdd->prepare("SELECT profile_picture, pseudo FROM profile WHERE id = ?");
        $requette2->bind_param("i", $iduser2);
        $requette2->execute();
        $vv = $requette2->get_result();
        $tim = $vv->fetch_assoc();
    }
    else {
        $iduser2 = $row["idu1"];
        $requette2 = $bdd->prepare("SELECT profile_picture, pseudo FROM profile WHERE id = ?");
        $requette2->bind_param("i", $iduser2);
        $requette2->execute();
        $vv = $requette2->get_result();
        $tim = $vv->fetch_assoc();
    }



    echo ($tim['profile_picture'] . ";" . $tim['pseudo'] . ";" . $iduser2);

    echo(",");

    $row = $result->fetch_assoc();//affcihe le next profile

} while ($row != NULL);

}

?>