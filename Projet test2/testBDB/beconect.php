<?php


define('BDDU', "user");
define('SERV', "localhost");
define('LOG', "root");
define('MDP', "");

$bdd = new mysqli(SERV, LOG, MDP, BDDU);

?>
