function signin() {
    var email = document.getElementById('email').value;
    var pass = document.getElementById('pass').value;

    
    // Validación de campos
    if (!validateEmail(email)) {
        alert("El formato del correo electrónico no es válido.");
        return;
    }
    if (pass.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres.");
        return;
    }
    
    $.ajax({
        type: "POST",
        url: "../bbdd/signin.php", // La ruta al script PHP que maneja el inicio de sesión
        data: { email: email, pass: pass },
        success: function(response) {
            
            //$('.resultado').html(response);


            if (response !== "error") {
                // Si no hay error, mostramos los datos del usuario en el formulario
                var userData = response.split(","); // Dividimos los datos en un array
                $("#iName").text(userData[0]);
                $("#iGender").text(userData[1]);
                $("#iDate").text(userData[2]);
                $("#iCcid").text(userData[3]);
                $(".successSignIn").css("display", "block");
                $(".calculator").css("display", "block");
            } else {
                // Si hay un error, mostramos un mensaje de alerta
                alert("Correo electrónico o contraseña incorrectos.");
            }
        }
    });
}

function validateEmail(email) {
    // Expresión regular para validar el formato del correo electrónico
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function signup() {
    var rEmail = document.getElementById('rEmail').value;
    var rPass = document.getElementById('rPass').value;
    var rName = document.getElementById('rName').value;
    var rGender = document.getElementById('rGender').value;
    var rDatebirth = document.getElementById('rDatebirth').value;

    $.ajax({
        type: "POST",
        url: "../bbdd/signup.php", // La ruta al script PHP que maneja el registro de usuario
        data: { rEmail: rEmail, rPass: rPass, rName: rName, rGender: rGender, rDatebirth: rDatebirth },
        success: function(response) {
            // Aquí maneja la respuesta del servidor, por ejemplo, mostrando un mensaje o redireccionando al usuario
            $('.resultado').html(response);
        }
    });
}

function forget() {
    var fEmail = document.getElementById('fEmail').value;
    var fDatebirth = document.getElementById('fDatebirth').value;

    // Validación de campos
    if (!validateEmail(fEmail)) {
        alert("El formato del correo electrónico no es válido.");
        return;
    }

    $.ajax({
        type: "POST",
        url: "../bbdd/forget.php", // La ruta al script PHP que maneja el recordatorio de contraseña
        data: { fEmail: fEmail, fDatebirth: fDatebirth },
        success: function(response) {
            $('.resultado').html(response);
        }
    });
}


function update() {
    var uEmail = document.getElementById('uEmail').value;
    var uPass = document.getElementById('uPass').value;
    var uName = document.getElementById('uName').value;
    var uGender = document.getElementById('uGender').value;
    var uDatebirth = document.getElementById('uDatebirth').value;

    $.ajax({
        type: "POST",
        url: "../bbdd/update.php", // La ruta al script PHP que maneja la actualización de datos
        data: { uEmail: uEmail, uPass: uPass, uName: uName, uGender: uGender, uDatebirth: uDatebirth },
        success: function(response) {

            $('.resultado').html(response);
        }
    });
}

function deleted() {
    var uEmail = document.getElementById('deleteEmail').value;

    $.ajax({
        type: "POST",
        url: "../bbdd/delete.php",
        data: { uEmail: uEmail },
        success: function(response) {
            $('.successDeleted').html(response);
        }
    });
}


function getCcid() {
    var kg = parseFloat(document.getElementById('kg').value); // Peso en kg
    var cm = parseFloat(document.getElementById('cm').value); // Altura en cm
    var age ; /* Calcular la edad de alguna manera */ // Edad del usuario
    var gender ;/* Obtener el género del usuario de alguna manera */ // Género del usuario
    var activity = parseFloat(document.getElementById('activity').value); // Nivel de actividad física

    // Calculamos el RMB según el género
    var rmb;
    if (gender === "Hombre") {
        rmb = 66.473 + (13.752 * kg) + (5.0033 * cm) - (6.755 * age);
    } else if (gender === "Mujer") {
        rmb = 655.0955 + (9.463 * kg) + (1.8496 * cm) - (4.6756 * age);
    } else {
        // Género no especificado, manejar el error o tomar un valor por defecto
        return;
    }

    // Calculamos el consumo calórico ideal diario
    var ccid = rmb * activity;

    // Mostramos el resultado en algún lugar de la página
    var basalElement = document.querySelector('.basal p');
    basalElement.textContent = "RMB: " + rmb.toFixed(2) + " kcal/día";
    var finalKcalElement = document.querySelector('.finalKcal p');
    finalKcalElement.textContent = "CCID: " + ccid.toFixed(2) + " kcal/día";

    // Aquí podrías realizar una petición AJAX para guardar el CCID en la base de datos o manejarlo de alguna otra manera
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

// Función para incrementar el contador de visitas y mostrarlo en el elemento HTML con el id "cookies"
function incrementVisitCount() {
    var visitCount = readCookie("visitCount");
    if (!visitCount) {
        visitCount = 1;
    } else {
        visitCount = parseInt(visitCount) + 1;
    }
    createCookie("visitCount", visitCount, 30); // La cookie expirará en 30 días

    var cookiesElement = document.getElementById("cookies");
    if (cookiesElement) {
        cookiesElement.innerHTML = "Contador de visitas:  " + visitCount;
    }
}


// Llama a la función incrementVisitCount() cuando la página se carga
window.onload = function() {
    incrementVisitCount();
};

