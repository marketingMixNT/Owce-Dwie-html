<?php 


$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$msg = $_POST['message'];


$to = 'marek.gacek@marketingmix.pl';
$subject = "Wiadomość z formularza kontaktowego ze strony owcedwie.pl";
$message = $msg

mail(
    string $to,
    string $subject,
    string $message,
    array|string $additional_headers = [],
    string $additional_params = ""
): bool