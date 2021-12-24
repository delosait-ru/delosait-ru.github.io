<?php
function ValidateEmail($email)
{
   $pattern = '/^([0-9a-z]([-.\w]*[0-9a-z])*@(([0-9a-z])+([-\w]*[0-9a-z])*\.)+[a-z]{2,6})$/i';
   return preg_match($pattern, $email);
}
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['formid']) && $_POST['formid'] == 'layer26')
{
   $mailto = 'gas-84958223051@yandex.ru';
   $mailfrom = isset($_POST['email']) ? $_POST['email'] : $mailto;
   $subject = 'Заполнена форма на сайте ROTINAR.RU';
   $message = 'Данные посетителя:';
   $success_url = './ss.php';
   $error_url = '';
   $eol = "\n";
   $error = '';
   $internalfields = array ("submit", "reset", "send", "filesize", "formid", "captcha_code", "recaptcha_challenge_field", "recaptcha_response_field", "g-recaptcha-response");
   $boundary = md5(uniqid(time()));
   $header  = 'From: '.$mailfrom.$eol;
   $header .= 'Reply-To: '.$mailfrom.$eol;
   $header .= 'MIME-Version: 1.0'.$eol;
   $header .= 'Content-Type: multipart/mixed; boundary="'.$boundary.'"'.$eol;
   $header .= 'X-Mailer: PHP v'.phpversion().$eol;

   try
   {
      if (!ValidateEmail($mailfrom))
      {
         $error .= "The specified email address (" . $mailfrom . ") is invalid!\n<br>";
         throw new Exception($error);
      }
      $message .= $eol;
      foreach ($_POST as $key => $value)
      {
         if (!in_array(strtolower($key), $internalfields))
         {
            if (!is_array($value))
            {
               $message .= ucwords(str_replace("_", " ", $key)) . " : " . $value . $eol;
            }
            else
            {
               $message .= ucwords(str_replace("_", " ", $key)) . " : " . implode(",", $value) . $eol;
            }
         }
      }
      $body  = 'This is a multi-part message in MIME format.'.$eol.$eol;
      $body .= '--'.$boundary.$eol;
      $body .= 'Content-Type: text/plain; charset=UTF-8'.$eol;
      $body .= 'Content-Transfer-Encoding: 8bit'.$eol;
      $body .= $eol.stripslashes($message).$eol;
      if (!empty($_FILES))
      {
         foreach ($_FILES as $key => $value)
         {
             if ($_FILES[$key]['error'] == 0)
             {
                $body .= '--'.$boundary.$eol;
                $body .= 'Content-Type: '.$_FILES[$key]['type'].'; name='.$_FILES[$key]['name'].$eol;
                $body .= 'Content-Transfer-Encoding: base64'.$eol;
                $body .= 'Content-Disposition: attachment; filename='.$_FILES[$key]['name'].$eol;
                $body .= $eol.chunk_split(base64_encode(file_get_contents($_FILES[$key]['tmp_name']))).$eol;
             }
         }
      }
      $body .= '--'.$boundary.'--'.$eol;
      if ($mailto != '')
      {
         mail($mailto, $subject, $body, $header);
      }
      header('Location: '.$success_url);
   }
   catch (Exception $e)
   {
      $errorcode = file_get_contents($error_url);
      $replace = "##error##";
      $errorcode = str_replace($replace, $e->getMessage(), $errorcode);
      echo $errorcode;
   }
   exit;
}
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['formid']) && $_POST['formid'] == 'layer32')
{
   $mailto = 'gas-84958223051@yandex.ru';
   $mailfrom = isset($_POST['email']) ? $_POST['email'] : $mailto;
   $subject = 'Заполнена форма на сайте ROTINAR.RU';
   $message = 'Данные посетителя:';
   $success_url = './ss.php';
   $error_url = '';
   $eol = "\n";
   $error = '';
   $internalfields = array ("submit", "reset", "send", "filesize", "formid", "captcha_code", "recaptcha_challenge_field", "recaptcha_response_field", "g-recaptcha-response");
   $boundary = md5(uniqid(time()));
   $header  = 'From: '.$mailfrom.$eol;
   $header .= 'Reply-To: '.$mailfrom.$eol;
   $header .= 'MIME-Version: 1.0'.$eol;
   $header .= 'Content-Type: multipart/mixed; boundary="'.$boundary.'"'.$eol;
   $header .= 'X-Mailer: PHP v'.phpversion().$eol;

   try
   {
      if (!ValidateEmail($mailfrom))
      {
         $error .= "The specified email address (" . $mailfrom . ") is invalid!\n<br>";
         throw new Exception($error);
      }
      $message .= $eol;
      foreach ($_POST as $key => $value)
      {
         if (!in_array(strtolower($key), $internalfields))
         {
            if (!is_array($value))
            {
               $message .= ucwords(str_replace("_", " ", $key)) . " : " . $value . $eol;
            }
            else
            {
               $message .= ucwords(str_replace("_", " ", $key)) . " : " . implode(",", $value) . $eol;
            }
         }
      }
      $body  = 'This is a multi-part message in MIME format.'.$eol.$eol;
      $body .= '--'.$boundary.$eol;
      $body .= 'Content-Type: text/plain; charset=UTF-8'.$eol;
      $body .= 'Content-Transfer-Encoding: 8bit'.$eol;
      $body .= $eol.stripslashes($message).$eol;
      if (!empty($_FILES))
      {
         foreach ($_FILES as $key => $value)
         {
             if ($_FILES[$key]['error'] == 0)
             {
                $body .= '--'.$boundary.$eol;
                $body .= 'Content-Type: '.$_FILES[$key]['type'].'; name='.$_FILES[$key]['name'].$eol;
                $body .= 'Content-Transfer-Encoding: base64'.$eol;
                $body .= 'Content-Disposition: attachment; filename='.$_FILES[$key]['name'].$eol;
                $body .= $eol.chunk_split(base64_encode(file_get_contents($_FILES[$key]['tmp_name']))).$eol;
             }
         }
      }
      $body .= '--'.$boundary.'--'.$eol;
      if ($mailto != '')
      {
         mail($mailto, $subject, $body, $header);
      }
      header('Location: '.$success_url);
   }
   catch (Exception $e)
   {
      $errorcode = file_get_contents($error_url);
      $replace = "##error##";
      $errorcode = str_replace($replace, $e->getMessage(), $errorcode);
      echo $errorcode;
   }
   exit;
}
if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['formid']) && $_POST['formid'] == 'modal')
{
   $mailto = 'gas-84958223051@yandex.ru';
   $mailfrom = isset($_POST['email']) ? $_POST['email'] : $mailto;
   $subject = 'Заполнена форма на сайте ROTINAR.RU';
   $message = 'Данные посетителя:';
   $success_url = './ss.php';
   $error_url = '';
   $eol = "\n";
   $error = '';
   $internalfields = array ("submit", "reset", "send", "filesize", "formid", "captcha_code", "recaptcha_challenge_field", "recaptcha_response_field", "g-recaptcha-response");
   $boundary = md5(uniqid(time()));
   $header  = 'From: '.$mailfrom.$eol;
   $header .= 'Reply-To: '.$mailfrom.$eol;
   $header .= 'MIME-Version: 1.0'.$eol;
   $header .= 'Content-Type: multipart/mixed; boundary="'.$boundary.'"'.$eol;
   $header .= 'X-Mailer: PHP v'.phpversion().$eol;

   try
   {
      if (!ValidateEmail($mailfrom))
      {
         $error .= "The specified email address (" . $mailfrom . ") is invalid!\n<br>";
         throw new Exception($error);
      }
      $message .= $eol;
      foreach ($_POST as $key => $value)
      {
         if (!in_array(strtolower($key), $internalfields))
         {
            if (!is_array($value))
            {
               $message .= ucwords(str_replace("_", " ", $key)) . " : " . $value . $eol;
            }
            else
            {
               $message .= ucwords(str_replace("_", " ", $key)) . " : " . implode(",", $value) . $eol;
            }
         }
      }
      $body  = 'This is a multi-part message in MIME format.'.$eol.$eol;
      $body .= '--'.$boundary.$eol;
      $body .= 'Content-Type: text/plain; charset=UTF-8'.$eol;
      $body .= 'Content-Transfer-Encoding: 8bit'.$eol;
      $body .= $eol.stripslashes($message).$eol;
      if (!empty($_FILES))
      {
         foreach ($_FILES as $key => $value)
         {
             if ($_FILES[$key]['error'] == 0)
             {
                $body .= '--'.$boundary.$eol;
                $body .= 'Content-Type: '.$_FILES[$key]['type'].'; name='.$_FILES[$key]['name'].$eol;
                $body .= 'Content-Transfer-Encoding: base64'.$eol;
                $body .= 'Content-Disposition: attachment; filename='.$_FILES[$key]['name'].$eol;
                $body .= $eol.chunk_split(base64_encode(file_get_contents($_FILES[$key]['tmp_name']))).$eol;
             }
         }
      }
      $body .= '--'.$boundary.'--'.$eol;
      if ($mailto != '')
      {
         mail($mailto, $subject, $body, $header);
      }
      header('Location: '.$success_url);
   }
   catch (Exception $e)
   {
      $errorcode = file_get_contents($error_url);
      $replace = "##error##";
      $errorcode = str_replace($replace, $e->getMessage(), $errorcode);
      echo $errorcode;
   }
   exit;
}
?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Заправка техническими газами</title>
<meta name="robots" content="noindex, nofollow">
<link href="favicon.png" rel="icon" sizes="240x240" type="image/png">
<link href="favicon.png" rel="icon" sizes="240x240" type="image/png">
<link href="favicon.png" rel="icon" sizes="240x240" type="image/png">
<link href="favicon.png" rel="apple-touch-icon" sizes="240x240">
<link href="css/Untitled1.css" rel="stylesheet">
<link href="css/politica.css" rel="stylesheet">
<script src="js/jquery-1.12.4.min.js"></script>
<script src="js/jquery-ui.min.js"></script>
<script src="js/wwb15.min.js"></script>
</head>
<body>
<div id="container">

</div>
<div id="Layer3">
<div id="Layer3_Container">
<div id="wb_EmbeddedPage2">
<div id="Layer1">
<div id="Layer1_Container">
<div id="wb_Image1">
<a href="./index.php"><img src="images/hr6ck5vur0.jpg" id="Image1" alt=""></a></div>
<div id="wb_Text1">
<span id="wb_uid0"><strong>24</strong></span><span id="wb_uid1"><strong> ГАЗ</strong></span></div>
<div id="wb_Text2">
<span id="wb_uid2">Заправка техническими газами</span></div>
<div id="wb_IconFont1">
<div id="IconFont1"><i class="material-icons">&#xe0e1;</i></div></div>
<div id="wb_Text3">
<span id="wb_uid3"><a href="mailto:vitaliyb@rr-grup.ru" class="mail-header">gas-84958223051@yandex.ru</a></span></div>
<div id="wb_Text4">
<span id="wb_uid4"><strong><a href="tel:84958223051" class="phone">+7 (495) 822-30-51</a></strong></span></div>
</div>
</div>
</div>
</div>
</div>
<div id="Layer2">
<div id="Layer2_Container">
<div id="wb_EmbeddedPage1">
<div id="wb_TextMenu1">
<span><a href="http://" class="menu-top">&#1050;&#1080;&#1089;&#1083;&#1086;&#1088;&#1086;&#1076;</a></span><span><a href="./propan.php" class="menu-top">&#1055;&#1088;&#1086;&#1087;&#1072;&#1085;</a></span><span><a href="http://" class="menu-top">&#1040;&#1094;&#1077;&#1090;&#1080;&#1083;&#1077;&#1085;</a></span><span><a href="http://" class="menu-top">&#1059;&#1075;&#1083;&#1077;&#1082;&#1080;&#1089;&#1083;&#1086;&#1090;&#1072;</a></span><span><a href="http://" class="menu-top">&#1040;&#1088;&#1075;&#1086;&#1085;</a></span><span><a href="http://" class="menu-top">&#1057;&#1074;&#1072;&#1088;&#1086;&#1095;&#1085;&#1072;&#1103; &#1089;&#1084;&#1077;&#1089;&#1100;</a></span><span><a href="http://" class="menu-top">&#1040;&#1079;&#1086;&#1090;</a></span><span><a href="http://" class="menu-top">&#1043;&#1077;&#1083;&#1080;&#1081;</a></span></div>
</div>
</div>
</div>
<div id="Layer4">
<div id="Layer4_Container">
<div id="Layer5">
<div id="Layer5_Container">
<div id="wb_Text6">
<span id="wb_uid5"><strong>ЗАПРАВКА ТЕХНИЧЕСКИМИ ГАЗАМИ</strong></span></div>
<div id="wb_Text7">
<span id="wb_uid6">Продажа, обмен, аренда и доставка газовых баллонов</span></div>
</div>
</div>
<div id="wb_Shape1">
<a href="" onclick="ShowObjectWithEffect('overlay', 1, 'fade', 300);ShowObjectWithEffect('modal', 1, 'dropdown', 500);return false;"><img class="hover" src="images/img0010_hover.png" alt="" id="wb_uid7"><span class="default"><img src="images/img0010.png" id="Shape1" alt="" data-fancybox data-src="#buy" href="javascript:;"></span></a></div>
</div>
</div>
<div id="Layer6">
<div id="Layer6_Container">
<div id="Layer7">
<div id="Layer7_Container">
<div id="wb_Text8">
<span id="wb_uid8"><strong>20 ЛЕТ</strong></span></div>
<div id="wb_Text9">
<span id="wb_uid9">на рынке технических газов</span></div>
</div>
</div>
<div id="Layer8">
<div id="Layer8_Container">
<div id="wb_Text10">
<span id="wb_uid10"><strong>5000</strong></span></div>
<div id="wb_Text11">
<span id="wb_uid11">заказов за год</span></div>
</div>
</div>
<div id="Layer9">
<div id="Layer9_Container">
<div id="wb_Text12">
<span id="wb_uid12"><strong>300</strong></span></div>
<div id="wb_Text13">
<span id="wb_uid13">постоянных клиентов</span></div>
</div>
</div>
</div>
</div>
<div id="Layer10">
<div id="Layer10_Container">
<div id="Layer11">
<div id="wb_Text14">
<span id="wb_uid14"><strong>Продажа баллонов</strong></span></div>
<div id="wb_Text15">
<span id="wb_uid15"> Оптовая и розничная продажа баллонов от 5 до 50 л, новые и оборотные, заправленные и пустые </span></div>
<div id="wb_IconFont2">
<div id="IconFont2"><i class="material-icons">&#xe8cc;</i></div></div>
</div>
<div id="Layer12">
<div id="wb_Text16">
<span id="wb_uid16"><strong>Скупка баллонов</strong></span></div>
<div id="wb_Text17">
<span id="wb_uid17">Сдавайте б/у баллоны в любом состоянии по хорошей цене.</span></div>
<div id="wb_IconFont3">
<div id="IconFont3"><i class="material-icons">&#xe54c;</i></div></div>
</div>
<div id="Layer13">
<div id="wb_Text18">
<span id="wb_uid18"><strong>Обмен балонов</strong></span></div>
<div id="wb_Text19">
<span id="wb_uid19">Доставим Вам заправленные баллоны и заберём пустые.</span></div>
<div id="wb_IconFont4">
<div id="IconFont4"><i class="material-icons">&#xe863;</i></div></div>
</div>
<div id="Layer14">
<div id="wb_Text20">
<span id="wb_uid20"><strong>Аренда баллонов</strong></span></div>
<div id="wb_Text21">
<span id="wb_uid21">Выгодный вариант для небольших объектов и краткосрочных работ.</span></div>
<div id="wb_IconFont5">
<div id="IconFont5"><i class="material-icons">&#xe85d;</i></div></div>
</div>
<div id="Layer15">
<div id="wb_Text22">
<span id="wb_uid22"><strong>Заправка баллонов</strong></span></div>
<div id="wb_Text23">
<span id="wb_uid23">Безопасная заправка баллонов качественными техническими газами.</span></div>
<div id="wb_IconFont6">
<div id="IconFont6"><i class="material-icons">&#xe15a;</i></div></div>
</div>
<div id="Layer16">
<div id="wb_Text25">
<span id="wb_uid24">Быстрая и безопасная доставка в любую точку Москвы и Московской области.</span></div>
<div id="wb_IconFont7">
<div id="IconFont7"><i class="material-icons">&#xe558;</i></div></div>
<div id="wb_Text24">
<span id="wb_uid25"><strong>Доставка баллонов</strong></span></div>
</div>
</div>
</div>
<div id="Layer17">
<div id="Layer17_Container">
<div id="Layer18">
<div id="Layer18_Container">
<div id="wb_IconFont8">
<div id="IconFont8"><i class="material-icons">&#xe52d;</i></div></div>
<div id="wb_Text26">
<span id="wb_uid26"><strong>АЗОТ</strong></span></div>
</div>
</div>
<div id="wb_Text27">
<span id="wb_uid27">ТЕХНИЧЕСКИЕ ГАЗЫ</span></div>
<div id="Layer19">
<div id="Layer19_Container">
<div id="wb_IconFont9">
<div id="IconFont9"><i class="material-icons">&#xe52d;</i></div></div>
<div id="wb_Text28">
<span id="wb_uid28"><strong>КИСЛОРОД</strong></span></div>
</div>
</div>
<div id="Layer20">
<div id="Layer20_Container">
<div id="wb_IconFont10">
<div id="IconFont10"><i class="material-icons">&#xe52d;</i></div></div>
<div id="wb_Text29">
<span id="wb_uid29"><strong>АРГОН</strong></span></div>
</div>
</div>
<div id="Layer21">
<div id="Layer21_Container">
<div id="wb_IconFont11">
<div id="IconFont11"><i class="material-icons">&#xe52d;</i></div></div>
<div id="wb_Text30">
<span id="wb_uid30"><strong>АЦЕТИЛЕН</strong></span></div>
</div>
</div>
<div id="Layer22">
<div id="Layer22_Container">
<div id="wb_IconFont12">
<div id="IconFont12"><i class="material-icons">&#xe52d;</i></div></div>
<div id="wb_Text31">
<span id="wb_uid31"><strong>ГЕЛИЙ</strong></span></div>
</div>
</div>
<div id="Layer23">
<div id="Layer23_Container">
<div id="wb_IconFont13">
<div id="IconFont13"><i class="material-icons">&#xe52d;</i></div></div>
<div id="wb_Text32">
<span id="wb_uid32"><strong>ПРОПАН</strong></span></div>
</div>
</div>
<div id="Layer24">
<div id="Layer24_Container">
<div id="wb_IconFont14">
<div id="IconFont14"><i class="material-icons">&#xe52d;</i></div></div>
<div id="wb_Text33">
<span id="wb_uid33"><strong>СВАРОЧНАЯ СМЕСЬ</strong></span></div>
</div>
</div>
<div id="Layer25">
<div id="Layer25_Container">
<div id="wb_IconFont15">
<div id="IconFont15"><i class="material-icons">&#xe52d;</i></div></div>
<div id="wb_Text34">
<span id="wb_uid34"><strong>УГЛЕКИСЛОТА</strong></span></div>
</div>
</div>
</div>
</div>
<form name="Layer26" method="post" action="<?php echo basename(__FILE__); ?>" enctype="multipart/form-data" accept-charset="UTF-8" target="_blank" id="Layer26">
<input type="hidden" name="formid" value="layer26">
<div id="Layer26_Container">
<input type="text" id="Editbox1" class="phone1" name="Телефон" value="" spellcheck="false" placeholder="&#1042;&#1072;&#1096;&#1077; &#1090;&#1077;&#1083;&#1077;&#1092;&#1086;&#1085;">
<input type="text" id="Editbox2" name="Имя" value="" spellcheck="false" placeholder="&#1042;&#1072;&#1096;&#1077; &#1080;&#1084;&#1103;">
<input type="submit" id="Button1" name="" value="Отправить заявку">
<div id="wb_Text35">
<span id="wb_uid35">Политика конфиденциальности</span></div>
<div id="wb_IconFont16">
<div id="IconFont16"><i class="material-icons">&#xe897;</i></div></div>
</div>
</form>
<div id="Layer27">
<div id="Layer27_Container">
<div id="wb_Text37">
<span id="wb_uid36">Производственные площадки </span></div>
<div id="Layer28">
<div id="Layer28_Container">
<div id="wb_IconFont17">
<div id="IconFont17"><i class="material-icons">&#xe8b4;</i></div></div>
<div id="wb_Text38">
<span id="wb_uid37"><strong><a href="tel:84958223051" class="menu-top">+7 (495) 822-30-51</a></strong></span></div>
<div id="wb_Text36">
<span id="wb_uid38">г. Москва, 2-й Лихачёвский пер., 12</span></div>
<div id="wb_IconFont18">
<div id="IconFont18"><i class="material-icons">&#xe0cd;</i></div></div>
</div>
</div>
<div id="Html1">
<script charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A0e5fff1d1f03766ea44953aa5105140c3cb47002954980100e70210b3196805d&amp;width=100%25&amp;height=365&amp;lang=ru_RU&amp;scroll=true"></script></div>
<div id="Layer29">
<div id="Layer29_Container">
<div id="wb_IconFont20">
<div id="IconFont20"><i class="material-icons">&#xe8b4;</i></div></div>
<div id="wb_Text40">
<span id="wb_uid39"><strong><a href="tel:84958223051" class="menu-top">+7 (495) 822-30-51</a></strong></span></div>
<div id="wb_IconFont21">
<div id="IconFont21"><i class="material-icons">&#xe0cd;</i></div></div>
<div id="wb_Text39">
<span id="wb_uid40">г. Москва, ул.Дорожная 21А строение 5</span></div>
</div>
</div>
<div id="Html2">
<script charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A0e5fff1d1f03766ea44953aa5105140c3cb47002954980100e70210b3196805d&amp;width=100%25&amp;height=365&amp;lang=ru_RU&amp;scroll=true"></script></div>
</div>
</div>
<div id="Layer30">
<div id="Layer30_Container">
<div id="Layer31">
<div id="Layer31_Container">
<div id="wb_Text41">
<span id="wb_uid41"><strong>Гарантия качества</strong></span></div>
<div id="wb_Text43">
<span id="wb_uid42">Качество наших технических газов проверено временем. Нам доверяют частные лица, компании и государственные учреждения.</span></div>
<div id="wb_Text45">
<span id="wb_uid43"><strong>Опытные сотрудники</strong></span></div>
<div id="wb_Text44">
<span id="wb_uid44">Наши сотрудники - опытные профессионалы. Они доброжелательны и всегда готовы подсказать выгодный вариант.</span></div>
<div id="wb_Text47">
<span id="wb_uid45"><strong>Оперативность доставки</strong></span></div>
<div id="wb_Text46">
<span id="wb_uid46">Наши сотрудники - опытные профессионалы. Они доброжелательны и всегда готовы подсказать выгодный вариант.</span></div>
</div>
</div>
<form name="MainForm" method="post" action="<?php echo basename(__FILE__); ?>" enctype="multipart/form-data" accept-charset="UTF-8" target="_blank" id="Layer32">
<input type="hidden" name="formid" value="layer32">
<input type="text" id="Editbox3" name="Имя" value="" spellcheck="false" placeholder="&#1042;&#1072;&#1096;&#1077; &#1080;&#1084;&#1103;">
<input type="text" id="Editbox4" class="phone1" name="Телефон" value="" spellcheck="false" placeholder="&#1042;&#1072;&#1096;&#1077; &#1090;&#1077;&#1083;&#1077;&#1092;&#1086;&#1085;">
<input type="submit" id="Button2" name="" value="Отправить заявку">
<div id="wb_Text5">
<span id="wb_uid47">Оставьте заявку или позвоните по телефону</span></div>
<div id="wb_Text42">
<span id="wb_uid48"><strong><a href="tel:84958223051" class="menu-top">+7 (495) 822-30-51</a></strong></span></div>
<div id="wb_IconFont22">
<div id="IconFont22"><i class="material-icons">&#xe897;</i></div></div>
<div id="wb_Text50">
<span id="wb_uid49">Политика конфиденциальности</span></div>
</form>
</div>
</div>
<div id="overlay" onclick="ShowObject('overlay', 0);ShowObject('modal', 0);return false;">
<div id="overlay_Container">
</div>
</div>
<form name="Form_modal" method="post" action="<?php echo basename(__FILE__); ?>" enctype="multipart/form-data" accept-charset="UTF-8" target="_blank" id="modal">
<input type="hidden" name="formid" value="modal">
<input type="text" id="Editbox5" name="Имя" value="" spellcheck="false" placeholder="&#1042;&#1072;&#1096;&#1077; &#1080;&#1084;&#1103;">
<input type="text" id="Editbox6" class="phone1" name="Телефон" value="" spellcheck="false" placeholder="&#1042;&#1072;&#1096;&#1077; &#1090;&#1077;&#1083;&#1077;&#1092;&#1086;&#1085;">
<input type="submit" id="Button3" name="" value="Отправить заявку">
<div id="wb_Text48">
<span id="wb_uid50">Оставьте заявку или позвоните по телефону</span></div>
<div id="wb_IconFont19">
<a href="#" onclick="ShowObject('overlay', 0);ShowObject('modal', 0);return false;"><div id="IconFont19"><i class="material-icons">&#xe14c;</i></div></a></div>
<div id="wb_IconFont23">
<div id="IconFont23"><i class="material-icons">&#xe897;</i></div></div>
<div id="wb_Text51">
<span id="wb_uid51">Политика конфиденциальности</span></div>
<div id="wb_Text49">
<span id="wb_uid52"><a href="tel:84958223051" class="phoneform">+7 (495) 822-30-51</a></span></div>
</form>
<script src="js/mask.js"></script>

<script>
$(".phone1").mask("8(999) 999-99-99");
</script></body>
</html>