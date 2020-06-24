// hw2：首字母大寫
// 給定一字串，把第一個字轉成大寫之後「回傳」，若第一個字不是英文字母則忽略。

// var str = ''; 呼叫 function capitalize() 時會帶入 str 的值，因此這行宣告不會被使用到

function capitalize(str) {
	let arr = str.split('');
	if (arr[0].charCodeAt(0) >= 97 && arr[0].charCodeAt(0) <= 122) {
		strUC = arr[0].toUpperCase(); // H
		arr.shift(); // remove + start
		arr.unshift(strUC); // add + start
	}
	console.log(arr.join(''));
	return arr.join('');
}

/*
- function: 接收字串，並把字串切成陣列
- if: 檢查陣列 index[0] 是不是英文字母大寫，是的話，忽略不動；不是，轉成大寫後回傳；不是英文字母，忽略
*/

capitalize('hello');
capitalize('Gorgeous!');
capitalize('amazing!');
capitalize(':D');
capitalize('prototype.shift()');
