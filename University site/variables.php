<form action="variables.php" method="post">
    <input type="text" placeholder="Enter First No " name = "num1">
    <input type="text" placeholder="Enter second No " name = "num2">
    <input type="submit" value="Calculate" name="calc">
</form>
<?php 
if(isset($_POST['calc'])){
    //Arthimatic Operation
    $no1 = $_POST['num1'] ; 
    $no2 = $_POST['num2'] ;
    //echo var_dump($no1); print variable data type
    $sum = $no1 + $no2 ;
    echo $sum;
    print'<hr>';
    $sub = $no1 - $no2 ;
    echo $sub .'<hr>';
    $mult = $no1 * $no2 ;
    echo $mult .'<hr>';
    $mult = $no1 / $no2 ;
    echo $mult .'<hr>';
    $mult = $no1 % $no2 ;
    echo $mult .'<hr>';
    $mult = $no1 ** $no2 ;
    echo $mult .'<hr>'; 
    }
    ?>