<?php
include 'beconect.php';
$u2 = $_POST["contacted_user"];

$requette = $bdd->prepare("SELECT id FROM profile WHERE pseudo = ?");//recupe de l'id utilisateur que l'on veux contacter
$requette->bind_param("s", $u2);
$requette->execute();
$result = $requette->get_result();
$row = $result->fetch_assoc();
$idu2 = $row['id'];//id utilisateur a contacter

setcookie('user2_id', '', time()-3600, '/', '', false, false);
setcookie('user2_id', $idu2, time()+3600*24, '/', '', false, false);
//cookie preset qui servira a savoir avec quelle utilisateur on interagie (utiliser pour afficher le profile de user2 par exemple)

//prepare la requette
$requette = $bdd->prepare("SELECT id, idu1, id2, isblock FROM conv WHERE idu1 = ? AND idu2 = ?");
//prend tt les conv démarer par l'utilisateur actuelle ou l'autre persone est user2
$requette->bind_param("ii", $_COOKIE['user_id'], $idu2);
$requette->execute();
$result = $requette->get_result();
$liste_conv1 = $result->fetch_assoc();
//prend tt les conv démarer par user2 ou l'autre persone est l'utilisateur actuelle
$requette->bind_param("ii", $idu2, $_COOKIE['user_id']);
$requette->execute();
$result = $requette->get_result();
$liste_conv2 = $result->fetch_assoc();



if(($liste_conv1 == NULL) and ($liste_conv2 == NULL)){//si la conversation n'existe pas, creer la conv

    $pseudoUacces = $_POST ["uname"];
    $requette = $bdd->prepare("INSERT INTO conv(idu1, idu2) VALUES (?, ?)");
    $requette->bind_param("ss", $_COOKIE['user_id'], $idu2);

    $requette = $bdd->prepare("SELECT LAST_INSERT_ID() FROM conv");
    $requette->execute();
    $result = $requette->get_result();
    $row = $result->fetch_assoc();

    setcookie('conv_id', '', time()-3600, '/', '', false, false);
    setcookie('conv_id', $row["id"], time()+3600*24, '/', '', false, false);
}
elseif () {//si la conv existe mais que l'utilisateur est bloquer, return vers l'indication que l'on est bloquer
    header("Location:bloquer.html")
}
else{//si la conv existe et que rien n'est bloquer, rediriger vers la page de chat avec l'utilisateur
    setcookie('conv_id', '', time()-3600, '/', '', false, false);
    setcookie('conv_id', $idconv, time()+3600*24, '/', '', false, false);
}
header("Location:chat.html");



?>