# hw5：簡答題

## 請解釋後端與前端的差異。
- 前端：瀏覽器的範疇，以 HTML、CSS、JavaScript 解讀和顯示網頁內容。
- 後端：資料庫、伺服器

## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。
<<<<<<< HEAD
- 在搜尋框打上 JavaScript，按下 Enter
- 瀏覽器接收到「搜尋 JavaScript」的請求 (request)
- 瀏覽器將請求傳到 DNS server
- DNS server 將發出的請求傳給 google.com
- google.com 在它的資料庫搜尋和 JavaScript 相關的資料
- google.com 將搜尋結果打包，回傳 (response) 給 DNS server
- DNS server 將搜尋結果回傳給發出請求的 IP 位址（我的電腦）
- 我的電腦的瀏覽器把 google.com 打包的搜尋結果下載下來
- 瀏覽器把搜尋結果 render 出來給我看
=======
>>>>>>> mentor-program-4th/master

Ref.:
- [How the Web works](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/How_the_Web_works)
- Foundations Of Computer Science 4th by Behrouz A. Forouzan


## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用。
- `$ open 檔案名稱 -a 應用程式` 用指定的應用程式開啟檔案
- `$ whatis 指令` 簡易版的指令使用手冊，只顯示一行關於指令的作用 
- `$ top` 列出電腦正在運行的活動 (processes)
- `$ chmod 檔案/資料夾` 改變權限