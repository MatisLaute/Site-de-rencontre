<?php

setcookie('user2_id', '', time()-3600, '/', '', false, false);
setcookie('user2_id', json_decode(file_get_contents("php://input"), true), time()+3600*24, '/', '', false, false);


?>