<?php
 include 'beconect.php';
$requette = $bdd->prepare("SELECT pseudo, profile_picture, bio, age, perm, gender, mail FROM profile WHERE id LIKE ?");//get tt les pseudo contenet l'element rechercher
$requette->bind_param("s", $_COOKIE["user_id"]);
$requette->execute();   

$result = $requette->get_result();
$row = $result->fetch_assoc();

$rank = ['pseudo', 'profile_picture', 'bio', 'age', 'perm', 'gender', 'mail'];


for ($i=0; $i < 6; $i++) { 
    echo $row[$rank[$i]] . ';';
}

echo $_COOKIE["user2_id"];

?>