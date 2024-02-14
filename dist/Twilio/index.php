<?php
// Incluir la librería de Twilio
require_once 'src/Twilio/autoload.php'; // Reemplaza 'path/to/twilio-php' con la ubicación real de la librería de Twilio

// Configurar las credenciales de Twilio
$account_sid = 'AC46bdbc72a7aae8703d0e0e04ac561851'; // Tu SID de cuenta de Twilio
$auth_token = 'bc454f8ac172c98d51c0c4a6d5fbf0f7'; // Tu token de autenticación de Twilio

// Crear un nuevo objeto de cliente Twilio
$client = new Services_Twilio($account_sid, $auth_token);

// Número de teléfono de destino
$to_number = '+573011453917'; // Reemplaza esto con el número de teléfono al que deseas enviar el mensaje

// Número de teléfono de Twilio (tu número de teléfono de Twilio)
$from_number = '+14155238886'; // Reemplaza esto con tu número de teléfono de Twilio

// Mensaje a enviar
$message = 'Este es un mensaje de prueba enviado desde PHP con Twilio.';

try {
    // Enviar el mensaje
    $client->account->messages->create(array(
        'To' => $to_number,
        'From' => $from_number,
        'Body' => $message,
    ));
    echo 'Mensaje enviado con éxito.';
} catch (Exception $e) {
    echo 'Se produjo un error al enviar el mensaje: ' . $e->getMessage();
}
?>