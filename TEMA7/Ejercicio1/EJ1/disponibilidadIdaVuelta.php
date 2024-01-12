<head>
    <style>
        .amarillo{
            color: #FDD122;
        }
    </style>
</head>
<?php
    require("funcionConexion.php");
    $origen=$_POST['origen'];
    $destino=$_POST['destino'];
    $fechaSalida=$_POST['fechaSalida'];
    $fechaRegreso=$_POST['fechaRegreso'];
    $adultos=$_POST['adultos'];
    $ninios=$_POST['niños'];
    $pas=$adultos+$ninios;
    $con=conexion("bd_viajes");
    $accion="select cia,origen,salida,destino,precio from vuelos where origen='$origen' and destino='$destino' and fecha='$fechaSalida' and max_pasajeros>=$pas";
    $result=mysqli_query($con,$accion);
    $cantidad= mysqli_num_rows($result);
    echo"<h3>Vuelos de ida disponibles:</h3>";
        echo "<div>";
            echo "<h4>Vuelo $origen - $destino</h4>";
            echo "Fecha salida: $fechaSalida <br>";
            echo "Adultos: $adultos<br> ";
            if($ninios != null){
                echo "Niños: $ninios";
            }
        echo"</div>";
        echo "<table id='vuelosIda'>";
        echo "<h4>IDA: Vuelo de $origen - $destino</h4>";
        echo "<tr><th>Cía</th><th>Origen</th><th>Salida</th><th>Destino</th><th>Precio</th></tr>";
        for($i=0;$i<$cantidad;$i++){
            $datos=mysqli_fetch_array($result);
            echo "<tr><td>$datos[cia]</td><td>$datos[origen]</td><td>$datos[salida]</td><td>$datos[destino]</td><td class='amarillo'><b>$datos[precio]€</b></td></tr>";
        }
        echo "</table>";
   
    $accion2="select cia,origen,salida,destino,precio from vuelos where origen='$destino' and destino='$origen' and fecha='$fechaRegreso' and max_pasajeros>=$pas";
    $result2=mysqli_query($con,$accion2);
    $cantidad2= mysqli_num_rows($result2);
        echo "<table id='vuelosIdaVuelta'>";
        echo "<h4>Vuelta: Vuelo de $destino - $origen</h4>";
        echo "<tr><th>Cía</th><th>Origen</th><th>Salida</th><th>Destino</th><th>Precio</th></tr>";
        for($a=0;$a<$cantidad2;$a++){
            $datos2=mysqli_fetch_array($result2);
            echo "<tr><td>$datos2[cia]</td><td>$datos2[destino]</td><td>$datos2[salida]</td><td>$datos2[origen]</td><td class='amarillo'><b>$datos2[precio]€</b></td></tr>";
        }
        echo "</table>"; 
    
    mysqli_close($con); 


?>