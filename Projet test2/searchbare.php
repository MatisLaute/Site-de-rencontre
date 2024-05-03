<?php
/* partie html permetant de changer les resultat de la barre de recherche en directe
<input
   type       = "text" 
   onchange   = "myHandler();"
   onkeypress = "this.onchange();"
   onpaste    = "this.onchange();"
   oninput    = "this.onchange();"
/>
*/

include 'beconect.php';
    $data = json_decode(file_get_contents("php://input"), true);
    $str = '%' . $data . '%';//combine le data avec les selecteur mysql

    $requette = $bdd->prepare("SELECT id, pseudo FROM profile WHERE pseudo LIKE ?");//get tt les pseudo contenet l'element rechercher
    $requette->bind_param("s", $str);
    $requette->execute();   

    $result = $requette->get_result();
    $row = $result->fetch_all();

    $size = sizeof($row);

    if ($size > 3 ) {
        $size = 3;
    }


    for ($i=0; $i < $size; $i++) { //envoie tt le tableau en echo au javascript
        echo  $row[$i][1];
        echo ",";
    }
    echo "|";
    for ($i=0; $i < $size; $i++) { //envoie tt le tableau en echo au javascript
        echo ",";
        echo  $row[$i][0];
    }






?>