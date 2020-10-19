<?php

session_start();
session_destroy();

// require_once('conn.php');

// 刪除 token
// $token = $_COOKIE['token'];
// $sql = sprintf(
//   'DELETE FROM eva_msgBoard_tokens WHERE token="%s"', 
//   $token
// );
// $conn->query($sql);

// 把 token 從 cookie 裡清空
// setcookie('token', '', time() - 3600);

header('Location: index.php?code=22');

?>