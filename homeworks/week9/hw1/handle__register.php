<?php

require_once('conn.php');

$nickname = $_POST['nickname'];
$username = $_POST['username'];
$password = $_POST['password'];

if (
  empty($nickname) || 
  empty($username) || 
  empty($password)
) {
  header('Location: register.php?code=4');
  die('有欄位沒填喔 😅');
}

// 把註冊資料寫入 eva_msgBoard_users 資料表
$sql = sprintf(
  'INSERT INTO eva_msgBoard_users(nickname, username, password) VALUES("%s", "%s", "%s")', 
  $nickname, 
  $username, 
  $password
);

// 檢查資料是否成功寫入
$result = $conn->query($sql);
if (!$result) {
  $code = $conn->errno;
  if ($code === 1062) {
    header('Location: register.php?code=41');
  }
  die($conn->error);
}

header('Location: index.php?code=2');

?>