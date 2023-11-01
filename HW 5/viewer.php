<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Thank you</title>
    <style>
        html {
            font-family: Arial, Helvetica, sans-serif;
            background-color: #777;
        }
        body {
            width: 50%;
            border: 3px solid #333;
            border-radius: 20px;
            padding: 2em;
            margin: 20px auto;
            background-color: pink;
        }
        h1,h2 {
            text-align: center;
        }
        .response{
            color: green;
        }
       table{
            margin: 0 auto;
            width: 75%;
            text-align: center;
            border: 5px black solid;
            background-color: lightblue;
       }
       th, td{
            border: 5px black solid;
            background-color: lightblue;
       }
    </style>
</head>
<body>
    <h1>Table is at the bottom</h1>
<?php

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        echo "<h1>Using POST<h1>";
       $grade = $_POST['myGrade'];

        $language = $_POST['languages'];
        $color = $_POST['color'];
        $os = $_POST['slMultiple'];

    }     if ($_SERVER["REQUEST_METHOD"] == "GET") {
        echo "<h1>Using GET<h1>";
        $grade = $_GET['myGrade'];
 
         $language = $_GET['languages'];
         $color = $_GET['color'];
         $os = $_GET['slMultiple'];
    }
           echo <<<END
           <h1>Grade:<h1>
           <h2>Thank you for the generous grade of an, $grade</h2>
            <h1>Selected Languages <h1>
           END;
        foreach ($language as $selected){
            echo <<<END
            <h2 class="response">$selected<h2>
            END;
            }
        if (count($language) == 0){
            echo "<h2 class='response'>No languages selected<h2>";
        }

        echo <<<END

            <h1>Favorite Color<h1>
            <h2 class="response">$color<h2>
            
        END;
       

        echo "<h1>OS's Selected<h1>";
        foreach ($os as $select){
            echo <<<END
            <h2 class="response">$select<h2>
            END;
            }
        if (count($os) == 0){
            echo "<h2 class='response'>No OS's selected<h2>";
        }
     



 
         

?>
<table>
    <tr>
        <th>Grade</th>
        <th>Language</th>
        <th>Color</th>
        <th>OS</th>
    </tr>
    <tr>
        <td><?php echo $grade; ?></td>
        <td><?php        
                 foreach ($language as $selected){
                    echo $selected." ";
                 }
        ?></td>
        <td><?php echo $color; ?></td>
        <td><?php 
                         foreach ($os as $selected){
                            echo $selected." ";
                         }
         ?></td>
    </tr>
</table>

</body>
</html>