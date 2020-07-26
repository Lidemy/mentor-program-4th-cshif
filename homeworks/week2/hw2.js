// hw2：首字母大寫
// 給定一字串，把第一個字轉成大寫之後「回傳」，若第一個字不是英文字母則忽略。

// var str = ''; 呼叫 function capitalize() 時會帶入 str 的值，因此這行宣告不會被使用到

function capitalize(str) {
	let arr = str.split('');
	if (arr[0].charCodeAt(0) >= 97 && arr[0].charCodeAt(0) <= 122) {
		strUC = arr[0].toUpperCase(); // H
		arr.shift(); // .shift(): remove + start
		arr.unshift(strUC); // .unshift(): add + start
	}
	console.log(arr.join(''));
	return arr.join('');
}

/*
- function: 接收字串，並把字串切成陣列
- if: 檢查陣列 index[0] 是不是英文字母大寫，是的話，忽略不動；不是，轉成大寫後回傳；不是英文字母，忽略
*/

/*
examples:

有很多人都會用 charAt 或是先把字串用 split 變成陣列再來做這題，但其實在 JS 裡面你本來就可以用 str[0] 取到第一個字，不需要用 chatAt。

另一個常見問題是會檢查第一個字是否是小寫再轉，但內建的 toUpperCase 如果本來就是大寫，轉完也還是大寫，想一下之後會發現根本不需要檢查。

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}
*/

capitalize('hello');
capitalize('Gorgeous!');
capitalize('amazing!');
capitalize(':D');
capitalize('prototype.shift()');
