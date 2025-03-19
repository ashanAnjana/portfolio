<?php

use Hybridauth\Hybridauth;
use Hybridauth\Provider\Google;

require_once 'vendor/autoload.php';
require_once 'class-db.php';

define('GOOGLE_CLIENT_ID', '489188354588-kguku9o92btc1lgsdj20elfa7m3b61aa.apps.googleusercontent.com');
define('GOOGLE_CLIENT_SECRET', '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');
define('GOOGLE_EMAIL', 'ashangunasekara2@gmail.com');


$config = [
    'callback' => 'http://localhost/portfolioL1/callback.php',
    'keys'     => [
        'id' => GOOGLE_CLIENT_ID,
        'secret' => GOOGLE_CLIENT_SECRET
    ],
    'scope'    => 'https://mail.google.com',
    'authorize_url_parameters' => [
        'approval_prompt' => 'force',
        'access_type' => 'offline'
    ]
];

$adapter = new Google($config);
?>