// LIOJ1021 - 好多星星
// 輸入為一個數字 N，請按照規律輸出正確圖形

// 關於 OJ 的輸入與輸出：JavaScript 的話則是使用 `readline.createInterface`，就可以從 `stdin` 讀取輸入。輸出的部份直接用 `console.log` 即可。
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin
});

var N = []

// 讀取到一行，先把這一行加進去 N 陣列，最後再一起處理
rl.on('line', function (line) {
  N.push(line)
});

// 輸入結束，開始針對 N 做處理
rl.on('close', function() {
  printStar(N)
})

// 上面都不用管，只需要完成這個 function 就好，可以透過 N[i] 拿取內容
function printStar(N) {
	let str = '';
	for(let i = 1; i <= N; i++){
		str += '*';
		console.log(str);
	}
	return str;
}

/*
function printStar(N){
	let str = '';
	for(let i = 1; i <= N; i++){
		str += '*'; // str = str + '*';
		console.log(str);
	}
	return str;
}

printStar(5);
printStar(3);
*/

/*
- 注意 console.log() 擺放的位置是在 for loop 裡頭，因為我希望它每跑一次就輸出一行結果
- 注意變數宣告的作用域 (scope)，第四行的 `let` 作用範圍是在 function 裡，如果採用一開始在 function 外宣告 `var`，最後的輸出會累加
- 注意 `i` 的初始值和終點的 operator
*/
