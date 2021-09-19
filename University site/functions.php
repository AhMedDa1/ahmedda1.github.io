<!DOCTYPE html>
<html>
<head>
	<title>Functions</title>
	<link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
</head>
<body>
<div class="container">
	<form action="functions.php" method="post">
		<div class="form-group">
			<label>ID</label>
			<input type="text" name="id" class="form-control">
		</div>
		<div class="form-group">
			<label>Name</label>
			<input type="text" name="name" class="form-control">
		</div>
		<div class="from-group">
			<label>Salary</label>
			<input type="text" name="sal" class="form-control">
		</div>
		<div class="form-group">
			<label>Birth date</label>
			<select name="bday" class="form-control">
				<option>1</option>
				<option>..</option>
				<option>31</option>
			</select>
			<select name="bmonth" class="form-control">
				<option>1</option>
				<option>..</option>
				<option>12</option>
			</select>
			<select name="byear" class="form-control"> 
				<option>1985</option>
				<option>..</option>
				<option>2018</option>
			</select>
		</div>
		<div class="form-group">		
			<input type="submit" name="show" value="Show" class="btn btn-primary">
		</div>
	</form>
	<table class="table table-bordered">
	<tr>
		<th>ID</th>
		<th>Name</th>
		<th>Salary</th>
		<th>Birthdate</th>
	</tr>
	<tr>
	<?php
	if (isset($_POST['show'])) {		
		function info()
		{
			$id = $_POST['id'];
			$name = $_POST['name'];
			$sal = $_POST['sal'];
			$bday = $_POST['bday'] ;
			$bmonth = $_POST['bmonth'] ;
			$byear = $_POST['byear'] ;
			$fulldate = $byear ." - " .$bmonth ." - " . $bday;
			$info = array($id , $name , $sal ,$fulldate);
			foreach ($info as  $in) {
				echo "<td>".$in."</td>";
			}
		}
		info();
	}
	?>
	</tr>
	</table>
</div>
</body>
</html>