<?php

require 'connect.php';
//Obtiene la data 
$data = file_get_contents("php://input");

//print_r($data);

if(isset($data) && !empty($data)){
    //Extraer la data
    $request = json_decode($data);

    //Sanitize
    $id= mysqli_real_escape_string($con, (int)$_GET['id']);
    //$id = mysqli_real_escape_string($con, (int)($request->id));
    $nombre = mysqli_real_escape_string($con, trim($request->nombre));
    $apellidop = mysqli_real_escape_string($con, trim($request->apellidoP));
    $apellidom = mysqli_real_escape_string($con, trim($request->apellidoM));
    $puesto = mysqli_real_escape_string($con, trim($request->puesto));
    $fechaNac = mysqli_real_escape_string($con, trim($request->fechaNac));
    $correo = mysqli_real_escape_string($con, $request->correo);
    $salario = mysqli_real_escape_string($con, (int)trim($request->salario));
    $contratista = mysqli_real_escape_string($con, $request->contratista);

    //Se realiza la actualizacion

//$sql = "UPDATE `empleados` SET nombre = '$nombre', apellidoP = '$apellidop', apellidoM = '$apellidom', puesto = '$puesto', fechaNac = '$fechaNac', correo = '$correo', salario ='$salario', contratista = '$contratista' WHERE id = {'$id'} LIMIT 1";
$sql = "UPDATE `empleados` SET `nombre`='$nombre',`apellidoP`='$apellidop',`apellidoM`='$apellidom',`puesto`='$puesto',`fechaNac`='$fechaNac',`correo`='$correo',`salario`='$salario',`contratista`='$contratista' WHERE id= '$id'";
if(mysqli_query($con, $sql)){
    http_response_code(204);
}else{
    return http_response_code(422);
}
}

?>