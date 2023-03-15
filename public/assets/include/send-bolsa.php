<?php 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

include_once 'common.php';
$resp = array('error'=>false,'message'=>'');

$resp['input'] = $_POST;
$resp['files'] = $_FILES;

if($_POST){ 

	require '../vendor/autoload.php';

	$nombre = $_POST['nombre'];
	$correo = $_POST['correo'];
	$telefono = $_POST['telefono'];
	$direccion = $_POST['direccion'];
	$pais = $_POST['pais'];
	$dni = $_POST['dni'];
	$experiencia = $_POST['experiencia'];
	$sexo = $_POST['sexo'];
	$mensaje = $_POST['mensaje'];

	$body = '<table>';

	$body .= '<tr>';
	$body .= '<td>Nombres y Apellidos: </td><td>'.$nombre.'</td>';
	$body .= '</tr>';

	$body .= '<tr>';
	$body .= '<td>Correo: </td><td>'.$correo.'</td>';
	$body .= '</tr>';

	$body .= '<tr>';
	$body .= '<td>Telefono: </td><td>'.$telefono.'</td>';
	$body .= '</tr>';

	$body .= '<tr>';
	$body .= '<td>Direccion: </td><td>'.$direccion.'</td>';
	$body .= '</tr>';

	$body .= '<tr>';
	$body .= '<td>Pais: </td><td>'.$pais.'</td>';
	$body .= '</tr>';

	$body .= '<tr>';
	$body .= '<td>DNI: </td><td>'.$dni.'</td>';
	$body .= '</tr>';

	$body .= '<tr>';
	$body .= '<td>Experiencia: </td><td>'.$experiencia.'</td>';
	$body .= '</tr>';

	$body .= '<tr>';
	$body .= '<td>Sexo: </td><td>'.$sexo.'</td>';
	$body .= '</tr>';

	$body .= '<tr>';
	$body .= '<td>Mensaje: </td><td>'.$mensaje.'</td>';
	$body .= '</tr>';

	$body .='</table>';
	//print_r($_FILES['cv']);

	$mail = new PHPMailer;
	
	$mail->isSMTP();
    $mail->Host       = 'smtp.office365.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = $_email_smtp_user;
    $mail->Password   = $_email_smtp_pass;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port       = 587;
    
    //$mail->setFrom($correo,$nombre,0);
	$mail->setFrom($_email_smtp_user,'Web Orocom');
	$mail->addReplyTo($correo,$nombre);
	
	foreach($_emails_destinatario as $_email_destinatario){
	$mail->addAddress($_email_destinatario);    
	}   

	$mail->WordWrap = 50;                                 // Set word wrap to 50 characters
	//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
	//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

	$mail->addAttachment( $_FILES['cv']['tmp_name'] , $_FILES['cv']['name'] ); 

	$mail->isHTML(true);                                  // Set email format to HTML

	$mail->Subject = 'CONTACTO BOLSA LABORAL OROCOM';
	$mail->Body    = $body;
	//$mail->AltBody = 'This is the body in plain text for non-HTML mail clients';\
	@$success = $mail->send();

	$resp['error'] = !$success;
	$resp['message'] = $mail->ErrorInfo;
}
echo json_encode($resp);exit;
?>
