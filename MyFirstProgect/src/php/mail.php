<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['text_name'];
$email = $_POST['user_email'];
$text = $_POST ['textarea']

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'gabdeeva_rita@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'asdfghjklmnbvcxzqwertyuiop23072003'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('gabdeeva_rita@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('pigoti7280@funboxcn.com');     // Кому будет уходить письмо 
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка на разработку лендинг сайта';
$mail->Body    = '' .$name . ' , вы оставили заявку на разработку лендинг сайта от Маргариты Габдеевой. В ближайщее время с вами свяжется менеджер для подтверждения заявки!'
$mail->AltBody = '';

if(!$mail->send()) {
    return false;
} else {
    return true;
}
?>