function enviar() {
    var dniNumero = document.getElementById("dni").value;
    var letraDni = document.getElementById("letra").value;
    var nombre = document.getElementById("nom").value;
    var apellido = document.getElementById("ape").value;
    var sexo = document.getElementById("sexo").value;
    var calle = document.getElementById("calle").value;
    var poblacion = document.getElementById("poblacion").value;
    var provincia = document.getElementById("provincia").value;
    var archivo = document.getElementById("archivo").value;

    var tabla = [T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E]
    var modulo = dniNumero % 23;
    var letra = tabla[modulo];

    // Arreglo para almacenar mensajes de error
    var errores = [];

    if (dniNumero == "") {
        errores.push("El campo no puede estar vacio");
    }

    if (letraDni == "" || letraDni != letra) {
        errores.push("El campo contiene algun error");
    }

    if (nombre == "") {
        errores.push("El campo no puede estar vacio");
    }

    if (apellido == "") {
        errores.push("El campo no puede estar vacio");
    }

    if (archivo == "") {
        errores.push("Debe seleccionar un archivo.");
    }

    var texto = document.getElementById("texto").value;
    if (archivo != "" && texto == "") {
        errores.push("La descripción de la práctica es obligatoria.");
    }



    if (errores.length > 0) {
        // Mostrar ventana de alerta con mensajes de error
        alert("Error en el formulario:\n\n" + errores.join("\n"));


    }

    // Si no hay errores, el formulario se envía
    alert("El envío se ha realizado de forma correcta");
}

function validaCalles() {
    if (poblacion != "") {
        provincia.disabled = false;
    } else {
        provincia.disabled = true;
    }
}

function validaFichero() {

}