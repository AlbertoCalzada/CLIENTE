<?php
    if(isset($_POST['origen'])){
        $origen=$_POST['origen'];
        require("funcionConexion.php");
            $con=conexion("bd_viajes");
            $accion="select destino from vuelos where origen='$origen' group by destino";
            $result=mysqli_query($con,$accion);
            $cantidad= mysqli_num_rows($result);
            for($i=0;$i<$cantidad;$i++){
                $datos=mysqli_fetch_array($result);
                echo "<option value='$datos[destino]'>$datos[destino]</option>";
            }
        mysqli_close($con);
    }
?>