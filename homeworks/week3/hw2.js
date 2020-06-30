/*
LIOJ1025 - 水仙花數
水仙花數（Narcissistic number）又被稱為自戀數或者是阿姆斯壯數，太數學的定義我們就不講了，詳情可以查維基百科。
比較白話的定義為：「一個 n 位數的數字，每一個數字的 n 次方加總等於自身」

例如說 153 是三位數，而 1^3 + 5^3 + 3^3 = 153，所以它就是一個水仙花數
而 1634 是四位數，而 1^4 + 6^4 + 3^4 + 4^4 = 1634，所以它也是一個水仙花數
而數字 0~9 也都是水仙花數，因為一位數 n 的 1 次方一定會等於自己

現在給你一個範圍 n 到 m，請你求出這範圍之中的水仙花數有哪些
*/

/* eslint-disable no-tabs, indent, no-use-before-define, prefer-const */

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

function solve() {
	let m = Number(lines[0].split(' ')[1]);
	for (let num = Number(lines[0].split(' ')[0]); num <= m; num += 1) {
		let a = num.toString();
		sum(a, num);
	}
}

function sum(a, num) {
	let A = 0;
	for (let j = 0; j < a.length; j += 1) {
		A += a[j] ** a.length;
	}
	if (A === num) {
		console.log(num);
	}
}
