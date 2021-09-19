<?php require 'includes/connection.php'; ?>
<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
</head>
<body>
<div class="container">
	<div class="navbar navbar-inverse">
		<div class="container-fluid">
			<div class="navbar-header">
				<a href="" class="navbar-brand">My website</a>
			</div>
			<ul class="nav navbar navbar-nav">
				<li class="active"><a href="index.php"><span class="glyphicon glyphicon-home"></span> Home</a></li>

				<li><a href="course.php"><span class="glyphicon glyphicon-list"></span> Course</a></li>
				<li><a href="addCourse.php"><span class="glyphicon glyphicon-plus-sign"></span> Add Course</a></li>

				<li><a href="about.php"><span class="glyphicon glyphicon-info-sign"></span> About</a></li>
				<li><a href="contact.php"><span class="glyphicon glyphicon-phone"></span> Contact</a></li>
			</ul>
		
			<ul class="nav navbar navbar-nav navbar-right">
				<li><a href="login.php"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
			</ul>
		</div>
	</div>