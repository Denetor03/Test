<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/markdown.css">
    <title>Document</title>
</head>
<body>
<div class="topnav">
        <a href="../index.html">
            Home
        </a>
        <a href="../about.html">
            About
        </a>
        <a href="../contact.html">
            Contact
        </a>
    </div>
    <div class="container my-2 mx-2 text-left">
    <h1>Markdown converter</h1>
    <?php
        include("../ps/Parsedown.php");
        $Parsedown = new Parsedown();
        $html = file_get_contents("test.md");
        echo $Parsedown->text($html);
    ?>
</body>
</html>
