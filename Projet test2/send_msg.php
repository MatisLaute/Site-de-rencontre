<?php
include 'beconect.php';

if (isset($_COOKIE["perm"])) {
	# code...
}
else{
	header("Location:conection.html");
}

if ($_COOKIE["perm"] == 1) { //si les perm sont en 
	header("Location:abonnement.html");
}



$msg = json_decode(file_get_contents("php://input"), true);


$requette = $bdd->prepare("INSERT INTO chat(idu, idconv, msg) VALUES (?, ?, ?)");//envoi un nouveaux message

if(isset($_COOKIE['user_id']) &&  isset($_COOKIE['conv_id'])){
	
}
else{
	header("Location:error.html");
}


$requette->bind_param("iis", $_COOKIE['user_id'], $_COOKIE['conv_id'], $msg);
$requette->execute();

$requette = $bdd->prepare("SELECT LAST_INSERT_ID()  FROM chat");
$requette->execute();
$result = $requette->get_result();
$row = $result->fetch_column();

echo $row;

?>
