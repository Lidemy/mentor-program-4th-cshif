<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>msg_board</title>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header class="warning">
    注意！本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼。
  </header>
  <main class="board">
    <div class="navbar">
      <a href="index.php" class="navbar__btn">
        <button>Back</button>
      </a>
      <a href="register.php" class="navbar__btn">
        <button>Register</button>
      </a>
    </div>
    <h1 class="board__title">Login</h1>
    <?php
      if (!empty($_GET['code'])) {
        $code = $_GET['code'];
        $msg = '';
        if ($code === '4') {
          $msg = '有欄位沒填喔 😅';
          echo '<p class="error">' . $msg . '</p>';
        } else if ($code === '42') {
          $msg = '帳號或密碼錯了 😓';
          echo '<p class="error">' . $msg . '</p>';
        }
      }
    ?>
    <form 
      method="POST" 
      action="handle__login.php" 
      class="board__form">
      <div class="board__form__username">
        username: <input type="text" name="username" placeholder="Your username here...">
      </div>
      <div class="board__form__password">
        password: <input type="password" name="password" placeholder="Your password here...">
      </div>
      <div class="submit__btn">
        <input type="submit" value="submit">
      </div>
    </form>
  </main>
</body>
</html>