<?php
    include 'beconect.php';
    setcookie('user2_id', 4, time()+3600*24, '/', '', false, false);
    setcookie('conv_id', 0, time()+3600*24, '/', '', false, false);
    echo "userid : " . $_COOKIE['user_id'] . '<br>';
    echo "user2 id : " . $_COOKIE['user2_id'] . '<br>';
    echo "conv id : " . $_COOKIE['conv_id'] . '<br>';
    echo "user_perm : " . $_COOKIE['user_perm'] . '<br>';
?>