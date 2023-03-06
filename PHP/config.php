<?php 

header('Access-Control-Allow-Origin: http://localhost:3000');

$serverName = "localhost";
$dbName = "enroll_system";
$user = "root";

$connection = mysqli_connect($serverName, $user, '', $dbName);

if(!$connection) {

    echo "CONNECTION FAILED";
    exit();

}else { 

    $studentID = $_POST['studentID'];
    $password = $_POST['studentPassword'];

    $selectQuery = mysqli_query($connection, "SELECT * FROM students WHERE student_id = '$studentID' AND student_pass = '$password'");

    if(mysqli_num_rows($selectQuery) > 0) {

        echo "ACCOUNT FOUND!";


    }else { 

        echo "NOT FOUND";


    }


}


?>