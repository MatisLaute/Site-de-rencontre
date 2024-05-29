<?php

include 'beconect.php';



if (isset($_COOKIE["user2_id"])) {
    
}
else{
    $requette = $bdd->prepare("SELECT id FROM profile ORDER BY id LIMIT 1");
    $requette->execute();
    $result = $requette->get_result();
    $row = $result->fetch_column();
    setcookie('user2_id', '', time()-3600, '/', '', false, false);
    setcookie('user2_id', $row, time()+3600*24, '/', '', false, false);//set le prochain utilisateur a afficher
}


$requette = $bdd->prepare("SELECT pseudo, profile_picture, bio, age, perm, gender FROM profile WHERE id LIKE ?");//get tt les pseudo contenet l'element rechercher
$requette->bind_param("s", $_COOKIE["user2_id"]);
$requette->execute();   

$result = $requette->get_result();
$row = $result->fetch_assoc();

$rank = ['pseudo', 'profile_picture', 'bio', 'age', 'perm', 'gender'];


for ($i=0; $i < 6; $i++) { 
    echo $row[$rank[$i]] . ';';
}

echo $_COOKIE["user2_id"];


?>