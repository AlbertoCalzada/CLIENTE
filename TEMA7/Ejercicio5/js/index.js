/*const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

var errores = [];

var email = document.getElementById('email').value;
var clave = document.getElementById('pass').value;


if (!regexEmail.test(email)) {
    errores.push("El email no es valido");
}

if (clave.length < 8) {
    errores.push("La longitud de la contraseña no es valida");
}

var mensajeErrorElemento = document.getElementById("mensajeError");
if (errores.length > 0) {
    mensajeErrorElemento.innerHTML = "<p>" + errores.join("<br>") + "</p>";
} else {
   
    mensajeErrorElemento.innerHTML = "";
}*/


var cookiesMensaje = document.getElementById("cookies");
function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    } else {
        var expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}


function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0)
            return c.substring(nameEQ.length, c.length);
    }
    return null;
}

var visitas = parseInt(readCookie("visitas")) || 0;
visitas++;
createCookie("visitas", visitas, 365);

cookiesMensaje.innerHTML = "Esta es tu visita número: " + visitas;