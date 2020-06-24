// hw3：反轉字串
// 給定一個字串，請「印出」反轉之後的樣子（不能使用內建的 reverse 函式）

/*
my thoughts:
0. 分割陣列 strSplit 和新陣列 strArr 分開操作
1. 把原始字串 str 的第 i 個位置的字母推到新陣列 strArr，重複 (str.length-1) 遍
2. 去掉分割陣列 strSplit 的第 (str.length-1-i) 位
3. 重複 2. 和 3. (str.length-1) 遍
4. 合併陣列變字串，輸出
*/

function reverse(str) {
	let arr = [];
	for(let i = 0; i <= str.length-1; i++){
		arr.push(str[str.length-1-i]); // .push() str 的最後一位到 arr
	}
	let output = arr.join(''); // .join() return a string
	console.log(output);
	return output;
}

// function: 接收字串，拆成陣列
// for loop: 把第一個字母調到第一位，重複 str.length 遍

reverse('hello'); // olleh
reverse('function'); // noitcnuf
reverse('先別急著寫 leetcode');

