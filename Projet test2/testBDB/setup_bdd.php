<?php
$requette = $bdd->prepare("CREATE TABLE `user`.`profile` (`id` INT NOT NULL , `mail` TEXT NOT NULL , `password` TEXT NOT NULL , `perm` TEXT NOT NULL , `perm_time` TIMESTAMP NOT NULL , `tag` VARCHAR NOT NULL COMMENT 'les tags de recherche' , UNIQUE (`id`), UNIQUE (`mail`)) ENGINE = InnoDB; ");//get tt les pseudo contenet l'element rechercher
$requette->bind_param("s", $str);
$requette->execute();   





CREATE TABLE `user`.`chat` (`id` INT(5) NOT NULL AUTO_INCREMENT , `idu` INT(5) NOT NULL COMMENT 'id de l\'user qui envoi' , `idu2` INT(5) NOT NULL COMMENT 'id de l\'user qui recoi' , `idconv` INT(5) NOT NULL , `msg` TEXT NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB; 

CREATE TABLE `user`.`conv` (`id` INT(5) NOT NULL , `idu` INT(5) NOT NULL , `idu2` INT(5) NOT NULL , `isblock` INT(1) NOT NULL DEFAULT '0' ) ENGINE = InnoDB; 



?>