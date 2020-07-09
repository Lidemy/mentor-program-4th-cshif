# Week 4 hw5：簡答題

## 請以自己的話解釋 API 是什麼
API 的全名是 Application Programming Interface，應用程式介面，這坨單字裡最重要的就是 "interface" (介面)，例如 CLI、GUI 裡也都有的 interface，API 是一種拿來和其他應用程式「溝通」的媒介、管道。CLI 和 GUI 是和電腦溝通的媒介，溝通的目的是為了控制電腦；而 API 是和其他應用程式溝通的媒介，溝通的目的則是為了交換資料。
但是其它的應用程式不會讓我們無限制的、我們要看什麼資料就給我們什麼，更不會讓我們自由進出他們的資料庫！這個時候 API 的重要性就出現了：API 規定了可以用什麼方式、存取什麼樣的資料，一切的規定都寫在那個 API 的文件。
有應用程式的地方就有 API，以網頁開發來說使用到的就是 Web API。Web API 通常指的是基於 HTTP 協定下運作的 API，常見的應用情境有會員登入系統、廣告、社群互動嵌入、資料嵌入等。
開發者最常使用 Web API 進行的四種行為包括 Create (新增)、Read (讀取)、Update (更新) 和 Delete (刪除)，也就是 CRUD。


## 請找出三個課程沒教的 HTTP status code 並簡單介紹
- 410 Gone
	- 4XX 代表 client 端出問題，可能的狀況是存取未經授權 (unauthorized access)、request 出錯或是資料格式不正確等
	- 410 可以想成是永久版本的 404 (Not Found)。404 是你想存取的網頁目前找不到（但未來可能可以），而 410 則是說你想存取的資源真的掰掰了，而且未來也不會再出現，是一個永久的狀態和事實
	- 410 錯誤可能發生在 client-side 和 server-side。client-side errors 可能發生在錯誤的 URL、(CMS) 平台端的改變、資料庫；server-side errors 則應該先檢查 web server 設定檔 (configuration files) 和應用程式 logs 才能確定確切的錯誤發生在哪。
	- ref.: MDN, [What Is a 410 Gone Error and How to Fix It](https://www.exai.com/blog/410-gone-client-error)
- 502 Bad Gateway
	- server 收到來自上游的無效回應 (invalid response) (MDN)
	- 502 錯誤發生的主要原因來自 web server 出問題，無法對發出 request 的瀏覽器作出相應的 response，但 502 發生的真正原因可能更複雜，從瀏覽器問題到外掛不兼容都可能出現 502。
	- 最常看到 502 的情況是 web server 處理過多 HTTP request 花太多時間，也就是流量太高（、或主機太爛）就會看到 502 Bad Gateway。
	- ref.: MDN, [如何解決 WordPress 出現 502 Bad Gateway Error 的問題？](https://techmoon.xyz/502-bad-gateway-error-fix-wordpress/)
- 504 Gateway Timeout
	- 504 代表連線逾時，client-side 無法取得 server 的 response，因此顯示服務沒有回應。
	- 如果不趕快修復 504 Gateway Timeout 可能會對網站 SEO 造成負面影響，因為 504 會造成 Google 爬蟲無法正常擷取，影響網站擷取頻率，進而影響網站排名。
	- ref.: MDN, [WordPress 出現 504 Gateway Timeout Error 解決方法？](https://techmoon.xyz/504-gateway-timeout-error-fix-wordpress/)
- 418 I’m a teapot.
	- 418 是 HTCPCP 協定的其中一個 error response。HTCPCP 是 IETF 虛構的協定，被設計成類似 HTTP，但是基於咖啡壺和茶壺（應用層）。Emacs 完全相容這個協定，另外也有 bugs 在抱怨 Mozilla 不支援。這個協定還有定義另一個 error response: 406 Not Acceptable，HTCPCP 因為某些原因目前不能煮咖啡。
	- [Google's 418 Error page](https://www.google.com/teapot)
	- ref.: MDN, wikipedia
- 406 Not Acceptable
	- server 無法產生匹配 header 要求的 response；如果 request header 的 Accept 不符就可能產生 406。
	- Accept: header 中用來告知 client-side 可以處理的內容類型。
	- ref.: MDN, [juejin](https://juejin.im/entry/5a0e4976f265da431b6cc5dc)


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

### BPJello 餐廳平台 API

#### Base url
https://bpjello.com/api

#### Endpoints

POST 以及 PATCH 的 content type 為 "application/x-www-form-urlencoded"

| 說明 | Method | PATH | 參數 | example |
|:--|:--|:--|:--|:--|
| 回傳所有餐廳資料 | GET | /restaurant | q: 查詢餐廳 | /restaurant?q=taipei |
| 回傳單一餐廳資料 | GET | /restaurant/{id} | - | /restaurant/2066 |
| 刪除餐廳 | DELETE | /restaurant/{id} | - | - |
| 新增餐廳 | POST | /restaurant | name: 慶城雞飯, phone: 02-87121200, address: 慶城街 16 巷 8 號 | - |
| 更改餐廳 | PATCH | /restaurant/{id} | name: 慶城雞飯, phone: 02-87121200, address: 慶城街 16 巷 8 號 | - |