function CheckForm() {
    let email = document.getElementById("email");
    let music = document.getElementById("music");
    let arrive = document.getElementById("arrive");
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

    let counter = 0;
    for (let i = 0; i < dom.length; i += 1) {
        if (!dom[i].value) {
            counter += 1;
            if (i < 7)
                reds[i].style.border = "solid 1px red";
        } else {
            reds[i].style.border = "solid 1px black";
        }
    }

    // Incrementar el contador de intentos y almacenarlo en una cookie
    let intentos = getCookie("intentos") || 0;
    intentos++;
    setCookie("intentos", intentos, 1); // La cookie expirará en 1 día

    // Mostrar el número de intentos en el contenedor "intentos"
    document.getElementById("intentos").innerHTML = "Intento de Envíos del formulario: " + intentos;

    if (counter === 0)
        return true;
    else
        return false;
}

// Función para obtener el valor de una cookie
function getCookie(name) {
    let cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].split("=");
        if (cookie[0] === name)
            return cookie[1];
    }
    return null;
}

// Función para establecer el valor de una cookie
function setCookie(name, value, days) {
    let expirationDate = new Date();
    expirationDate.setTime(expirationDate.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = name + "=" + value + "; expires=" + expirationDate.toUTCString() + "; path=/";
}
