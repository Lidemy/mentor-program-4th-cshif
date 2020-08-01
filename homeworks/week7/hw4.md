# hw4：簡答題

## 什麼是 DOM？

### 

---

## DOM 事件傳遞機制的順序是什麼；什麼是冒泡，什麼又是捕獲？

### DOM 事件傳遞 (event propagation) 機制

### 捕獲 (capturing) ＆冒泡 (bubbling)

---

## 什麼是 event delegation，為什麼我們需要它？

### 事件代理 (event delegation)
- 用父節點管理子節點的事件傳遞

---

## `event.preventDefault()` 跟 `event.stopPropagation()` 差在哪裡，可以舉個範例嗎？

### `event.stopPropagation()`
- 取消 DOM event 繼續向下傳遞

### `event.preventDefault()`
- 取消瀏覽器預設行為
- 瀏覽器有哪些預設行為？
- p.s. 和 DOM event propagation 一點關係都沒有

### 差異

### 舉例