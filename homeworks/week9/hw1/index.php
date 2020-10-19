<?php
  session_start();

  require_once('conn.php');
  require_once('utils.php');

  // $username = NULL;
  // if (!empty($_COOKIE['token'])) {
  //   $user = getUserFromToken($_COOKIE['token']);
  //   $username = $user['username'];
  // }

  /*
    1. 從 cookie 裡讀取 PHPSESSID (a.k.a. token)
    2. 從 檔案讀取 session-id 的內容
    3. 放到 $_SESSION
  */
  $username = NULL;
  if (!empty($_SESSION['username'])) {
    $username = $_SESSION['username'];
  }

  // 讀取資料
  $result = $conn->query('SELECT * FROM eva_msgBoard_posts ORDER BY created_at DESC');
  if (!$result) {
    die($conn->connect_error);
  }
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>msg_board</title>
  <link rel="stylesheet" type="text/css" href="css/trix.css">
  <script type="text/javascript" src="js/trix.js"></script>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <header class="warning">
    注意！本站為練習用網站，因教學用途刻意忽略資安的實作，註冊時請勿使用任何真實的帳號或密碼。
  </header>
  <main class="board">
    <div class="navbar">
      <?php if (!$username) { ?>
      <a href="register.php" class="navbar__btn">
        <button>Register</button>
      </a>
      <a href="login.php" class="navbar__btn">
        <button>Login</button>
      </a>
      <?php } else { ?>
      <a href="logout.php" class="navbar__btn">
        <button>Logout</button>
      </a>
      <?php } ?>
    </div>
    <h1 class="board__title">Create post</h1>
    <?php
      if (!empty($_GET['code'])) {
        $code = $_GET['code'];
        $msg = '';
        if ($code === '2') {
          $msg = '註冊完成，可以開始留言囉 😊';
          echo '<p class="done">' . $msg . '</p>';
        }
        if ($code === '21') {
          $msg = '登入成功，可以開始留言囉 😊';
          echo '<p class="done">' . $msg . '</p>';
        }
        if ($code === '22') {
          $msg = 'bye bye 👋';
          echo '<p class="done">' . $msg . '</p>';
        }
        if ($code === '4') {
          $msg = '有欄位沒填喔 😅';
          echo '<p class="error">' . $msg . '</p>';
        }
        if ($code === '42') {
          $msg = '帳號或密碼錯了 😓';
          echo '<p class="error">' . $msg . '</p>';
        }
      }
    ?>
    <form method="POST" 
      action="handle__add__post.php" 
      class="board__form">
      <!-- <div class="board__form__nickname">
        <input 
          type="text" 
          name="nickname" 
          placeholder="Your ninckname here...">
      </div> -->
      <?php
        if ($username) {
          echo '<p class="done"> Hi~ ' . $username . ' 歡迎你！</p>';
        }
      ?>
      <div class="board__form__content">
        <trix-editor 
          input="msgContent" 
          name="content" 
          placeholder="What's in your mind?">
          <div></div>
        </trix-editor>
        <input 
          id="msgContent" 
          type="hidden" 
          name="content">
      </div>
      <?php 
        if (!$username) {
          echo '<p class="error">請登入留言～</p>';
        } else { ?>
      <div class="submit__btn">
        <input type="submit" value="submit">
      </div>
      <?php } ?>
    </form>
    <div class="hr"></div>
    <section class="board__posts">
      <?php 
        // 拿資料
        while ($row = $result->fetch_assoc()) {
      ?>
      <div class="board__posts__card">
        <div class="card__avatar">
          <div></div>
        </div>
        <div class="card__info">
          <div class="card__info__nickname">
            <span><?php echo $row['nickname']; ?></span>
          </div>
          <div class="card__info__time">
            <span><?php echo $row['created_at']; ?></span>
          </div>
          <div class="card__info__msg">
            <p><?php echo $row['content']; ?></p>
          </div>
        </div>
      </div>
      <?php } ?>
    </section>
  </main>
</body>
</html>