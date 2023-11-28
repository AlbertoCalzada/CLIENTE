function enviar() {
    var dniNumero = document.getElementById("dni").value;
    var letraDni = document.getElementById("letra").value;
    var nombre = document.getElementById("nom").value;
    var apellido = document.getElementById("ape").value;
    var calle = document.getElementById("calle").value;
    var poblacion = document.getElementById("poblacion").value;
    var provincia = document.getElementById("provincia");
    var archivo = document.getElementById("archivo").value;
    var texto = document.getElementById("texto").value;

    // Arreglo para almacenar mensajes de error
    var errores = [];

    if (dniNumero == "") {
        errores.push("El campo DNI no puede estar vacío");
    }

    // Validación de letra DNI
    var tabla = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    var modulo = dniNumero % 23;
    var letra = tabla[modulo];
    
    if (letraDni == "" || letraDni.toUpperCase() != letra) {
        errores.push("La letra del DNI es incorrecta");
    }

    if (nombre == "") {
        errores.push("El campo Nombre no puede estar vacío");
    }

    if (apellido == "") {
        errores.push("El campo Apellido no puede estar vacío");
    }

    if ((calle != "" || poblacion != "") && provincia.disabled) {
        errores.push("Debe introducir dirección y población para seleccionar la provincia");
    }

    if (archivo == "") {
        errores.push("Debe seleccionar un archivo.");
    }

    if ((document.getElementById("comprimido").checked || document.getElementById("encriptado").checked) && archivo == "") {
        errores.push("Debe seleccionar un archivo antes de marcar las opciones de archivo comprimido o encriptado");
    }

    if ((document.getElementById("comprimido").checked || document.getElementById("encriptado").checked) && texto == "") {
        errores.push("La descripción de la práctica es obligatoria cuando se selecciona archivo comprimido o encriptado");
    }

    if (errores.length > 0) {
        // Mostrar ventana de alerta con mensajes de error
        alert("Error en el formulario:\n\n" + errores.join("\n"));
    } else {
        // Si no hay errores, el formulario se envía
        alert("El envío se ha realizado de forma correcta");
    }
}

function validaCalles() {
    var poblacion = document.getElementById("poblacion").value;
    var provincia = document.getElementById("provincia");
    
    if (poblacion !== "") {
        provincia.disabled = false;
    } else {
        provincia.disabled = true;
        provincia.value = ""; // Limpiar el valor de la provincia si se desactiva
    }
}

function validaFichero() {
    var archivo = document.getElementById("archivo").value;
    var comprimidoCheckbox = document.getElementById("comprimido");
    var encriptadoCheckbox = document.getElementById("encriptado");
    var texto = document.getElementById("texto");

    if (archivo !== "") {
        comprimidoCheckbox.disabled = false;
        encriptadoCheckbox.disabled = false;
    } else {
        comprimidoCheckbox.disabled = true;
        encriptadoCheckbox.disabled = true;
     
        texto.value = ""; // Limpiar la descripción si se desactiva
    }
}

