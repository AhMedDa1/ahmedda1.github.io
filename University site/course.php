	<title>Course</title>
<?php
require 'includes/header.php';
?>
<div class="content">
<div class="row">
	<?php 
	$str = mysqli_query($con ,"select * from course order by id desc");
	while ($row = mysqli_fetch_array($str)) {
?>
<div class="col-md-6">
	<div class="panel panel-primary">
		<div class="panel-heading">
			<h3><?php echo strtoupper($row['name']); ?></h3>
		</div>
		<div class="panel-body">
			<img src="image/<?php echo $row['co_image']; ?>" style="width: 100%; height: 300px;" class="img img-rounded">
		</div>
		<div class="panel-footer">
			<span class="btn btn-warning"><?php echo $row['dept'];?></span>
			<span class="btn btn-info"><?php echo $row['days'] ; ?> Days</span>
			<span class="btn btn-danger"><?php echo $row['st_nos'] ; ?> Student</span>
			<span class="btn btn-success"><?php echo $row['amount']; ?> Bound</span>
		</div>
	</div>
</div>

<?php				
	}
	?>
	</div>
</div>
<?php 
require 'includes/footer.php';
 ?>
