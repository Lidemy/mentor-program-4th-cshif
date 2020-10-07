<?php

session_start();

require_once('conn.php');
require_once('utils.php');

// 用登入的 username 到資料庫撈取 nickname
// $username = $_COOKIE['username'];
// $user_sql = sprintf(
//   'SELECT nickname FROM eva_msgBoard_users WHERE username="%s"', 
//   $username);
// $user_result = $conn->query($user_sql);
// $row = $user_result->fetch_assoc();
// $nickname = $row['nickname'];

$user = getUserFromUsername($_SESSION['username']);
$nickname = $user['nickname'];

$content = $_POST['content'];
if (empty($content)) {
  header('Location: index.php?code=4');
  die('有欄位沒填喔 😅');
}

// 新增一筆留言
$sql = sprintf(
  'INSERT INTO eva_msgBoard_posts(nickname, content) VALUES("%s", "%s")', 
  $nickname, 
  $content
);
$result = $conn->query($sql);
if (!$result) {
  die($conn->error);
}

header('Location: index.php');

?>