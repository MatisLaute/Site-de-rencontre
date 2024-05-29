<?php
include 'beconect.php';

$requette = $bdd->prepare("SELECT idu, time_send, msg, id FROM conv WHERE idu1 = ? ORDER BY time_send");
$requette->bind_param("i", $_COOKIE['user_id']);//affiche les message nn bloquer
$requette->execute();
$result = $requette->get_result();


$row = $result->fetch_assoc();//get le msg poster a "offset" ligne au dessu du dernier msg envoyer dans la con
do {

    echo $row[''] . "§" . $row['id'] . "§";
//on utilise § en séparateur, car il n'est jamais utiliser en conversation. 
    for ($i=0; $i < $msg_len; $i++) { 
        echo $chartab[$i];
    }


    echo("µ");

    $row = $result->fetch_assoc();//get le msg poster a "offset" ligne au dessu du dernier msg envoyer dans la con

} while ($row != NULL);







?>