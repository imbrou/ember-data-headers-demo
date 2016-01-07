<?php

// Commenting this will make the preflight fail.
header("Access-Control-Allow-Headers: authorization");

header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Credentials: true");

$myfile = fopen("guys.json", "r") or die("Unable to open file!");
echo fread($myfile,filesize("guys.json"));
fclose($myfile);
?>
