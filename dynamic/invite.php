<?php
require_once("MailChimp.php");

$MailChimp = new MailChimp('f412b2a0dc217fcd1ef71e19e4ee752d-us11');
$result = $MailChimp->call('lists/subscribe', array(
                'id'                => '9eed190e82',
                'email'             => array('email'=>clean($_GET['mail'])),
                //'merge_vars'        => array('FNAME'=>'', 'LNAME'=>''),
                'double_optin'      => false,
                'update_existing'   => false,
                'replace_interests' => false,
                'send_welcome'      => true,
            ));
print_r($result);

function clean($string) {
   $string = str_replace(' ', '-', $string); // Replaces all spaces with hyphens.

   return preg_replace('/[^\@\.A-Za-z0-9\-]/', '', $string); // Removes special chars.
}