	<title>Login</title>
<?php
require 'includes/header.php';
?>
<div class="content">
	<div class="row">
		<div class="col-md-4"></div>
		<div class="col-md-4">
			<h1 class="text-center">Login</h1>
				<form action="includes/function.php" method="post">
			<div class="form-group">
				<label>Phone No</label>
				<input type="text" name="phone_no" class="form-control">
			</div>
			<div class="form-group">
				<label>Password</label>
				<input type="password" name="pwd" class="form-control">
			</div>
			<div class="form-group">				
			<h4>New Student <a href="register.php"> Register Here </a></h4>
				<input type="submit" name="login" class="btn btn-primary btn-lg" value="Login">
			</div>
			</form>
		</div>
		<div class="col-md-4"></div>
	</div>
</div>
<?php 
require 'includes/footer.php';
 ?>