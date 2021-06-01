<?php

$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
$headers .= 'From: info@spbaichamp.ru' . "\r\n";


$body = '
<div style="">
	<table cellpadding="0" cellspacing="0" border="0" width="682" style="margin:0 30px;">
	  <tr>
	  <h1>Новая заявка</h1>
';


$body.='

    <tr>
      <td style="font-family:Verdana,Helvetica,sans-serif;font-size:13px;line-height:22px;vertical-align:top;padding:0 60px 1px 0;white-space:nowrap;">Страница запроса:</td>
      <td style="font-family:Verdana,Helvetica,sans-serif;color:#272625;font-size:15px;line-height:22px;vertical-align:top;padding:0 0 4px 0;">'.$_SERVER['HTTP_REFERER'].'</td>
    </tr> 

';

        
if ($_POST['email']) {
  $body.='
  
      <tr>
        <td style="font-family:Verdana,Helvetica,sans-serif;font-size:13px;line-height:22px;vertical-align:top;padding:0 60px 1px 0;white-space:nowrap;">E-mail:</td>
        <td style="font-family:Verdana,Helvetica,sans-serif;color:#272625;font-size:15px;line-height:22px;vertical-align:top;padding:0 0 4px 0;">'.$_POST['email'].'</td>
      </tr>  
  
  ';
}


$body.='

	  </tr>
	</table>
</div>

';


if ($_POST['email']) {
  mail("darksyrax@gmail.com", "Новая заявка", $body, $headers);
  mail("dmitriikazackii@gmail.com", "Новая заявка", $body, $headers);
}



?>