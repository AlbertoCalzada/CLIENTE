function peticion() {

    var nif = document.getElementById("dni").value;
    var pass = document.getElementById("pass").value;

    $.ajax({
        type: "POST",
        url: "../bbdd/consulta.php",
        data: { nif: nif, pass: pass },
        success: function (response) {
            $('#resultado').html(response);
        }
    });
}

function validar() {
    var nif = document.getElementById("dni").value;
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

    if (pass === "" || pass.length < 10 || isNaN(pass)) {
        errores.push("Hay algun error en la contraseña")
    }

    var mensajeErrorElemento = document.getElementById("mensajeError");
    var mensajeOk = document.getElementById("mensajeOk");

    if (errores.length > 0) {
        mensajeOk.innerHTML = "";
        mensajeErrorElemento.innerHTML = "<p>" + errores.join("<br>") + "</p>";
    } else {
        // Limpiar el contenido del elemento  si no hay errores
        mensajeErrorElemento.innerHTML = "";
        mensajeOk.innerHTML = "Inicio de sesion correcto"
        peticion();
    }
}

