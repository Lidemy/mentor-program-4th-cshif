<?php

require_once('conn.php');

function generateToken() {
  $s = '';
  for ($i = 1; $i <= 16 ; $i++) { 
    $s .= chr(rand(65,90));
  }
  return $s;
}

function getUserFromUsername($username) {
  global $conn;

  $sql = sprintf(
    'SELECT * FROM eva_msgBoard_users WHERE username="%s"', 
    $username
  );
  $result = $conn->query($sql);
  $row = $result->fetch_assoc();
  
  return $row; // username, id, nickname
}

// function getUserFromToken($token) {
//   global $conn; // 宣告：要用到 global 變數

//   $sql = sprintf(
//     'SELECT username FROM eva_msgBoard_tokens WHERE token="%s"', 
//     $token
//   );
//   $result = $conn->query($sql);
//   $row = $result->fetch_assoc();
//   $username = $row['username'];

//   $sql = sprintf(
//     'SELECT * FROM eva_msgBoard_users WHERE username="%s"', 
//     $username
//   );
//   $result = $conn->query($sql);
//   $row = $result->fetch_assoc();
  
//   return $row; // username, id, nickname
// }

?>