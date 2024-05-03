<?php
include 'beconect.php';
    function sedmsg($idconv, $msg){
        $stmt = $bdd->prepare("INSERT INTO chat(idconv, idu, msg) VALUES (?, ?, ?)");
        $stmt->bind_param("iis", $idconv, $_COOKIE['user_id'], $mailU);
        $stmt->execute();
    }

    function delmsg($msgid){
        $stmt = $bdd->prepare("DELETE FROM chat WHERE id = ?");
        $stmt->bind_param("i", $msgid);
        $stmt->execute();
    }

    function block($idconv){
        $profile = $bdd->prepare("UPDATE chat SET isblock WHERE id = ?");
        $profile->bind_param("i", $idconv);
        $profile->execute();
    }

    function acess_msg($)



?>