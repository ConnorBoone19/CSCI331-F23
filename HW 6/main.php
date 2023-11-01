<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="main.css">
    <title>Document</title>
    <style>
    table, td, tr{
            text-align: center;
            border: 5px black solid;
            border-collapse: collapse;
    }

    </style>
</head>
<body>

<?php

$firstName = $_GET["first"];
$lastName = $_GET["last"];
$country = $_GET["country"];
$age = $_GET["age"];
$phone = $_GET["phone"];


  // MY COMPUTER
  $db_host = 'localhost';
  $db_user = 'root';
  $db_password = 'root';
  $db_db = 'db23';

  // MSU SERVER
  // $db_host = 'localhost';
  // $db_user = 'user23';
  // $db_password = '23lair';
  // $db_db = 'db23'; 
 
  $mysqli = @new mysqli(
    $db_host,
    $db_user,
    $db_password,
    $db_db
  );
	
  if ($mysqli->connect_error) {
    echo 'Errno: '.$mysqli->connect_errno;
    echo '<br>';
    echo 'Error: '.$mysqli->connect_error;
    exit();
  }
$mysqli->query("INSERT INTO HW6  VALUES ('$firstName', '$lastName', '$country', '$phone', $age)");
$result = $mysqli -> query("SELECT * FROM HW6");
if ($result = $mysqli -> query("SELECT * FROM HW6")) {
    echo "Returned rows are: " . $result -> num_rows;
    // Free result set
    
    
  }




if ($result -> num_rows > 0){

    echo <<<END
    <h1>
        Added Correctly
    </h1>

    <p>
    Adding 
    <strong>$firstName $lastName</strong>
    </p>
    END;
    echo "    <table>
    <tr>
        <td>First Name</td>
        <td>Last Name</td>
        <td>Age</td>
        <td>Country</td>
        <td>Phone Number</td>
    </tr>";



    while ($row = $result->fetch_array()){
        
      // ME  
      echo "
        <tr>
        <td>" .$row["last"]. " </td>
        <td>".$row["first"]."</td>
        <td>".$row["userCountry"]."</td>
        <td>".$row["phoneNumber"]."</td>
        <td>".$row["userAge"]."</td>
         </tr>"; 

         // SERVER
        //  echo "        <tr>
        //  <td>" .$row["LastName"]. " </td>
        //  <td>".$row["FirstName"]."</td>
        //  <td>".$row["Country"]."</td>
        //  <td>".$row["PhoneNumber"]."</td>
        //  <td>".$row["age"]."</td>
        //   </tr>"; 
    }
  }
    echo "</table>";




?>






</body>
</html>