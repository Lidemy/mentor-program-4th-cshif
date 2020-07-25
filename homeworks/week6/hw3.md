# Week 6 hw3 簡答題

## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。

### <link>
- 全名是 HTML External Resource Link，負責連結 HTML 檔案和外部檔案，最常見的是引入樣式表，也就是 CSS 檔案 (.css)，連結方式是在 `<link>` 的屬性 `href` 帶入絕對或相對路徑，以及在 `rel` 屬性寫上 `stylesheet`。
- ref. [\<link\>: The External Resource Link element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)

### <main>
- `<main>` 是其中一個 HTML 排版會使用到的語意化標籤，一份 HTML 檔案最主要的內容會放在這，logo、側邊欄、導覽列、footer 等都不該被包在裡面
- `<main>` 不會影響頁面的 DOM 結構（相對於 `<body>`、headings `<h1>` 等來說）
- Accessibility: 
	- 擔任地標 (landmark) 的功能，有助於 assistive technology 快速導向到此區域的內容，幫助使用者快速跳過每個頁面重複的內容 (e.g. 導覽列、banner 等)
	- 閱讀器模式：瀏覽器在轉換成閱讀器模式時會優先尋找相關 HTML tags ([headings](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Heading_Elements) & [content sectioning](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#Content_sectioning))

### <ruby>
- `<ruby>` 用於注解東亞字母發音
- 最常搭配的 tags 還有 `<rp>` 和 `<rt>`

---

## 請問什麼是盒模型（box model）

- CSS 元素的兩大陣營 block box 和 inline box。`block` 和 `inline` 的特質會影響 box 在排版流的行為，以及和其它 box 之間的關係
- outer display (`block` & `inline`) 會被 inner display (`flex` & `grid`) 取代
- 盒模型 (box model) 談的是 outer display，也就是 `block` & `inline`

### CSS box model 是什麼？
- box 的組成（內到外）：內容、padding、border (包住內容和 padding)、margin
- 標準的 box model
	- 在 CSS 設定寬、高是在設定**內容**的 `width` & `height`
	- box 的區域只包含內容、padding 和 border，margin 是屬於 box 之外的空間
- 另外一種 box model (👍🏼)
	- 每次都要加上 padding 和 border 很麻煩
	- `box-sizing: border-box`
	- 寬度＝看得到的寬度 (內容 + padding + border)，不再只是內容的寬度

additional readings
- [the CSS Tricks article on box-sizing](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/)
- [CSS Flow Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout)
- [CSS layout](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout)
- [CSS Layout cookbook](https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook)

### 和 box model 相關的屬性
- 控制盒中內容的排版流：`overflow`
- 控制盒子大小：`width`, `height`, `max-width`, `max-height`, `min-width`, `min-height`
- 控制盒子的外邊界：`margin`
- 控制盒子的內邊界：`padding`
- 其他屬性：`visibility`

ref. [CSS Basic Box Model - Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model)

---

## 請問 display: inline, block 跟 inline-block 的差別是什麼？

### `display` 是什麼？
- `display` 是一個 CSS 的屬性，負責決定元素（a.k.a. HTML tags）呈現在螢幕上相對於其他元素的排列方式。
- `display` 分成 outer 和 inner 兩類，outer 會套用到元素本身，決定元素是 `block` 或是 `inline`，影響元素在排版流的行為以及和其它元素間的關係，也是 CSS box model 聚焦的範圍；inner 則是套用到子元素，影響子元素的排列方式，`flex`、`grid` 等都是屬於這類。

### 比較 `block`, `inline` 和 `inline-block`
- `block`: 新的 HTML tag 會在新的一行、自己佔滿整行、注意 `width` & `height` 屬性設定套用到誰身上（參考 box model `box-sizing: border-box`）、padding/margin/border 會推開其它 box
- `inline`: 新的 HTML tag 會在同一行排列、`width` & `height` 屬性不適用、垂直的 padding/margin/border 不會推開其它 inline box（水平的會）
- `inline-block`: 表現像 `inline`，新的 HTML tag 會在同一行排列；行為像 `block`，可以設定 `width` & `height`，padding/margin/border 會推開其它 box

demo: [display-test](https://codepen.io/cooshif/full/rNxRgja)
ref.
- [The box model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model)
- [Block and inline layout in normal flow](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow)

### 使用 `inline-block` 的時機
- 需要大面積點擊區域時

> Where this can be useful is when you want to give a link to a larger hit area by adding padding. `<a>` is an inline element like `<span>`; you can use `display: inline-block` to allow padding to be set on it, making it easier for a user to click the link. (e.g. navigation bar)

ref.
- [display](https://developer.mozilla.org/en-US/docs/Web/CSS/display)

---

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

### `position` 是什麼？
- 是一個 CSS 的屬性，負責決定元素相對於整個檔案排版流的呈現位置

### 比較 `static`, `relative`, `absolute` 和 `fixed`
- `static`: 預設值，元素出現在它應該出現在排版流中的位置
- `relative`: 和 `static` 一樣元素會出現在它應該出現在排版流中的位置，但是設定成 `relative` 後，元素可以以此為原點做偏移（透過設定 `top`, `bottom`, `left`, `right`）
- `absolute`: 元素跳脫原本的排版流位置，改為以最接近的、`position` 非 `static` 的母元素做定位，也能透過設定 `top`, `bottom`, `left`, `right` 做相對於該母元素的位置偏移。
	- 如果沒有 `position` 非 `static` 的母元素可以訂位，就會是以，`position: absolute` 的元素就會以它的 [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_Block) 做定位。
	- containing block 在 `position: absolute` 的定義：最接近的、`position` 非 `static` 的母元素的*內容 + padding* 區域。
- `fixed`: 和 `absolute` 一樣元素跳脫原本的排版流位置，改為以瀏覽器視窗 (viewport) 來做定位，因此使用者在捲動頁面時，`position` 被設定為 `fixed` 的元素始終會在視窗上相同的位置。

### `position` 相關屬性
- `top`, `bottom`, `left`, `right`
- `float`, `clear`
- `z-index`

ref. [CSS Positioned Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning)