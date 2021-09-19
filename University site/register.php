	<title>Register</title>
<?php
require 'includes/header.php';
?>
<div class="content">
		<div class="row">
		<div class="col-md-4"></div>
		<div class="col-md-4">
			<h1 class="text-center">Register</h1>
			<form action="includes/function.php" method="post">
			<div class="form-group">
				<label>Phone No</label>
				<input type="text" name="phone_no" class="form-control">
			</div>
			<div class="form-group">
				<label>Name</label>
				<input type="text" name="name" class="form-control">
			</div>
			<div class="form-group">
				<label>Department</label>
				<select name="dept" class="form-control">
					<option>Computer</option>
					<option>Accounting</option>
					<option>Network</option>
					<option>Media</option>					
				</select>
			</div>
			<div class="form-group">
				<label>Password</label>
				<input type="password" name="pwd" class="form-control">
			</div>
			<div class="form-group">
				<label>Password Confirm</label>
				<input type="password" name="con_pwd" class="form-control">
			</div>
			<div class="form-group">							
				<input type="submit" name="reg" class="btn btn-primary btn-lg" value="Register">
				<input type="reset" class="btn btn-danger btn-lg" value="Cancel">
			</div>
			</form>
		</div>
		<div class="col-md-4"></div>
	</div>
</div>
<?php 
require 'includes/footer.php';
 ?>