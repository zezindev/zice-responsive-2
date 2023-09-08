<?php 

if (isset($_POST['email']) && !empty($_POST['email'])) {
    $name = addslashes($_POST['name']);
    $email = addslashes($_POST['email']);
    $phone = addslashes($_POST['phone']);
    $subjectContact = addslashes($_POST['subject']);
    $message = addslashes($_POST['message']);


    $to = "joselucasskt@gmail.com";
    $subject = $subjectContact;
    $body = "Name: " . $nome . "\r\n" . "Email: " . $email . "\r\n" . "Message: " . $message;
    $header = "From:joselucasskt@gmail.com" . "\r\n" . "Reply-To:". $email . "\r\n" . "X=Mailer:PHP/" .phpversion();  

    if(mail($to,$subject,$body,$header)){
        echo("Email successfully sent!");
    }else{
        echo("Failed to send email!");
    }
}
?>