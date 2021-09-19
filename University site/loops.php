Birth Date
<br>
Day
<select>
<?php 
for ($i=1; $i <=31 ; $i++) { 
	?>
	<option><?php echo $i; ?></option>
<?php 	
}
 ?>
</select>
Month
<select>
<?php
$i = 1 ;
/*

*/
do 
{
	echo "<option>".$i."</option>";
	$i++;
}while($i <= 12 );
?>
</select>
Year
<select>

	<?php 
	$i = 1980;
	while ($i < 2019) {
	echo "<option>".$i."</option>";	
	$i++;
	}
	?>


</select>

<hr>

<?php 
$id = 10;
$name = "Ali";
$sal = 2000.50;
$emp1  = array($id,$name,$sal);
print_r($emp1);
echo "<hr>";

$emp  = array('id'=>10,'name'=>"ali",'salary'=>2000.50);
print_r($emp);
echo $emp['id'];

echo "<hr>";
for($i = 0 ; $i< count($emp) ; $i++)
echo $emp1[$i]."<br>";

echo "<hr>";

foreach($emp as $info)
echo $info."<br>";
 ?>