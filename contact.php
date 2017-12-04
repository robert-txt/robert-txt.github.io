<?php
/*if(!isset($_POST['submit']))
{
	//This page should not be accessed directly. Need to submit the form.
	echo "error; you need to submit the form!";
}*/
$name = $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];

//Validate first
if(empty($name)||empty($visitor_email)) 
{
    echo "Imię i adres email są obowiązkowe!";
    exit;
}

if(IsInjected($visitor_email))
{
    echo "NIeprawidłowy adres email!";
    exit;
}

$email_from = 'tymczasowy@onet.pl';//<== update the email address
$email_subject = "Nowa wiadomość ze strony PEWny-EXpress";
$email_body = "Od użytkownika $name.\n".
    "Treść:\n $message\n".
    
$to = "tymczasowy@onet.pl";//<== update the email address
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
//Send the email!
mail($to,$email_subject,$email_body,$headers);
//done. redirect to thank-you page.
header('Location: thank-you.html');


// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}
   
?> 