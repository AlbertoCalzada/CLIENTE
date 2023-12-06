
// Función para obtener el valor de una cookie por su nombre
function getCookie(name) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts.pop().split(";").shift();
    }
    return null;
}

// Función para validar el formulario
function CheckForm() {
    let email = document.getElementById("email");
    let music = document.querySelectorAll('input[name="music"]:checked');
    let arrive = document.querySelectorAll('input[name="arrive_time"]:checked');
    let name = document.getElementById("name");
    let day = document.getElementById("day");
    let month = document.getElementById("month");
    let year = document.getElementById("year");
    let week_day = document.getElementById("week_day");
    let friends = document.getElementById("friends");
    let reds = new Array(7);
    for (let i = 1; i <= 7; i += 1)
        reds[i - 1] = document.getElementById("red_" + i);

    let dom = [email, music, arrive, name, day, month, year, week_day, friends];

    let counter = 0; // para los errores/campos vacíos

    for (let i = 0; i < dom.length; i += 1) {
        if (!dom[i].value) {
            // si el campo está vacío
            counter += 1;
            if (i < 7) {
                reds[i].style.border = "solid 3px red";
            }
        } else {
            reds[i].style.border = "solid 3px black";
        }
    }

    // Expresión regular para validar correo electrónico
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Expresión regular para validar fecha de nacimiento (día y mes)
    let dayMonthRegex = /^(0?[1-9]|[12][0-9]|3[01])$/;
    let monthRegex = /^(0?[1-9]|1[0-2])$/;

    // Validar correo electrónico
    if (!email.value.match(emailRegex)) {
        reds[0].style.border = "solid 3px red";
        counter++;
    }

    // Validar música seleccionada
    if (music.length === 0) {
        reds[1].style.border = "solid 3px red";
        counter++;
    }

    // Validar hora de llegada seleccionada
    if (arrive.length === 0) {
        reds[2].style.border = "solid 3px red";
        counter++;
    }

    // Validar fecha de nacimiento
    let dayValue = day.value.trim();
    let monthValue = month.value.trim();
    let yearValue = year.value.trim();

    if (!dayValue.match(dayMonthRegex) || !monthValue.match(monthRegex) || !yearValue.match(/^\d{4}$/)) {
        reds[4].style.border = "solid 3px red";
        counter++;
    }

    // Validar número de amigos
    let friendsValue = friends.value.trim();
    if (!friendsValue.match(/^\d+$/)) {
        reds[8].style.border = "solid 3px red";
        counter++;
    }

    // Incrementar el contador de intentos almacenado en la cookie
    let attempts = parseInt(getCookie("attempts")) || 0;
    attempts++;
    console.log(attempts); // Agrega esta línea para depuración
    document.cookie = "attempts=" + attempts;


    // Mostrar el mensaje en el contenedor "intentos"
    let attemptsCounter = document.getElementById("attemptsCounter");
    if (attemptsCounter) {
        attemptsCounter.textContent = attempts;
    }

    // Mostrar confirmación o errores
    if (counter === 0) {
        var confirmationMessage =
            "Datos enviados correctamente:\n\n" +
            "Nombre: " + name.value + "\n" +
            "Email: " + email.value + "\n" +
            "Fecha de Nacimiento: " + dayValue + "/" + monthValue + "/" + yearValue + "\n" +
            "Música Favorita: " + Array.from(music).map(function (m) { return m.value; }).join(", ") + "\n" +
            "Día Favorito: " + week_day.value + "\n" +
            "Número de Amigos: " + friendsValue;
        alert(confirmationMessage);
        return true;
    } else {
        alert("Por favor, corrige los errores antes de enviar el formulario.");
        return false;
    }
}


