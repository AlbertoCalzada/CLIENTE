function validarFormulario(){
    let name = document.getElementById("name");
    let surname = document.getElementById("surname");
    let email = document.getElementById("email");
    let tel = document.getElementById("tel");

    let company = document.getElementById("empresa");
    let cargo = document.getElementById("cargo");

    if(name.value === ''){
        alert("Falta el nombre");
        var errornombre = document.getElementById("errornombre");
        errornombre.innerHTML = "Falta el nombre";
    }

    var espacioBlanco = surname.value.split(' ').length-1;
    if(espacioBlanco != 1){
        alert("Faltan DOS apellidos");
        var errorapellido = document.getElementById("errorapellido");
        errorapellido.innerHTML = "Faltan DOS apellidos";
    }

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        alert('Por favor, ingrese una dirección de correo electrónico válida.');
        var erroremail = document.getElementById("erroremail");
        erroremail.innerHTML = "Por favor, ingrese una dirección de correo electrónico válida.";
        return false;
    }

    if (tel.value.trim() === '' || tel.value.length !== 9) {
        var errortel = document.getElementById("errortel");
        errortel.textContent = "Por favor, ingresa un número de teléfono válido (9 dígitos).";
        return false;
    }
    

    if(company.value === ''){
        alert("El campo empresa es obligatorio");
    }

    var errorMensaje = document.getElementById("errorMensaje");

    if (cargo.value === "cargoocupa") {
        errorMensaje.textContent = "Por favor, selecciona un cargo.";
        return false; // Evita que el formulario se envíe si no se selecciona un cargo.
    } else {
        errorMensaje.textContent = ""; // Borra el mensaje de error si se selecciona un cargo.
        return true; // Permite que el formulario se envíe si se selecciona un cargo.
    }
}