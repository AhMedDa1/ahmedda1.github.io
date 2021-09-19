<?php
$host = "localhost";
$username = "root";
$password = "";
$db = "trainee_center";
$con = mysqli_connect($host,$username,$password,$db) or die("Error in connection");
if (mysqli_select_db($con,$db)) {
	//echo "Connected";
}else{
	//echo "Error ...";
}
?>