<?php
include 'beconect.php';


if($_COOKIE['user_perm'] != '0'){//verifie les perme sont admin, si oui on passe au else
    $requette = $bdd->prepare("SELECT idu, time_send, msg, id FROM chat WHERE idconv = ? AND is_delet = 0 ORDER BY time_send DESC LIMIT 1");
    $requette->bind_param("i", $_COOKIE['conv_id']);//affiche les message nn bloquer
    $requette->execute();
    $result = $requette->get_result();
}
else{
    $requette = $bdd->prepare("SELECT idu, time_send, msg, id FROM chat WHERE idconv = ? ORDER BY time_send DESC LIMIT 1");
    $requette->bind_param("i", $_COOKIE['conv_id']);//affiche tt les message si on a les perm admin
    $requette->execute();
    $result = $requette->get_result();  
}
$row = $result->fetch_assoc();//get le msg poster a "offset" ligne au dessu du dernier msg envoyer dans la con


$msg_len = (int)strlen($row['msg']);


$chartab = str_split($row['msg']);//verifie qu'il n'y a pas de caractere problematique dans le msg et si il yen a, les remplace par $

for ($i=0; $i < $msg_len; $i++) { 
    if($chartab[$i]=='§'){
        $chartab = "$";
    }
    if($chartab[$i]=='µ'){
        $chartab = "^";
    }
}
$msg = implode("", $chartab);

$align; //==sent si c'est l'utilisateur qui a envoyer ce msg, ou si on est en admin et que c'est l'utilisateur n°1 de la conv
//==received si ce l'autre

if($_COOKIE['user_id'] == $row['idu']){
    $align = 'sent';
}
elseif($_COOKIE["user2_id"] == $row['idu']){
    $align = 'received';
}
else{
    $align = 'sent';
}


echo $align . "§" . $row['time_send'] . "§" . $row['id'] . "§";
//on utilise § en séparateur, car il n'est jamais utiliser en conversation. 
for ($i=0; $i < $msg_len; $i++) { 
    echo $chartab[$i];
}



?>