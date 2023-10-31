function calcularEnvio() {
    const cityInput = document.getElementById("city");
    const numBultosInput = document.getElementById("numBultos");
    const resultadoDiv = document.getElementById("resultado");

    const city = cityInput.value.trim();
    const numBultos = parseInt(numBultosInput.value);

    if (city === "" || isNaN(numBultos) || numBultos <= 0) {
        resultadoDiv.innerHTML = "Por favor, complete los campos correctamente.";
        return;
    }

    let precioPorBulto;
    switch (city) {
        case "Alcorcón":
            precioPorBulto = 10;
            break;
        case "Leganes":
            precioPorBulto = 12;
            break;
        case "Pinto":
            precioPorBulto = 8;
            break;
        case "Fuenlabrada":
            precioPorBulto = 11;
            break;
        case "Getafe":
            precioPorBulto = 10;
            break;
        case "Parla":
            precioPorBulto = 15;
            break;
        case "Mostoles":
            precioPorBulto = 7;
            break;
        default:
            precioPorBulto = 20;
    }

    const importeTotal = precioPorBulto * numBultos;
    const importeTotalConIVA = importeTotal * 1.21; // IVA del 21%

    resultadoDiv.innerHTML = "Ciudad de Destino: " + city + "<br>" +
        "Número de Bultos: " + numBultos + "<br>" +
        "Precio por Bulto: " + precioPorBulto + " euros" + "<br>" +
        "Importe Total + IVA: " + importeTotalConIVA.toFixed(2) + " euros";

}