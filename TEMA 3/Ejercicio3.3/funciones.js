/* .- Desarrollar la funcion LetraNIF(NumeroNIF) Función que devuelva  la letra del NIF:

La letra del Nif se calcula hallando el resto de la división del Numero del Nif entre 23 y sumando 1 
al resultado. El valor obtenido coincide con la posición de la letra en la siguiente 
cadena de izquierda a derecha:

"T R W A G M Y F P D X B N J Z S Q V H L C K E"
”1...........................................................................23”
*/

function DNI() {
    var dni = parseInt(prompt("Introduce el DNI"));
    var resto = (dni % 23);

    switch (resto) {
        case 0:
            document.write('Tu DNI es ' + dni + 'T');
            break;
        case 1:
            document.write('Tu DNI es ' + dni + 'R');
            break;
        case 2:
            document.write('Tu DNI es ' + dni + 'W');
            break;
        case 3:
            document.write('Tu DNI es ' + dni + 'A');
            break;
        case 4:
            document.write('Tu DNI es ' + dni + 'G');
            break;
        case 5:
            document.write('Tu DNI es ' + dni + 'M');
            break;
        case 6:
            document.write('Tu DNI es ' + dni + 'Y');
            break;
        case 7:
            document.write('Tu DNI es ' + dni + 'F');
            break;
        case 8:
            document.write('Tu DNI es ' + dni + 'P');
            break;
        case 9:
            document.write('Tu DNI es ' + dni + 'D');
            break;
        case 10:
            document.write('Tu DNI es ' + dni + 'X');
            break;
        case 11:
            document.write('Tu DNI es ' + dni + 'B');
            break;
        case 12:
            document.write('Tu DNI es ' + dni + 'N');
            break;
        case 13:
            document.write('Tu DNI es ' + dni + 'J');
            break;
        case 14:
            document.write('Tu DNI es ' + dni + 'Z');
            break;
        case 15:
            document.write('Tu DNI es ' + dni + 'S');
            break;
        case 16:
            document.write('Tu DNI es ' + dni + 'Q');
            break;
        case 17:
            document.write('Tu DNI es ' + dni + 'V');
            break;
        case 18:
            document.write('Tu DNI es ' + dni + 'H');
            break;
        case 19:
            document.write('Tu DNI es ' + dni + 'L');
            break;
        case 20:
            document.write('Tu DNI es ' + dni + 'C');
            break;
        case 21:
            document.write('Tu DNI es ' + dni + 'K');
            break;
        case 22:
            document.write('Tu DNI es ' + dni + 'E');
            break;
        default:
            document.write('El número DNI introducido no es valido');
    }
}


/* 2.- Crear un código que cuente el nº de palabras que contiene una frase:
 
•	El nº de palabras que contiene una frase es igual al de blancos + 1. 
La versión sencilla puede presuponer que entre palabras no hay más que un blanco seguido, 
ni que pueda haber blancos al principio y final

*/

/*function contarPalabras() 
{
    var frase=prompt("Escribe una frase :");
    var palabras=1;
    for (let index = 0; index < frase.length; index++) 
    {
        
        var letra=frase[index];       
        document.write("La letra es "+letra+ "<br>");
        if(letra==" ")
        {
            ++palabras;
        }
        
    }
    document.write("El numero de palabras son:"+palabras);
}*/
function contarPalabras() {
    var frase = prompt("Escribe una frase:").trim(); // Eliminar espacios en blanco al principio y final
    var palabras = 0;


    if (frase.length > 0) {

        var palabrasArray = frase.split(" ");


        for (var i = 0; i < palabrasArray.length; i++) {
            if (palabrasArray[i].trim() !== "") {
                palabras++;
            }
        }
    }

    document.write("El número de palabras son: " + palabras);
}

/* 3.- Comprobar que una cadena solo contiene cifras 0, 1, 3, 4, 5, 6, 7, 8, 9*/

function comprobarCadena() {
    var frase = prompt("Escribe una cadena: ");
    var exit = true;

    for (let index = 0; index < frase.length; index++) {

        if (isNaN(frase[index])) {
            document.write("No es una cadena formado solo por numeros.");
            exit = false;
            break;

        }

    }
    if (exit == true) {
        document.write("Es una cadena formado solo por numeros.");
    }

}

/* 4.- Comprobar que una cadena solo contiene letras y/o espacios en blanco.
.

Para estos dos ejercicios (3 y 4) puede ser interesante conocer los rangos ASCII de:

Letras mayúsculas:		De 65 a 90.
Letras minúsculas:		De 97 a 122.
Números:		De 48 a 57.
    Blanco			32.

*/

function comprobarLetra() {
    var frase = prompt("Escribe una cadena: ");

    if (/^[a-zA-Z\s]*$/.test(frase)) {
        document.write("La cadena contiene solo letras y/o espacios en blanco.");
    } else {
        document.write("La cadena contiene caracteres diferentes a letras y espacios en blanco.");
    }
}


/* 5.- Crear las funciones típicas de cualquier lenguaje:

•	Right(“cadena”, total)		Extrae caracteres por la derecha.
•	Left(“cadena”, total)		Extrae caracteres por la izquierda.
•	Mid(“cadena”,inicio, total) 	Extrae un nº de  caracteres desde una posición dada.
    Estas funciones deben devolver un string con la subcadena obtenida.

*/

/* 6.- Crear la función:

•	Trim(Cadena)		Que devuelva una cadena quitando  los posibles blancos por 
la izquierda y derecha que pudiese tener cadena original.
*/

/*function creandoTrim()
{
    var frase = prompt("Escribe una cadena: ");
    document.write("Esta es la cadena original :"+"<br>");
    document.write(frase +"<br>");
    var nuevaFrase = ""; 
    for (let index = 0; index < frase.length; index++) 
    {
        

        if(frase[index]!="")
        {
            frase[index]="";
            nuevaFrase += frase[index];
        }
    }
    document.write("Esta es la cadena modificada :"+"<br>");
    document.write(nuevaFrase);

}*/

function creandoTrim() {
    var cadena = prompt("Escribe una cadena: ");
    var nuevaCadena = "";
    var inicio = 0;
    var fin = cadena.length - 1;


    while (inicio < cadena.length && cadena[inicio] === ' ') {
        inicio++;
    }


    while (fin >= 0 && cadena[fin] === ' ') {
        fin--;
    }


    for (var i = inicio; i <= fin; i++) {
        nuevaCadena += cadena[i];
    }

    document.write("Cadena original: '" + cadena + "'");
    document.write("Cadena recortada: '" + nuevaCadena + "'");
}

function Redondeo() {
    var numero = parseFloat(prompt("Introduce un número"));
    var decimales = parseInt(prompt("Introduce la cantidad de decimales"));

    var redondeado;


    redondeado = numero.toFixed(decimales);


    document.write("El número redondeado es: " + redondeado);
}

/* 8.- Crear una tabla cuadrada con los códigos ASCII del 0 a 155:

Los encabezamientos de filas y columnas deben ir en hexadecimal de 0 a F (0 a 15), 
la intersección de fila y columna en la tabla nos debe dar el numero ASCII 
correspondiente (0 a 255 o sea de 00 a FF).
Para resolver este ejercicio se debe hacer uso del siguiente método 
que devuelve el carácter ASCII de un código correspondiente entre 0 y 255.

String.fromCharCode(codigoASCII)

Var Dato = String.fromCharCode(65) // Devuelve “A” en la variable Dato.

*/

function Tabla() {
    var Dato = String.fromCharCode(65);
}

function ComprobarEmail() {
    var email = document.getElementById("email").value;
    var valido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (valido) {
        alert("Email válido");
    } else {
        alert("Email no válido");
    }

}



