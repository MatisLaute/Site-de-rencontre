function sendData() {

    $data;

    var xhr = new XMLHttpRequest();

    //👇 set the PHP page you want to send data to
    xhr.open("POST", "index.php", true);
    xhr.setRequestHeader("Content-Type", "application/json");

    //👇 what to do when you receive a response
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.responseText);
        }
    };

    //👇 send the data
    xhr.send(JSON.stringify(data));
}
