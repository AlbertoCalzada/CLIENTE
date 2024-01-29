var campos = ["nombre", "apellido1", "apellido2", "documentoIdentidad", "genero", "adscripcion", "categoriaProfesional", "entidad", "email"];

function registrar() {
    var errores = [];
    var datos = {};

    for (var i = 0; i < campos.length; i++) {
        var campoId = campos[i];
        var valorCampo = document.getElementById(campoId).value.trim();

        if (valorCampo === "") {
            errores.push("El campo " + campoId + " no puede estar vacío");
        } else {
            datos[campoId] = valorCampo;
        }
    }

    if (errores.length > 0) {
        alert("Se encontraron errores:\n" + errores.join("\n"));
    } else {
        // Envía el formulario o realiza otras acciones necesarias
        peticion(datos);
        alert("Registro exitoso");
    }
}

function peticion(datos) {
    $.ajax({
        type: "POST",
        url: "../bbdd/guardar.php",
        data: { datos: datos },
        success: function (response) {
            $('#resultado').html(response);
        }
    });
}
