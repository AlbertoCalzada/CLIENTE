
function peticion() {
    var email = document.getElementById('email').value;
    var clave = document.getElementById('pass').value;

    $.ajax({
        type: "POST",
        url: "../bbdd/consulta.php",
        data: { email: email, clave: clave },
        success: function (response) {
            $('#resultado').html(response);
            $("#formOculto").css("display", "block");
        }
    });
}

function validar() {

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
    var cookiesMensaje = document.getElementById("cookies");
    if (errores.length > 0) {
        mensajeErrorElemento.innerHTML = "<p>" + errores.join("<br>") + "</p>";
    } else {
        // Limpiar el contenido del elemento  si no hay errores
        mensajeErrorElemento.innerHTML = "";

        // Incrementar el contador de visitas y mostrar el mensaje
        var visitas = parseInt(readCookie("visitas")) || 0;
        visitas++;
        createCookie("visitas", visitas, 365);

        cookiesMensaje.innerHTML = "Esta es tu visita número: " + visitas;
        peticion();
    }
}

function createCookie(name, value, days) {
    if (days) {
        var date = new Date();  // Crear un objeto de fecha
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));  // Calcular la fecha de expiración
        var expires = "; expires=" + date.toGMTString();  // Convertir la fecha a formato GMT
    } else {
        var expires = "";  // Si no se especifican días, no se establece la fecha de expiración
    }
    document.cookie = name + "=" + value + expires + "; path=/";  // Establecer la cookie con el nombre, valor y fecha de expiración
}

// Función para leer una cookie
function readCookie(name) {
    var nameEQ = name + "=";  // Crear el prefijo para buscar en la cadena de cookies
    var ca = document.cookie.split(';');  // Dividir la cadena de cookies en un array
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ')
            c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0)
            return c.substring(nameEQ.length, c.length);  // Devolver el valor de la cookie si se encuentra
    }
    return null;  // Devolver nulo si no se encuentra la cookie
}

function aumentarSaldo() {
    var saldo = document.getElementById('saldo');
    var email = document.getElementById('email').value;

    $.ajax({
        type: "POST",
        url: "../bbdd/aumentoSaldo.php",
        data: { saldo: saldo, email: email },
        success: function (response) {
            $('#resultadoSaldo').html(response);
        }
    });
}