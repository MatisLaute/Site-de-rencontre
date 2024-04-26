function checkPasswordStrength() {
    var strengthBar = document.getElementById('strength-bar');
    var password = document.getElementById('psw').value;

    var strength = 0;
    if (password.match(/[a-z]+/)) { //si dans le mot de passe il y a un caractere entre a et z alors +1
        strength += 1;
    }
    if (password.match(/[A-Z]+/)) { //si dans le mot de passe il y a un caractere entre A et Z alors +1
        strength += 1;
    }
    if (password.match(/[0-9]+/)) { //si dans le mot de passe il y a un caractere entre 0 et 9 alors +1
        strength += 1;
    }
    if (password.match(/[$@#&!]+/)) { //si dans le mot de passe il y a un caractere qui est $,@,#,& ou ! alors +1
        strength += 1;
    }

    switch(strength) {  // si la somme est 0 alors rien faire
    case 0:
        strengthBar.innerHTML = "<div style='width: 0%; border-radius: 20px; background-color: #ddd';></div>";
        break;
    case 1:   //si la somme est 1 alors afficher 25% de la jauge en rouge
        strengthBar.innerHTML = "<div style='width: 25%; border-radius: 20px; background-color: #f00'></div>";
        break;
    case 2: //si la somme est 2 alors afficher 50% de la jauge en orange
        strengthBar.innerHTML = "<div style='width: 50%; border-radius: 20px; background-color: #f90'></div>";
        break;
    case 3: //si la somme est 3 alors afficher 75% de la jauge en jaune
        strengthBar.innerHTML = "<div style='width: 75%; border-radius: 20px; background-color: #ff0'></div>";
        break;
    case 4: //si la somme est 4 alors afficher 100% de la jauge en vert
        strengthBar.innerHTML = "<div style='width: 100%; border-radius: 20px; background-color: #0f0'></div>";
        break;
    }
}



