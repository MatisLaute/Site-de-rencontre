<?php

include 'beconect.php';

$result = $mysqli->query("SELECT id FROM profile ORDER BY id ASC");

echo $result;

?>
