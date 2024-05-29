<?php

try {
    setcookie('user_id', '', time()-3600, '/', '', false, false);
} catch () {
    //throw $th;
}
try {
    setcookie('user_perm', '', time()-3600, '/', '', false, false);
} catch (\Throwable $th) {
    //throw $th;
}
try {
    setcookie('user2_id', '', time()-3600, '/', '', false, false);
} catch (\Throwable $th) {
    //throw $th;
}
try {
    setcookie('user_id', '', time()-3600, '/', '', false, false);
} catch (\Throwable $th) {
    //throw $th;
}





?>