<?php
//set connection variables
$host='localhost';
$username='root';
$password='';
$database_name= 'animals';

//connection to server & database
$con = mysqli_connect($host, $username, $password,$database_name) ;
 
//check connection 
if (mysqli_connect_errno()):
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
endif;

?>
