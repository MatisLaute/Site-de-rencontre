
<?php
// actuellement je ne sais pas faire du php mais ici on va verifier si les informations de connexion sont valide

session_start();

if (isset($_SESSION[""]) && $_SESSION[""]){
$_SESSION['userid'] = $userid;

header('Location: pageDuClient.php');
}
?>
