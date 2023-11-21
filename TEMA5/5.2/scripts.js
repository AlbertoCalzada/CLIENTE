function Enviar() {
    var nombre = document.getElementById("idNombre");
    var edad = document.getElementById("idEdad");
    var tlf = document.getElementById("idTelefono");
    var email = document.getElementById("idEmail");

    // Contar espacios en blanco
    var espaciosBlancos = nombre.value.split(' ').length - 1;

    // Expresión regular para validar el formato de correo electrónico
    var regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Arreglo para almacenar mensajes de error
    var errores = [];

    if (nombre.value.length < 10 || espaciosBlancos < 2) {
        errores.push("El campo nombre debe tener al menos 10 caracteres y 2 espacios mínimos.");
        nombre.classList.add("error");
    } else {
        nombre.classList.remove("error");
    }

    if (isNaN(edad.value) || edad.value < 16 || edad.value > 65) {
        errores.push("El campo Edad debe tener valores entre 16 y 65.");
        edad.classList.add("error");
    } else {
        edad.classList.remove("error");
    }

    if (tlf.value.length !== 9 || tlf.value.charAt(0) !== '9') {
        errores.push("El campo teléfono debe tener 9 dígitos, y el primero por la izquierda debe ser un 9.");
        tlf.classList.add("error");
    } else {
        tlf.classList.remove("error");
    }

    if (!regexCorreo.test(email.value)) {
        errores.push("El campo Correo no cumple con las reglas de formación de direcciones de correo electrónico.");
        email.classList.add("error");
    } else {
        email.classList.remove("error");
    }

    if (errores.length > 0) {
        // Mostrar ventana de alerta con mensajes de error
        alert("Error en el formulario:\n\n" + errores.join("\n"));

        // Detener el envío del formulario
        return false;
    }

    // Si no hay errores, el formulario se envía
    alert("El envío se ha realizado de forma correcta");

    // Permitir el envío del formulario
    return true;
}

/*function Limpiar() {
    var campos = document.getElementsByClassName("inputField");

    for (var i = 0; i < campos.length; i++) {
        campos[i].value = "";
        campos[i].classList.remove("error");
    }
}*/


function Limpiar() 
{
    
    document.getElementById("idNombre").value = "";
    document.getElementById("idEdad").value = "";
    document.getElementById("idTelefono").value = "";
    document.getElementById("idEmail").value = "";
}