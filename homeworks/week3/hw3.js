/*
LIOJ1020 - 判斷質數
質數的定義為：在大於 1 的自然數中，除了 1 和該數自身以外，無法被其他自然數整除的數。

換句話說，如果一個大於 1 的正整數的因數除了 1 和自己以外就沒有其他的了，那就是質數

針對每一筆輸入，如果 P 是質數，輸出：Prime，否之則輸出 Composite
*/
// debugger

// 關於 OJ 的輸入與輸出：JavaScript 的話則是使用 `readline.createInterface`，就可以從 `stdin` 讀取輸入。輸出的部份直接用 `console.log` 即可。
var readline = require('readline');
var rl = readline.createInterface({
  input: process.stdin
});

var num = []

// 讀取到一行，先把這一行加進去 num 陣列，最後再一起處理
rl.on('line', function (line) {
  num.push(line)
});

// 輸入結束，開始針對 num 做處理
rl.on('close', function() {
  judgeFactor(num)
})

// 上面都不用管，只需要完成這個 function 就好，可以透過 num[i] 拿取內容

function judgeFactor(num) {
	for(let i = 1; i < num.length; i++){
		let theNum = Number(num[i]);
		if (isPrime(theNum)) {
			console.log('Prime');
		} else {
			console.log('Composite');
		}
	}
}

function isPrime(theNum) {
	if (theNum === 1) return false;
	for(let j = 2; j < theNum; j++){
		if (theNum%j === 0) {
			return false;
		}
	}
	return true;
}

/*
for(let i = 0; i <= num.length-1; i++){
	if (judgeFactor(num[i])) {
		console.log('Prime');
	} else {
		console.log('Composite');
	}
}

function judgeFactor(num){
	if (num === 1) return false;
	for(let j = 2; j <= num[i]; j++){
		if (num[i]%j === 0) return false;
	}
	return true;
}
*/