function checkPasswordStrength() {
    var strengthBar = document.getElementById('strength-bar');
    var password = document.getElementById('psw').value;

    

 
    var strength = 0;
    if (password.match(/[a-z]+/)) {
        strength += 1;
    }
    if (password.match(/[A-Z]+/)) {
        strength += 1;
    }
    if (password.match(/[0-9]+/)) {
        strength += 1;
    }
    if (password.match(/[$@#&!]+/)) {
        strength += 1;
    }

    switch(strength) {
    case 0:
        strengthBar.innerHTML = "<div style='width: 0%; border-radius: 10px; background-color: #ddd';></div>";
        break;
    case 1:
        strengthBar.innerHTML = "<div style='width: 25%; border-radius: 10px; background-color: #f00'></div>";
        break;
    case 2:
        strengthBar.innerHTML = "<div style='width: 50%; border-radius: 10px; background-color: #f90'></div>";
        break;
    case 3:
        strengthBar.innerHTML = "<div style='width: 75%; border-radius: 10px; background-color: #ff0'></div>";
        break;
    case 4:
        strengthBar.innerHTML = "<div style='width: 100%; border-radius: 10px; background-color: #0f0'></div>";
        break;
    }
}
