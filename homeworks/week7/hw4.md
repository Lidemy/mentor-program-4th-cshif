# hw4：簡答題

## 1. 什麼是 DOM？

Document object 是一個 client-side 的 JavaScript 物件，DOM 是這個物件和 HTML 文件溝通的 API。Document object 包含以 HTML elements 為節點 (node) 形成的樹狀結構，每一個 HTML tag 和內容 (text) 都有對應到的 JavaScript 物件和節點。

---

## 2. DOM 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？

document object 利用事件屬性和 `addEventListener()` 被監聽和觸發 (dispatch)，DOM 事件傳遞機制 (event propagation) 則是瀏覽器決定哪個 document object 的事件監聽程序要被觸發的過程。
當目標 element 被觸發時，它的 parent、grandparent... 的監聽事件都會因為 DOM 事件傳遞的「捕獲」機制，順著 DOM 的樹狀結構由 Window、Document 往目標 element 的方向被捕獲。在到達目標 element 後，再從目標 element 向上層依序觸發監聽事件，也就是「冒泡」機制。

ref.
- JavaScript: The Definitive Guide 7th ed. *Chapter 15*
- MDN - [Introduction to events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)

---

## 3. 什麼是 event delegation，為什麼我們需要它？

因為有 DOM 事件傳遞的冒泡機制，當目標 element 被觸發 (e.g. click) 時，它的 parent、grandparent... 的監聽事件也都會被觸發，所以當有一大堆目標 element 需要被觸發某個事件時，我們不需要每個目標 element 都加上監聽事件（這麼做非常浪費時間），而是只要在它們的 parent element 加上「一個」監聽事件，就能夠利用冒泡機制，當觸發目標 element 時同時觸發事件；事件不是掛在目標 element 上，而是在它的 parent element 上，透過 parent element 觸發 child element 事件就是 event delegation (事件代理)。
這麼做除了可以避免重工 (rework) 之外，還能讓 code 更容易 debug，省時省力的好物啊！

ref.
- MDN - [Introduction to events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
- David Walsh - [How JavaScript Event Delegation Works](https://davidwalsh.name/event-delegate)
- JavaScript.info - [Event delegation](https://javascript.info/event-delegation)

---

## 4. `preventDefault()` 跟 `stopPropagation()` 差在哪裡，可以舉個範例嗎？

**`preventDefault()`**
有時我們會希望事件預設行為不要發生，最常見的情況就是當使用者沒有依照期望填好表單，或是註冊會員時資料填寫不完整，這時我們不希望 submit event 被觸發。這時就可以使用 condition 搭配 `preventDefault()` 和一些 UI 提示，引導使用者把表單填寫的更完整。

**`stopPropagation()`**
在 DOM 事件傳遞機制，我們知道當目標 element 被觸發時，它的 parent、grandparent... 的監聽事件都會因為 DOM 事件傳遞的「捕獲」機制，順著 DOM 的樹狀結構由 Window、Document 往目標 element 的方向被捕獲。
這個從 Window 到目標 element 的傳遞流會在每一層的監聽事件被觸發前形成，接下來就會由目標 element 往 Window 的方向一層一層觸發監聽事件。
但是如果我們不想要整條傳遞流上的監聽事件都被觸發呢？這就是 `stopPropagation()` 發揮的時候，只要把 `stopPropagation()` 設在傳遞流的斷點，搭配 `addEventListener()` 的第三個參數（`true` for capturing; `false` for bubbling），就能夠實現阻止往後傳遞流上的事件被觸發。

兩者最大的不同在於 `stopPropagation()` **不會**阻止任何預設行為的發生，例如這段程式碼，
```js
const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
	e.stopPropagation();
}, false);
```
btn 還是能點擊，只是在 DOM 事件傳遞的「冒泡」階段就會**被迫終止**（為什麼是冒泡階段：是因為 `addEventListener` 的第三個參數設定了 `false`，也就是在冒泡階段執行這個 callback function，沒有寫也是預設 `false`，所以如果是想指定冒泡階段寫不寫都可以）。
如果想要 btn **不能**被點擊（例如表單沒填完不能送出），使用 `preventDefault()` 會是比較好的選擇，可以這樣寫：
```js
const btn = document.querySelector('button');

btn.addEventListener('click', (e) => {
	if (表單沒填完) {
		e.preventDefault();
	}
});
```
`preventDefault()` 會讓 `'click'` 這個事件的預設行為（a.k.a. 點擊）不能被執行，通常會搭配 condition （和一些 UI 提示）一起使用，不然讓使用者無故被拒絕對 UX 不太好呢。

ref.
- W3C - [3.1 Event dispatch and DOM event flow](https://www.w3.org/TR/DOM-Level-3-Events/#event-flow)
- MDN - [Example 5: Event Propagation](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Examples#Example_5:_Event_Propagation)