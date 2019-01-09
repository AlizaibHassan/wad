<!DOCTYPE html>
<html>
<head>
<title>Benifits of Trees</title>
</head>
<body>

<center>
<h1>Here are few Benifits of Trees</h1></body>
</center>


<?php 

$benifits = array("TREES COMBAT CLIMATE CHANGE","TREES CLEAN THE AIR","TREES PROVIDE OXYGEN
","TREES COOL THE STREETS AND THE CITY
","TREES CONSERVE ENERGY");

?>

<?php

for ($i=0; $i <5 ; $i++) { 


?>

<ul><li> <?php echo $benifits[$i]; ?> </li></ul>

<?php

}

?>

</body>
</html>
