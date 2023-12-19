var imagenes = ["img/kid.png", "img/adult.png"];
var adult= document.getElementById("adult");
var kid = document.getElementById("kid");

function movimiento() {
    var estilo = window.getComputedStyle(adult);
    if (estilo.display === "none") {
        adult.style.display = "block";
        kid.style.display = "none";
    } else {
        adult.style.display = "none";
        kid.style.display = "block";
    }
}
