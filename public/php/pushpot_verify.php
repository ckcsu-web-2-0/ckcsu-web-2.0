<?php

header('Content-type:text/html;charset=utf-8');

include('connect.php');
if(!isset($_POST['submit'])) {
    exit('Invalid Access');
}

$username = $_POST['login_username'];
$password = $_POST['login_password'];

if($username != 'zkzxyxsh' || $password != 'c78b5f66592198c740f5a68b57891009a296014cdc6190e14b597bb8b1b13d09') {
    session_start();
    $_SESSION['pushpotPwdWrong'] = true;
    header('Location: ../login.php');
    exit;
} else {
    session_start();
    $_SESSION['pushpot'] = true;
    if(isset($_SESSION['pushpotPwdWrong'])){
        $_SESSION['pushpotPwdWrong'] = null;
    }
    header('Location: ../index.html');
}

?>