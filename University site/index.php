	<title>Home</title>
<?php require 'includes/header.php'; ?>
<div class="content">
	<table class="table table-bordered table-hover">
	<tr>
		<th>ID</th>
		<th>Name</th>
		<th>Name</th>
		<th>Department</th>
		<th width="30%">Action</th>
	</tr>
	<?php
	$str = mysqli_query($con ,"select * from student order by id desc");
	while ($row = mysqli_fetch_array($str)) {
		echo "<tr>";
		echo "<td>".$row['id']."</td>";
		echo "<td>".$row['phoneNo']."</td>";
		echo "<td>".$row['name']."</td>";
		echo "<td>".$row['dept']."</td>";
		?>
		<td>
		<a href="" class='btn btn-info'><span class='glyphicon glyphicon-list-alt'></span> &nbsp; Show</a>
		<a href="editStudent.php?id=<?php echo $row['id']; ?>" class='btn btn-warning'><span class='glyphicon glyphicon-edit'></span> &nbsp;Edit</a>
		<a onclick="confirm('Do you wont to delete this student ?');" href="includes/function.php?op=del&id=<?php echo $row['id']; ?>"  class='btn btn-danger' ><span class='glyphicon glyphicon-trash'></span> &nbsp;Delete</a>
		</td>
		</tr>
		<?php } ?>
	 </table>
	 </div>
<?php
require 'includes/footer.php';
 ?>
