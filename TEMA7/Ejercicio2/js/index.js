function getData() {

    $dni = $("#dni").val();
    $key = $("#clave").val();



    $.getJSON("http://localhost/cliente/TEMA7/Ejercicio2/bbdd/dbToJson.php", function (result) {

        


    
        $(".show").css("display", "block");
        $(".points").text(result["puntos"]);

    });

}

