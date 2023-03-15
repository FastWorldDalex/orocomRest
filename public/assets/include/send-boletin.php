<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

include_once 'common.php';
$resp = array('error'=>false,'message'=>'');
if($_POST){
	require '../vendor/autoload.php';
	//Create an instance; passing `true` enables exceptions
	$correo = $_POST['correo'];

	$mail = new PHPMailer;
	
	$mail->isSMTP();
    $mail->Host       = 'smtp.office365.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = $_email_smtp_user;
    $mail->Password   = $_email_smtp_pass;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;
    
	//$mail->setFrom($correo);
	$mail->setFrom($_email_smtp_user,'Web Orocom');
	$mail->addReplyTo($correo);
	foreach($_emails_destinatario as $_email_destinatario){
	$mail->addAddress($_email_destinatario);    
	}
	$mail->WordWrap = 50;                                 // Set word wrap to 50 characters
	//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
	//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
	$mail->isHTML(true);                                  // Set email format to HTML

	$mail->Subject = 'BOLETIN OROCOM';
	$mail->Body    = 'Correo :'. $correo;
	//$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
	@$success = $mail->send();
	$resp['error'] = !$success;
	$resp['message'] = $mail->ErrorInfo;
}
echo json_encode($resp);exit;
?>