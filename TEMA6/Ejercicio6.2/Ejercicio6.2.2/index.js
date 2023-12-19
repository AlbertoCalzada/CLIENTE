function cambiarEstilo(i) {

    var texto = document.getElementById("texto");
    switch (i) {
        case 1:
            aplicarEstilo(texto, "red", "white", "Arial", "20px");
            break;
        case 2:
            aplicarEstilo(texto, "blue", "yellow", "Verdana", "18px");
            break;
        case 3:
            aplicarEstilo(texto, "green", "black", "Georgia", "22px");
            break;
        case 4:
            aplicarEstilo(texto, "orange", "purple", "Courier New", "16px");
            break;
        case 5:
            aplicarEstilo(texto, "pink", "brown", "Comic Sans MS", "24px");
            break;



        default:
            break;
    }
}

function aplicarEstilo(elemento, colorFondo, colorTexto, fuente, tamanoFuente) {
    elemento.style.background = colorFondo;
    elemento.style.color = colorTexto;
    elemento.style.fontFamily = fuente;
    elemento.style.fontSize = tamanoFuente;
}