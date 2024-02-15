// Función para validar el formato de un correo electrónico
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Función para validar si un campo de texto está vacío
function validateNotEmpty(value) {
    return value.trim() !== '';
}

// Función para validar si una contraseña cumple con ciertos criterios (por ejemplo, longitud mínima)
function validatePassword(password) {
    return password.length >= 8;
}

// Función para validar si un campo contiene solo números
function validateNumber(value) {
    return /^\d+$/.test(value);
}

// Función para validar si un campo contiene solo letras (sin espacios ni caracteres especiales)
function validateLettersOnly(value) {
    return /^[a-zA-Z]+$/.test(value);
}

// Función para validar si una fecha tiene un formato válido (YYYY-MM-DD)
function validateDate(date) {
    var re = /^\d{4}-\d{2}-\d{2}$/;
    return re.test(date);
}

// Función para validar si un campo tiene una longitud específica
function validateLength(value, length) {
    return value.length === length;
}

// Función para validar si un campo tiene una longitud dentro de un rango específico
function validateLengthRange(value, minLength, maxLength) {
    var length = value.length;
    return length >= minLength && length <= maxLength;
}

// Función para validar si un campo de nombre tiene un nombre y al menos un apellido
function validateFullName(name) {
    // Dividir el nombre en partes separadas por espacios
    var parts = name.trim().split(' ');

    // Verificar si hay al menos dos partes (nombre y apellido)
    return parts.length >= 2;
}


// Obtener los valores de los campos del formulario
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var fullName = document.getElementById('fullName').value;
    var dateOfBirth = document.getElementById('dateOfBirth').value;

    // Realizar las validaciones de cada campo
    if (!validateEmail(email)) {
        alert("El formato del correo electrónico no es válido.");
        return false;
    }

    if (password.length < 8) {
        alert("La contraseña debe tener al menos 8 caracteres.");
        return false;
    }

    if (!validateFullName(fullName)) {
        alert("El campo de nombre debe contener al menos un nombre y un apellido.");
        return false;
    }

    // Agrega más validaciones según sea necesario

    // Si todas las validaciones son exitosas, retorna verdadero
    return true;