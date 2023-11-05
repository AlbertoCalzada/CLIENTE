function Buzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 15 === 0) {
            document.write("FizzBuzz" + "<br>");
        } else if (i % 3 === 0) {
            document.write("Fizz" + "<br>");
        } else if (i % 5 === 0) {
            document.write("Buzz" + "<br>");
        } else {
            document.write(i + "<br>");
        }
    }

}
function Tabla() {
    document.write("<table border=1>");

    

    // Agrega una fila para cada número
    for (let i = 0; i <= 3; i++) {
        for (let j = 0; j <= 3; j++) {
            document.write("<tr>");

            // suma
            document.write("<td>");
            const suma = i + j;
            document.write(i + " + " + j + " = " + suma);
            document.write("</td>");

            // resta
            document.write("<td>");
            const resta = i - j;
            document.write(i + " - " + j + " = " + resta);
            document.write("</td>");

            // multiplicación
            document.write("<td>");
            const multiplicacion = i * j;
            document.write(i + " * " + j + " = " + multiplicacion);
            document.write("</td>");

            // división
            document.write("<td>");
            if (j !== 0) {
                const division = i / j;
                document.write(i + " / " + j + " = " + division);
            } else {
                document.write(i + " / " + j + " = Division por cero");
            }
            document.write("</td>");

            document.write("</tr>");
        }
    }

    // Cierra la tabla
    document.write("</table>");
}
















