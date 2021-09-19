	<title>Add Course</title>
<?php
require 'includes/header.php';
?>
<div class="content">
		<div class="row">
		<div class="col-md-4"></div>
		<div class="col-md-4">
			<h1 class="text-center">Add Course</h1>
			<form action="includes/function.php" method="post" enctype="multipart/form-data">
			<div class="form-group">
				<label>Name</label>
				<input type="text" name="co_name" class="form-control">
			</div>
			<div class="form-group">
				<label>Department</label>
				<select name="co_dept" class="form-control">
					<option>Computer</option>
					<option>Accounting</option>
					<option>Network</option>
					<option>Media</option>					
				</select>
			</div>
			<div class="form-group">
				<label>Sudent Numbers</label>
				<input type="number" name="co_st_nos" class="form-control">
			</div>
			
			<div class="form-group">
				<label>Days Number</label>
				<input type="number" name="co_days" class="form-control">
			</div>
			<div class="form-group">
				<label>Amount</label>
				<input type="number" name="co_amount" class="form-control">
			</div>
			<div class="form-group">
				<label>Image</label>
				<input type="file" name="co_image" class="form-control" accept="image/*">
			</div>
			<div class="form-group">							
				<input type="submit" name="add" class="btn btn-primary btn-lg" value="Save">
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