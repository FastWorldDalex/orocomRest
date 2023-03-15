<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

include_once 'common.php';
$resp = array('error'=>false,'message'=>'');
if($_POST){
	require '../vendor/autoload.php';
	//Create an instance; passing `true` enables exceptions
	$mail = new PHPMailer;
	
	//Server settings
    //$mail->SMTPDebug = SMTP::DEBUG_SERVER;                     //Enable verbose debug output
    $mail->isSMTP();                                           //Send using SMTP
    $mail->Host       = 'smtp.office365.com';                  //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                  //Enable SMTP authentication
    $mail->Username   = $_email_smtp_user;                     //SMTP username
    $mail->Password   = $_email_smtp_pass;                     //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;           //Enable implicit TLS encryption
    $mail->Port       = 587;
    
	$nombre = $_POST['nombre'];
	$servicio = $_POST['servicio'];
	$correo = $_POST['correo'];
	$telefono = $_POST['telefono'];

	//$mail->setFrom($correo,$nombre,0);
	$mail->setFrom($_email_smtp_user,'Web Orocom');
	$mail->addReplyTo($correo,$nombre);
	foreach($_emails_destinatario as $_email_destinatario){
	$mail->addAddress($_email_destinatario);    
	}
	$mail->WordWrap = 50;                                 // Set word wrap to 50 characters
	//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
	//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
	$mail->isHTML(true);                                  // Set email format to HTML

	$mail->Subject = 'CONTACTO WEB OROCOM';
	$mail->Body    = 'Nombre: '. $nombre. '<br>'.
					 'Correo: '. $correo. '<br>'.
					 'Servicio: '. $servicio. '<br>'. 
					 'Telefono: '. $telefono;
	//$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';
	@$success = $mail->send();
	$resp['error'] = !$success;
	$resp['message'] = $mail->ErrorInfo;
}
echo json_encode($resp);exit;
?>