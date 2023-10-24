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


function Ejercicio5() 
{
    
}