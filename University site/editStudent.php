	<title>Register</title>
<?php
require 'includes/header.php';
include 'includes/connection.php';
$id = $_GET['id'];
$str = "select * from student where id=$id";
$qry = mysqli_query($con,$str) or die(mysqli_error($con));
$row = mysqli_fetch_array($qry);
extract($row);
?>
<div class="content">
		<div class="row">
		<div class="col-md-4"></div>
		<div class="col-md-4">
			<h1 class="text-center">Update</h1>
			<form action="includes/function.php?id=<?php echo $id ?>" method="post">
			<div class="form-group">			
				<label>Phone No</label>
				<input type="text" name="phone_no" class="form-control" value="<?php echo $phoneNo ?>">
			</div>
			<div class="form-group">
				<label>Name</label>
				<input type="text" name="name" class="form-control" value="<?php echo $name ?>">
			</div>
			<div class="form-group">
				<label>Department</label>
				<select name="dept" class="form-control">
					<option><?php echo $dept ?></option>
					<option>Computer</option>
					<option>Accounting</option>
					<option>Network</option>
					<option>Media</option>					
				</select>
			</div>		
			<div class="form-group">							
				<input type="submit" name="editStudent" class="btn btn-warning btn-lg" value="Update">
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