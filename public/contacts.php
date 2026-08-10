<?php
// Файлы phpmailer
require 'src/PHPMailer.php';
require 'src/SMTP.php';
require 'src/Exception.php';

// Переменные, которые отправляет пользователь
$phone = $_POST['phone'];
$page_url = $_POST['page_url'];
// поверка chat_id https://api.telegram.org/bot8059232119:AAHj8i1DCGdagBeZqJt6pF-KJ5A-OuYmI2g/getUpdates
$chat_id='-5024992343';
$token = '8059232119:AAHj8i1DCGdagBeZqJt6pF-KJ5A-OuYmI2g';

// $phoneT = '<b>Телефон:+7</b>';

// ✅ Заголовок для Telegram
$titleTelegram = "<b>Заявка с сайта https://lavaproperty.com/</b>\n<b></b>\n\n";

// Формирование сообщения для Telegram
$txt = $titleTelegram;  // начинаем с заголовка
$arr = array(
    'Телефон:' => '+' . ltrim($phone, '+'),
        'Страница:' => $page_url, // ✅ Добавляем страницу
);

foreach ($arr as $key => $value) {
    $txt .= "<b>" . $key . "</b> " . $value . "\n";
}

// Формирование письма
$title = 'Lava Property - заявка с сайта';
$body = "
<b>Телефон:</b> +$phone<br>
<b>Страница:</b> <a href='$page_url'>$page_url</a>
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->Encoding = 'base64';
    $mail->SMTPAuth = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {
        $GLOBALS['status'][] = $str;
    };

    // Настройки почтового сервера
    $mail->Host = 'smtp.yandex.ru';
    $mail->Username = '';
    $mail->Password = ''; // пароль приложения
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;
    $mail->setFrom('', 'To Lava Property');

    // Получатель письма
    $mail->addAddress('');

    // Отправка письма
    $mail->isHTML(true);
    $mail->Subject = '=?UTF-8?B?' . base64_encode($title) . '?=';
    $mail->Body = $body;

   // ✅ Отправка сообщения в Telegram
    $encodedTxt = urlencode($txt);
    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$encodedTxt}", "r");

    if ($mail->send() && $sendToTelegram) {
        $result = "success";
    } else {
        $result = "error";
    }
} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
echo json_encode(["result" => $result, "status" => $status]);
?>