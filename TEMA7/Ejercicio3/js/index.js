function validar() {
    var nif = document.getElementById("dni").value;
    var clave = document.getElementById("pass");


    for (let i = 0; i < nif.length; i++) 
    {
        if(i<nif.length-1)
        {
            var dniNumero=dniNumero+nif[i];
        }
        
    }
    console.log(dniNumero);
    var errores = [];

    if (dniNumero == "") {
        errores.push("El campo DNI no puede estar vacío");
    }


    var letraDni = nif[nif.length - 1];

    
    // Validación de letra DNI
    var tabla = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    var modulo = dniNumero % 23;
    var letra = tabla[modulo];

    if (letraDni == "" || letraDni.toUpperCase() != letra) {
        errores.push("La letra del DNI es incorrecta");
    }


   return;

    


}