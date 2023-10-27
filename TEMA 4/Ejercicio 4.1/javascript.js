/* 1.	Ejercicio voluntario. Cree un script que solicite un valor numérico 
al usuario en base octal (8) y posteriormente muestre su equivalente en base decimal (10). 
Utilice el método alert() para mostrar el resultado en una ventana emergente.
Repetir lo mismo para base 16
*/



function convertToDecimal() {
    var inputValue = document.getElementById("inputValue").value;
    var decimalValue;
    if (inputValue.startsWith("0x")) {
        // Convertir valor hexadecimal a decimal
        decimalValue = parseInt(inputValue, 16);
    } else {
        // Convertir valor octal a decimal
        decimalValue = parseInt(inputValue, 8);
    }
    var resultElement = document.getElementById("result");
    resultElement.textContent = "El equivalente en base decimal es: " + decimalValue;
}

/* 2. Ejercicio voluntario. Cree una aplicación que solicite dos números enteros al usuario. 
Estos números serán los parámetros de la función que se debe definir 
y que devolverá la suma de dichos números. Utilice el método alert() 
para mostrar el resultado por pantalla. Es necesario que recuerde 
el uso del método parseInt() para controlar los datos que ingresa el usuario.*/


function Suma(numero, numero2) {
    var suma = numero + numero2;
    alert("El resultado es : " + suma);
}
function PedirNumeros() {
    var numero1 = parseInt(prompt("Introduce el numero 1: "));
    var numero2 = parseInt(prompt("Introduce el numero 2: "));
    Suma(numero1, numero2);
}


/* 3. Cree un array llamado meses. Este array deberá almacenar el nombre de los doce meses del año. 
Muestre por pantalla el nombre de cada uno de ellos utilizando un bucle for.
Posteriormente, cree tres instancias de este objeto y guárdelas en un array. Con la ayuda del bucle for, 
 utilice el método imprimeDatos,
 para mostrar por pantalla los valores de los tres objetos instanciados. */

function ImprimeDatos(array) {
    for (let index = 0; index < array.length; index++) {
        document.write(array[index] + "<br>");

    }
}
function Meses() {
    var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

    var mesesInstanciados = new Array(meses[0], meses[3], meses[8]);
    ImprimeDatos(mesesInstanciados);

}

/*  4. Ejercicio voluntario. Realizar una tabla que muestra los colores 
puros en todas las definiciones. 
Estará construida con Javascript anidando tres bucles.  */

function Colores() {
    var r = new Array("00", "33", "66", "99", "CC", "FF");
    var g = new Array("00", "33", "66", "99", "CC", "FF");
    var b = new Array("00", "33", "66", "99", "CC", "FF");
    document.write("<table border='1'>");
    for (i = 0; i < r.length; i++) {
        for (j = 0; j < g.length; j++) {
            document.write("<tr>");
            for (k = 0; k < b.length; k++) {
                var nuevoc = "#" + r[i] + g[j] + b[k];
                document.write("<td style='background-Color:" + nuevoc + "'>");
                document.write(nuevoc);

                document.write("</td>");
            }

            document.write("</tr>");
        }
    }
    document.write("</table>");
}





/* 5. (Cálculos con tablas) - Realizar un ejercicio en el que se introduzcan 
valores numéricos en una tabla dinámica sin dimensión. La introducción de elementos 
finaliza si se introduce un 0.
Por cada elemento introducido se debe mostrar un alert con el nº de elementos introducidos.
Al introducir un 0 se finaliza la inserción y se muestra otra ventana de alert con la 
siguiente información:
El nº de elementos introducidos.
Su suma.
Su media.
El mayor.
El menor.
 */


function Ejercicio5() {
    var numeroIntentos = 0;
    var suma = 0;
    var media;
    var mayor = 0;
    var menor;

    do {
        var numero = parseInt(prompt("Introduce un numero"));

        if (numero != 0) {
            ++numeroIntentos;
            suma += numero;
            media = suma / numeroIntentos;
            
            if (numero > mayor) {
                mayor = numero;
            }

            if (numeroIntentos === 1) {
                
                menor = numero;
            } else if (numero < menor) {
                menor = numero;
            }
            
            alert("Llevas " + numeroIntentos + " numeros introducidos.");
        }
    } while (numero != 0);

    alert("Has introducido: " + numeroIntentos + " numeros");
    alert("Su media es " + media);
    alert("El numero mayor es " + mayor);
    alert("El numero menor es " + menor);
}


/* 6. Busqueda en tablas: Se trata de simular una empresa de paquetería que 
sirve a varias ciudades de la periferia sur de Madrid, la lista ciudades y precios 
de envío por bulto que tiene es la siguiente:

Alcorcón	10
Leganes	12
Pinto	8
Fuenlabrada	11
Getafe	10
Parla	15
Mostoles	7

En el caso de que el envío de los bultos sea a una población distinta a las indicadas,
 el precio es para todas de 20 euros por bulto.
Hay que hacer una página Web con JavaScript que nos calcule el importe del envío de unos bultos a una ciudad. 
Se debe mostrar, el nombre de la ciudad, el nº de bultos, el precio por bulto y el importe total +IVA. 
Si la ciudad no pertenece a la de la red, además la visualización contendrá una línea de observaciones.
Mejoras: comprueba que la ciudad no esté en blanco ni que en las unidades haya un nº entero y positivo 
y mayor que cero.
*/


function EmpresaPaquetes() 

{
    var precioEstandar=20;
    var preciosCiudades = [
        { ciudad: "Alcorcon", precio: 10 },
        { ciudad: "Leganes", precio: 12 },
        { ciudad: "Pinto", precio: 8 },
        { ciudad: "Fuenlabrada", precio: 11 },
        { ciudad: "Getafe", precio: 10 },
        { ciudad: "Parla", precio: 15 },
        { ciudad: "Mostoles", precio: 7 },
        { ciudad: "Otro", precio: 20 }
    ];

    document.write("<h3>¿A donde deseas enviar?</h3> <br>");

    for (let index = 0; index < preciosCiudades.length; index++) {
        document.write(preciosCiudades[index].ciudad+ "<br>");
        
    }

   
    
        
       
    document.write("<button onclick='ElegirCiudad()'>Elegir Ciudad</button>");

}

function ElegirCiudad() 
{
    var ciudadElegida = prompt("Elige ciudad");
}