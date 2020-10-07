<?php

session_start();

require_once('conn.php');
require_once('utils.php');

$username = $_POST['username'];
$password = $_POST['password'];

if (
  empty($username) || 
  empty($password)
) {
  header('Location: login.php?code=4');
  die('有欄位沒填喔 😅');
}

// 判斷資料庫裡有沒有這筆帳密
$sql = sprintf(
  'SELECT * FROM eva_msgBoard_users WHERE username="%s" AND password="%s"', 
  $username, 
  $password
);

$result = $conn->query($sql);

if ($result->num_rows) {
  // 建立 token 並儲存
  // $token = generateToken();
  // $sql = sprintf(
  //   'INSERT INTO eva_msgBoard_tokens(token, username) VALUES("%s", "%s")', 
  //   $token, 
  //   $username
  // );
  // $result = $conn->query($sql);
  // if (!$result) {
  //   die($conn->error);
  // }

  // 登入成功
  // $expire = time() + 3600;
  // setcookie('token', $token, $expire);

  // 把 username 存在 session 裡面
  /*
    1. 產生 session id (token)
    2. 把 username 寫入檔案
    3. set-cookie: session-id (把 session-id 設定到 client 端)
  */
  $_SESSION['username'] = $username;

  header('Location: index.php?code=21');
} else {
  header('Location: login.php?code=42');
}

?>