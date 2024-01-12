<?php
    require("funcionConexion.php");
        $con=conexion("bd_viajes");
        //$accion="select distinct origen from vuelos";
        $accion="select origen from vuelos group by origen";
        $result=mysqli_query($con,$accion);
        $cantidad= mysqli_num_rows($result);
        for($i=0;$i<$cantidad;$i++){
                $datos=mysqli_fetch_array($result);
                echo "<option value='$datos[origen]'>$datos[origen]</option>";
        }
        mysqli_close($con);
    
?>