function getData() {
    var nif = document.getElementById('nif').value;
    var pass = document.getElementById('pass').value;
  
    $.ajax({
      type: "POST",
      url: "../bbdd/consulta.php",
      data: { nif: nif, pass: pass },
      success: function (response) {
        

        if (response !== "error") {
            // Si no hay error, mostramos los datos del usuario en el formulario
            var userData = response.split(","); // Dividimos los datos en un array
            $("#name").text(userData[0]);
            $("#fecha").text(userData[1]);
            $("#inicioSesion").css("display", "block");
            $(".imagen").css("display", "none");
            
        } else {
            // Si hay un error, mostramos un mensaje de alerta
            var mensaje="Usuario inexistente";
            $('#resultado').html(mensaje);
        }
    
       
    
      }
    });
  }

  function validateFullName(name) {
    // Dividir el nombre en partes separadas por espacios
    var parts = name.trim().split(' ');

    // Verificar si hay al menos dos partes (nombre y apellido)
    return parts.length >= 2;
}

  function validar() {
    var nif = document.getElementById("nif").value;
    var dniNumero = "";
    var pass = document.getElementById("pass").value;

    for (let i = 0; i < nif.length; i++) {
        if (i < nif.length - 1) {
            dniNumero = dniNumero + nif[i];
        }
    }

    console.log(dniNumero);

    var errores = [];

    if (dniNumero === "") {
        errores.push("El campo DNI no puede estar vacío");
    } else if (isNaN(dniNumero)) {
        errores.push("El DNI debe contener solo números");
    }

    var letraDni = nif[nif.length - 1].toUpperCase();

    // Validación de letra DNI
    var tabla = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    var modulo = dniNumero % 23;
    var letraCalculada = tabla[modulo];

    if (letraDni !== letraCalculada) {
        errores.push("La letra del DNI es incorrecta");
    }

    if (pass === "" || pass.length < 6 ) {
        errores.push("Error, el código de acceso introducido es incorrecto.")
    }

    var mensajeErrorElemento = document.getElementById("mensajeError");
    var mensajeOk = document.getElementById("mensajeOk");

    if (errores.length > 0) {
        mensajeOk.innerHTML = "";
        mensajeErrorElemento.innerHTML = "<p>" + errores.join("<br>") + "</p>";
    } else {
        // Limpiar el contenido del elemento  si no hay errores
        mensajeErrorElemento.innerHTML = "";
        getData();
    }
}

function signup() {
    var rnif = document.getElementById('rnif').value;
    var rpass = document.getElementById('rpass').value;
    var rname = document.getElementById('rname').value;
    var ranno = document.getElementById('ranno').value;


    $.ajax({
        type: "POST",
        url: "../bbdd/signup.php", 
        data: { rnif: rnif, rpass: rpass, rname: rname, ranno: ranno },
        success: function(response) {
            
            $('#resultado').html(response);
        }
    });
}

function validarRegistro()
{
    var rnif = document.getElementById("rnif").value;
    var dniNumero = "";
    var rpass = document.getElementById("rpass").value;

    var rname = document.getElementById('rname').value;
    var ranno = document.getElementById('ranno').value;

    for (let i = 0; i < rnif.length; i++) {
        if (i < rnif.length - 1) {
            dniNumero = dniNumero + nif[i];
        }
    }

    

    var errores = [];

    if (dniNumero === "") {
        errores.push("El campo DNI no puede estar vacío");
    } 

    if(!validarDNI(rnif))
    {
        errores.push("El campo DNI no es correcto");
    }

    

    if (rpass === "" || rpass.length < 6 ) {
        errores.push("Error, el código de acceso introducido es incorrecto.")
    }

    if(rname==="" ||!validateFullName(rname)){
        errores.push("Error en el nombre.")
    }

    if(ranno==="" || ranno.length<4)
    {
        errores.push("Tiene que estar en un formato correcto la fecha.")
    }
    var mensajeErrorElemento = document.getElementById("mensajeError");
    var mensajeOk = document.getElementById("mensajeOk");

    if (errores.length > 0) {
        mensajeOk.innerHTML = "";
        mensajeErrorElemento.innerHTML = "<p>" + errores.join("<br>") + "</p>";
    } else {
        // Limpiar el contenido del elemento  si no hay errores
        mensajeErrorElemento.innerHTML = "";
        signup();
    }

}

function forget() {
    var onif = document.getElementById('onif').value;

    if(!validarDNI(rnif))
    {
        var error="El campo DNI no es correcto";
        $('#mensajeError').html(error);
      
    }

    $.ajax({
        type: "POST",
        url: "../bbdd/forget.php", // La ruta al script PHP que maneja el recordatorio de contraseña
        data: { onif: onif },
        success: function(response) {
            $('#resultado').html(response);
        }
    });
}

function consulta()
{
    $(".consultaDatos").css("display", "block");
    $(".registro").css("display", "none");
    $(".olvidar").css("display", "none");
    $(".imagen").css("display", "none");
}
function alta()
{
    $(".consultaDatos").css("display", "none");
    $(".registro").css("display", "block");
    $(".olvidar").css("display", "none");
    $(".imagen").css("display", "none");
}
function recordar()
{
    $(".consultaDatos").css("display", "none");
    $(".registro").css("display", "none");
    $(".olvidar").css("display", "block");
    $(".imagen").css("display", "none");
}

function validarDNI(dni) {
    // Expresión regular para validar el formato del DNI
    var dniRegex = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKET]$/i;

    // Si el formato del DNI no es válido, retornamos falso
    if (!dniRegex.test(dni)) {
        return false;
    }

    // Extraemos el número y la letra del DNI
    var numeroDNI = dni.substring(0, 8);
    var letraDNI = dni.charAt(8).toUpperCase();

    // Calculamos la letra correspondiente al número de DNI
    var letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
    var letraCalculada = letras.charAt(numeroDNI % 23);

    // Comparamos la letra calculada con la letra del DNI proporcionada
    if (letraDNI === letraCalculada) {
        return true; // El DNI es válido
    } else {
        return false; // El DNI no es válido
    }
}