<?php
function register(){
	include 'connection.php';
	$phone_no =$_POST['phone_no'] ;
	$name = $_POST['name'];
	$dept = $_POST['dept'];
	$pwd = md5($_POST['pwd']);
	$con_pwd = md5($_POST['con_pwd']);
	if($pwd == $con_pwd)
	{
		$str = "insert into student(phoneNo,name,dept,pwd) values ('$phone_no','$name','$dept','$pwd')";
		$qry = mysqli_query($con,$str) or die(mysqli_error($con));
		if($qry)
		{
		echo "<script>alert('Data Has Been Saved ');
		window.location='../register.php';</script>";	
		}else
		{
			echo "<script>alert('Error Not Saved ');
		";
		}
	}
	else
		echo "<script>alert('Password Not Matched ');
		window.location='../register.php';</script>";
}

if(isset($_POST['reg'])){
	register();
}
function save(){
	include 'connection.php';
	$co_name =$_POST['co_name'] ;
	$co_dept = $_POST['co_dept'];
	$co_st_nos = $_POST['co_st_nos'];
	$co_days = $_POST['co_days'];
	$co_amount = $_POST['co_amount'];
	$co_image = $_FILES['co_image'];
	$image_name = $co_image['name'];
	$image_tmp = $_FILES['co_image']['tmp_name'];
	$des = '../image/'.$image_name;
	
		$str = "INSERT INTO `course`(`name`, `dept`, `st_nos`, `days`, `amount`, `co_image`) values ('$co_name','$co_dept','$co_st_nos','$co_days','$co_amount','$image_name')";
		$qry = mysqli_query($con,$str) or die(mysqli_error($con));
		if($qry)
		{
			move_uploaded_file($image_tmp, $des);
		echo "<script>alert('Data Has Been Saved ');
		window.location='../course.php';</script>";	
		}else
		{
			echo "<script>alert('Error Not Saved ');
			window.location='../addCourse.php';</script>";	
		}
	}
	

if(isset($_POST['add'])){
	save();
}
function deleteStudent($id)
{
	include 'connection.php';
	$str = "delete from student where id = $id ";
	$qry =  mysqli_query($con , $str) or die(mysqli_error($con));
	if ($qry) {
		echo "<script>alert('Data delete');
			window.location='../index.php';</script>";	
	}else{
		echo "<script>alert('Error  ');
			window.location='../index.php';</script>";	
	}
}
if (isset($_GET['op'])) {
$id = $_GET['id'];
deleteStudent($id);
}
function editStudent($id){
	include 'connection.php';
	$phone_no = $_POST['phone_no'];
	$name = $_POST['name'];
	$dept = $_POST['dept'];

	$str = "update student set phoneNo = '$phone_no' , name = '$name' , dept = '$dept' where id = $id";
	$qry = mysqli_query($con , $str ) or die(mysqli_error($con));
	if ($qry) {
		echo "<script>alert('Data Updated');
			window.location='../index.php';</script>";	
	}else{
		echo "<script>alert('Error  ');
			window.location='../editStudent.php?id=$id';</script>";	
	}
}
if (isset($_POST['editStudent'])) {
$id = $_GET['id'];


editStudent($id);
}
?>