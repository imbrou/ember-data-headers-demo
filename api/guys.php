<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Credentials: true");
header("Cache-Control: no-cache");
header("Content-Type: application/json");
$myfile = fopen("guys.json", "r") or die("Unable to open file!");
echo fread($myfile,filesize("guys.json"));
fclose($myfile);
?>