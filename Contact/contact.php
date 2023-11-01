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
            background-color: #eee;
        }
        h1 {
            text-align: center;
        }
        .text {
            font-family:'Courier New', Courier, monospace;
            background-color: white;
            padding: 1em;
        }
    </style>
</head>
<body>
    
<?php
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
    
    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        $contactName = $_POST['contactname'];
        $mailFrom = $_POST['emailaddress'];
        $subjectLine = $_POST['subjectline'];
        $emailBody = $_POST['emailmessage'];
        
        // $mailTo = 'daniel.defrance@montana.edu';
        $mailTo = "DeFrance, Daniel <daniel.defrance@montana.edu>";
        // https://support.google.com/a/answer/11966003?hl=en
        $ccTo = ''; //'dan.defrance@gmail.com';
         
        // $headers = "From: " . $mailFrom . "\nCC: " . $ccTo;
        $headers = 'From: daniel.defrance@montana.edu' . "\r\n" .
        'Reply-To: daniel.defrance@montana.edu' . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
        
        $intro = "*** From Contact Form, " . $contactName . " writes... ***\n\n";

        if(mail($mailTo, $subjectLine, $intro . $emailBody, $headers) && $mailFrom && $contactName && $emailBody){
// https://www.php.net/manual/en/language.types.string.php#language.types.string.syntax.heredoc
echo <<<END
    <h1>Thank you, $contactName</h1>
    <p>Your email was sent to Daniel DeFrance.</p>
    <h3>Subject:</h3>
    <p class="text">$subjectLine</p>
    <h3>Email:</h3>
    <p class="text">$emailBody</p>
    <br />
    END;
        }
    
        else {
            echo "<h1>No. That didn't go through.</h1><p>Please click your browsers 'back' button and make sure form fields are properly filled out properly.</p>";
        }
        
    }
    var_dump($_POST); // to see the array of POST variables
    // print_r($_POST); // to see the array of POST variables


?>

</body>
</html>