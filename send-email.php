<?php

    


use Symfony\Component\Mailer\Transport;
use Symfony\Component\Mailer\Mailer;
use Symfony\Component\Mime\Email;

use function PHPSTORM_META\type;

// header('Content-Type: application/json');

    require_once 'config.php';
    global $adapter;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $msg = $_POST['message'] ?? '';
    $subject = $_POST['subject'] ?? '';
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode(['status' => 'error1', 'message' => 'Invalid email address.']);
        exit;
    }

    send_email_to_user($email, $msg, $subject);
}

function send_email_to_user($email, $msg, $subject) {
    require_once 'config.php';
    global $adapter;

    $db = new DB();
    $arr_token = $db->get_access_token();
    $decode_data = json_decode($arr_token, true);
    $token_data = json_decode($decode_data, true);
    try {
        $transport = Transport::fromDsn(
            'gmail+smtp://'.urlencode(GOOGLE_EMAIL).':'.
            urlencode($token_data['access_token']).'@default'
        );
                
        $mailer = new Mailer($transport);

        $message = (new Email())
            ->from('PORTFOLIO <'.$email.'>')
            ->to('ashangunasekara2@gmail.com')
            ->subject($subject)
            ->html('<h2> Sender Email Address: '.$email.'</h2>'.'<h3> Content: </h3>'.'<p>'.$msg.'</p>');

        //send the message
        $mailer->send($message);
        echo json_encode(['status' => 'success', 'message' => 'Email sent successfully!']);


    } catch(Exception $e) {
        if(in_array($e->getCode(), ['535', '334'])) {
            $refresh_token = $db->get_refersh_token();
            $response = $adapter->refreshAccessToken([
                "grant_type" => "refresh_token",
                "refresh_token" => $refresh_token,
                "client_id" => GOOGLE_CLIENT_ID,
                "client_secret" => GOOGLE_CLIENT_SECRET,
            ]);

            $data = (array) json_decode($response);
            $data['refresh_token'] = $refresh_token;
            //var_dump($data); die;
            $db->update_access_token(json_encode($data));

            send_email_to_user($email, $msg, $subject);

        }else {
            echo json_encode(['status' => 'error', 'message' => $e->getMessage()]);
            //echo $e->getMessage();
        }
    }
}

?>
