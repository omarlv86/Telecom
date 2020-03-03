<?php

require 'connect.php';

error_reporting(E_ERROR);

$empleados = [];

$sql = "SELECT * FROM empleados";

if($result = mysqli_query($con, $sql)){
    
    $cr = 0;
    while($row = mysqli_fetch_assoc($result)){
        $empleados[$cr]['id'] = $row['id'];
        $empleados[$cr]['nombre'] = $row['nombre'];
        $empleados[$cr]['apellidop'] = $row['apellidoP'];
        $empleados[$cr]['apellidom'] = $row['apellidoM'];
        $empleados[$cr]['puesto'] = $row['puesto'];
        $empleados[$cr]['fechanac'] = $row['fechaNac'];
        $empleados[$cr]['correo'] = $row['correo'];
        $empleados[$cr]['salario'] = (int)$row['salario'];
        $empleados[$cr]['contratista'] = (int)$row['contratista'];
        $cr++;
    }
    echo json_encode($empleados);
}else{
    http_response_code(404);
}

?>