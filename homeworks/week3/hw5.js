// LIOJ 1004 聯誼順序比大小

/* eslint-disable no-tabs, indent, no-use-before-define, prefer-const */
/* global BigInt */

let readline = require('readline');

let lines = [];
let rl = readline.createInterface({
	input: process.stdin,
});

rl.on('line', (line) => {
	lines.push(line);
});

rl.on('close', () => {
	solve(lines);
});

// 7.1 使用 BigInt (LIOJ-AC)
function solve() {
	for (let i = 1; i < lines.length; i += 1) {
		let arr = lines[i].split(' ');
		let a = BigInt(arr[0]);
		let b = BigInt(arr[1]);
		if (arr[2] === '1') { // 比大
			if (a > b) {
				console.log('A');
			} else if (a < b) {
				console.log('B');
			} else if (a === b) {
				console.log('DRAW');
			}
		} else if (arr[2] === '-1') { // 比小
			if (a > b) {
				console.log('B');
			} else if (a < b) {
				console.log('A');
			} else if (a === b) {
				console.log('DRAW');
			}
		}
	}
}


/*
7.2 不使用 BigInt
function solve(lines) {
	for(let i = 1; i < lines.length; i++){
		let arr = lines[i].split(' ');
		let a = BigInt(arr[0]);
		let b = BigInt(arr[1]);
		if (arr[2] === '1') { // 比大
			if (a > b) {
				console.log('A');
			} else if (a < b) {
				console.log('B');
			} else if (a === b) {
				console.log('DRAW');
			}
		} else if (arr[2] === '-1') { // 比小
			if (a > b) {
				console.log('B');
			} else if (a < b) {
				console.log('A');
			} else if (a === b) {
				console.log('DRAW');
			}
		}
	}
}
*/

/*
1. 先用 console.log 印出 input
2. double if condition 好像不 work...
2.1 用 DevTool debugger 測試不 work 是因為型別！在字串時，'34' > '10000' 為 True，但是把所有內容是數字的字串前面加上 Number() 還是不 work
3. 到 Spectrum 看討論串
4. 用 [12345678901234567890 12345678901234567891 1] 測試得到 DRAW ＠＿＠
5. 把 Number() 全部先去掉
6. 考慮 edge cases：大於 9007199254740991 的數字會出現不精確的情況，題目可能出現 512 位的數字
7. 現在有幾個方案：BigInt、字串長度、（釐清）型別轉換／不用 BigInt
7.1 使用 BigInt (LIOJ-AC)
7.2 不使用 BigInt
*/
/*
> 12345678901234567890 > 12345678901234567891
false
> 12345678901234567890 < 12345678901234567891
false
> Number(12345678901234567890) < Number(12345678901234567891)
false
> Number(12345678901234567890) > Number(12345678901234567891)
false
> Number(12345678901234567890) == Number(12345678901234567891)
true
> Number(12345678901234567890) === Number(12345678901234567891)
true
> 12345678901234567890 == 12345678901234567891
true
> 12345678901234567890 === 12345678901234567891
true
> Number(12345678901234567890) == 12345678901234567891
true
> Number(12345678901234567890) === 12345678901234567891
true
> 12345678901234567890 == Number(12345678901234567891)
true
> 12345678901234567890 === Number(12345678901234567891)
true
> toString(12345678901234567890) > toString(12345678901234567891)
false
> toString(12345678901234567890) < toString(12345678901234567891)
false
> toString(12345678901234567890) == toString(12345678901234567891)
true
> toString(12345678901234567890) === toString(12345678901234567891)
true
*/
/*
console.log(Number.MAX_SAFE_INTEGER);     // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER+1);   // 9007199254740992
console.log(Number.MAX_SAFE_INTEGER+2);   // 9007199254740992
console.log(Number.MAX_SAFE_INTEGER+3);   // 9007199254740994
console.log(Number.MAX_SAFE_INTEGER+4);   // 9007199254740996
console.log(Number.MAX_SAFE_INTEGER+5);   // 9007199254740996
console.log(Number.MAX_SAFE_INTEGER+6);   // 9007199254740996
console.log(Number.MAX_SAFE_INTEGER+7);   // 9007199254740998
console.log(Number.MAX_SAFE_INTEGER+8);   // 9007199254741000
console.log(Number.MAX_SAFE_INTEGER+9);   // 9007199254741000
console.log(Number.MAX_SAFE_INTEGER+10);  // 9007199254741000
console.log(Number.MAX_SAFE_INTEGER+11);  // 9007199254741002
console.log(Number.MAX_SAFE_INTEGER+100); // 9007199254741092
console.log(Number.MAX_SAFE_INTEGER+1000);// 9007199254741992
*/
