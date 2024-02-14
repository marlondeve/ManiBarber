<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Obtener los datos del formulario
        $nombre = $_POST['nombre'];
        $numero = $_POST['numero'];
        $servicio = $_POST['servicio'];
        $fecha = $_POST['fecha'];
        $hora = $_POST['hora'];
    }
    echo  $nombre;
    // Update the path below to your autoload.php,
    // see https://getcomposer.org/doc/01-basic-usage.md
    require_once 'Twilio/src/Twilio/autoload.php';
    use Twilio\Rest\Client;

    $sid    = "AC46bdbc72a7aae8703d0e0e04ac561851";
    $token  = "bc454f8ac172c98d51c0c4a6d5fbf0f7";
    $twilio = new Client($sid, $token);

  
    // Crear el cuerpo del mensaje con los datos del formulario
    $body = "Buenas, agendamiento desde ManiBarber.com\n";
    $body .= "Nombre: $nombre\n";
    $body .= "Fecha: $fecha\n";
    $body .= "Hora: $hora\n";
    $body .= "Numero: $numero\n";
    $body .= "Tipo de servicio: $servicio\n";

    // Enviar el mensaje con Twilio
    $message = $twilio->messages
      ->create("whatsapp:+573173202747", // to
        array(
          "from" => "whatsapp:+14155238886",
          "body" => $body
        )
      );

    header("Location: index.html#good");
    
?>