// hw2：首字母大寫
// 給定一字串，把第一個字轉成大寫之後「回傳」，若第一個字不是英文字母則忽略。

var str = '';

function capitalize(str) {
	str = str.split('');
	// console.log(str);
	if (str[0].charCodeAt(0) >= 97 && str[0].charCodeAt(0) <= 122) {
		strUC = str[0].toUpperCase(); // H
		str.shift(); // remove + start
		str.unshift(strUC); // add + start
		// console.log(str);
	} else {
		// console.log(str);
		// return str;
	}
	console.log(str.join(''));
	return str.join('');
}

/*
- function: 接收字串，並把字串切成陣列
- for loop:
- if: 檢查陣列 index[0] 是不是英文字母大寫，是的話，忽略不動；不是，轉成大寫後回傳；不是英文字母，忽略
*/

capitalize('hello');
capitalize('Gorgeous!');
capitalize('amazing!');
capitalize(':D');
capitalize('prototype.shift()');
