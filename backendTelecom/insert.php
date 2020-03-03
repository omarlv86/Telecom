<?php

require 'connect.php';

$datosempleado = file_get_contents("php://input");

//echo $data;
if(isset($datosempleado) && !empty($datosempleado)){
    $request = json_decode($datosempleado);

    
    
    //Sanitize
    $nombre = mysqli_real_escape_string($con, trim($request->nombre));
    $apellidop = mysqli_real_escape_string($con, trim($request->apellidoP));
    $apellidom = mysqli_real_escape_string($con, trim($request->apellidoM));
    $puesto = mysqli_real_escape_string($con, trim($request->puesto));
    $fechanac = mysqli_real_escape_string($con, $request->fechaNac);
    $correo = mysqli_real_escape_string($con, $request->correo);
    $salario = mysqli_real_escape_string($con, trim($request->salario));
    $contratista = mysqli_real_escape_string($con, $request->contratista);


    //Store - guardar
    $sql = "INSERT INTO `empleados`(
        `nombre`,
        `apellidoP`,
        `apellidoM`,
        `puesto`,
        `fechaNac`,
        `correo`, 
        `salario`,
        `contratista`
        ) VALUES (
        '{$nombre}',
        '{$apellidop}',
        '{$apellidom}',
        '{$puesto}',
        '{$fechanac}',
        '{$correo}',
        '{$salario}',
        '{$contratista}'
        )";

        if(mysqli_query($con, $sql)){
            http_response_code(201);
        }else{
            http_response_code(422);
        }
}
?>