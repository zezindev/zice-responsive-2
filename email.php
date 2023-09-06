<?php 


$name = addcslashes($_POST(['name']));
$email = addcslashes($_POST(['email']));
$phone = addcslashes($_POST(['phone']));
$subjectContact = addcslashes($_POST(['subject']));
$message = addcslashes($_POST(['message']));


$to = "joselucasskt@gmail.com";
$subject = $subjectContact;
$body = "Name: ".$nome. "\n";
        "Email: ".$email. "\n";
        "Message: ".$message;
?>