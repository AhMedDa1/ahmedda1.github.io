<form action="logical.php" method = "post">
    <input type="text" name="fno" placeholder="Enter First No ">
    <input type="text" name="sno" placeholder="Enter Second No ">
    <select name="op">
    <option>+</option>
    <option>-</option>
    <option>*</option>
    <option>/</option>
    <option>%</option>
    </select>
    <input type="submit" value="GO" name="go">
</form>
<?php
if(isset($_POST['go'])){
    $no1 = $_POST['fno'];
    $no2 = $_POST['sno'];
    $op = $_POST['op'];
    
}
?>