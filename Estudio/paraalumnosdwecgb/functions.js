function mostrarImagen() {
    var equipacion = document.getElementById('equipacion').value;
    var imagen = document.getElementById('lasercombat');
    var imagen2 = document.getElementById('lasercombatjuego');
    var imagen3 = document.getElementById('paintball');
    var imagen4 = document.getElementById('infantil');

    if (equipacion === "Laser Combat Juego") {
        imagen.style.display = "none";
        imagen2.style.display = "block";
        imagen3.style.display = "none";
        imagen4.style.display = "none";
    } else if (equipacion === "Laser Combat Celebracion") {
        imagen.style.display = "block";
        imagen2.style.display = "none";
        imagen3.style.display = "none";
        imagen4.style.display = "none";
    } else if (equipacion === "Paint Ball") {
        imagen.style.display = "none";
        imagen2.style.display = "none";
        imagen3.style.display = "block";
        imagen4.style.display = "none";
    } else if (equipacion === "Paint Ball Cumpleaños Infantil") {
        imagen.style.display = "none";
        imagen2.style.display = "none";
        imagen3.style.display = "none";
        imagen4.style.display = "block";
    }
}




function validarFormulario() {
    let name = document.getElementById("nombre");
    let email = document.getElementById("email");
    let asistentes = document.getElementById("asistentes");
    let fecha = document.getElementById("fecha");
    let hora = document.getElementById("hora");
    let comprometido = document.getElementById("compremetido");

    errores = 0;

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        var erroremail = document.getElementById("erroremail");
        erroremail.innerHTML = "Por favor, ingrese una dirección de correo electrónico válida.";
        errores++;
    } else {
        var erroremail = document.getElementById("erroremail");
        erroremail.innerHTML = "";
    }

    var espacioBlanco = name.value.split(' ').length - 1;
    if (espacioBlanco !== 2) {
        var errornombre = document.getElementById("errornombre");
        errornombre.innerHTML = "El nombre y apellidos deben contener dos espacios.";
        errores++;
    } else {
        var errornombre = document.getElementById("errornombre");
        errornombre.innerHTML = "";
    }

    if (asistentes.value < 1 || asistentes.value > 99) {
        var errorasistentes = document.getElementById("errorasistentes");
        errorasistentes.innerHTML = "El número de asistentes debe estar entre 1 y 99.";
        errores++;
    } else {
        var errorasistentes = document.getElementById("errorasistentes");
        errorasistentes.innerHTML = "";
    }


    var inputDate = new Date(fecha.value);
    var currentDate = new Date();
    if (isNaN(inputDate) || inputDate < currentDate) {
        var errorfecha = document.getElementById("errorfecha");
        errorfecha.innerHTML = "La fecha de reserva debe ser válida y en el futuro.";
        errores++;
    } else {
        var errorfecha = document.getElementById("errorfecha");
        errorfecha.innerHTML = "";
    }

    var horaRegex = /^(0[8-9]|1[0-9]|20|21):[0-5][0-9]$/;
  
    if (!horaRegex.test(hora.value)) {
        var errorhora = document.getElementById("errorhora");
        errorhora.innerHTML = "La hora de reserva debe estar entre 08 y 21.";
        errores++;
    } else {
        var errorhora = document.getElementById("errorhora");
        errorhora.innerHTML = "";
    }


    if (!comprometido.checked) {
        var errorcheckbox = document.getElementById("errorcheckbox");
        errorcheckbox.innerHTML = "Debe comprometerse a liberar la sala en caso de cancelación.";
        errores++;
    } else {
        var errorcheckbox = document.getElementById("errorcheckbox");
        errorcheckbox.innerHTML = "";
    }

    

    if (errores > 0) {
        return false;
    } else {

        
        guardarDatos();
        
        return true;
    }


}

function info() {
    var infoemail = document.getElementById("infoemail");
    infoemail.innerHTML = "Los horarios disponibles son de 08h a 21h. Especifique 2 dígitos para indicar la hora de reserva";


}

function guardarDatos() {
    var email = document.getElementById('email').value;
    var fecha = document.getElementById('fecha').value;
    var hora = document.getElementById('hora').value;
    var equipacion = document.getElementById('equipacion').value;

    localStorage.setItem('email', email);
    localStorage.setItem('fecha', fecha);
    localStorage.setItem('hora', hora);

    if (equipacion !== "Laser Combat Juego") {
        localStorage.setItem('equipacion', equipacion);
    }

    window.location.href = 'reservacombat.html';
     
}









