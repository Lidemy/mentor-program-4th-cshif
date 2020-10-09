# hw2：簡答題

## 1. 資料庫欄位型態 VARCHAR 跟 TEXT 的差別是什麼

以 MySQL 8.0 來說，

- `VARCHAR` 跟 `TEXT` 都是字串類型的資料型態
- 兩者欄位裡儲存的值都是長度可變的字串（包括文字、數字、符號），欄位裡儲存的值長度範圍在 0 到 65,535 (2^16 - 1)
- 兩者的差異在於資料儲存的需求不同：
	- 長度前綴
		- `VARCHAR` 的值是以一個 1-byte 或 2-byte 的長度前綴加上資料本身的形式儲存的。長度前綴不是必須的。（1-byte 或 2-byte 視資料所需儲存空間而定，如果需要空間小於等於 255 bytes 使用 1-byte，大於則用 2-byte）；
		- `TEXT` 的值一律是 2-byte 加上資料本身的形式儲存，長度前綴不可省
	- 儲存宣告
		- `VARCHAR` 在使用時會宣告最長儲存長度；
		- `TEXT` 不會做這個宣告
	- 適用情境
		- `VARCHAR` 適用於明確知道資料大小，可以用來更準確的估計所需儲存空間；
		- `TEXT` 適用於資料長度變異性較大的時候，不會因為錯誤估計造成資料消失。

ref.
- MySQL 8.0 Documentation
- w3school

---

## 2. Cookie 是什麼？在 HTTP 這一層要怎麼設定 Cookie，瀏覽器又是怎麼把 Cookie 帶去 Server 的？

- HTTP protocol 的設計是無狀態的 (stateless)，負責收發的 user agent (以下通稱瀏覽器) 認不得發出去的 request 和回來的 response 是不是同一個使用者的，cookie 就在這個時候發揮作用了。HTTP cookie 是一段給瀏覽器攜帶的資訊，裡面記載關於使用者發出的 request 的資訊，cookie 會跟著 request 一起被發出去，再跟著 response 回來，瀏覽器可以透過 cookie 裡的資訊來確認 request 和 response 是不是同一位使用者的，藉此機制讓 HTTP 保持在狀態內 (stateful)。
- cookie 通常被儲存在瀏覽器裡。在收到瀏覽器傳來的 HTTP request 之後，server 利用 `Set-Cookie` 這個 header，將 cookie 和 response 一起從 server 傳回給瀏覽器。當瀏覽器再次發出 request 給同一個 server 時，server 便可以認得新的 request 和之前發出的 response 是同一個對象。
- ...

ref.
- \[CS101\] 4-3：你要怎麼記住我－－session 與 cookie
- [白話 Session 與 Cookie：從經營雜貨店開始](https://medium.com/@hulitw/session-and-cookie-15e47ed838bc)
- [Using HTTP cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
- [RFC 6265, section 4.1: Set-Cookie](https://tools.ietf.org/html/rfc6265#section-4.1)

---

## 3. 我們本週實作的會員系統，你能夠想到什麼潛在的問題嗎？

- 使用者的密碼是以明碼儲存在資料庫，如果資料庫被駭，使用者的資料馬上就能被利用了。
- 目前註冊、登入表單都還沒有設定過濾特殊字元，可能成為 SQL injection 或 XSS 攻擊的漏洞，造成非預期的程式執行。

ref. 
- \[CS101\] 5-5：我的資料外洩了－－初級攻擊手段
- Wikipedia: [Cross-site scripting](https://www.wikiwand.com/en/Cross-site_scripting), [SQL injection](https://www.wikiwand.com/en/SQL_injection)
