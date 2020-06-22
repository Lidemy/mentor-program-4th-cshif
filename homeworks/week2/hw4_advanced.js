// 印出非質數數字 n 的因數；若 n 是質數，印出「這個數字是質數」
// 挑戰把因數印在同一列

debugger

var num;

// my thoughts:
// n 除以 1~n 之間的每個數字，把可以整除 n 的數字放一起
// 如果可以整除 n 的數字只有 n 自己和 1，顯示「這個數字是質數」
// 如果可以整除 n 的數字不只有 n 和 1，顯示「這個數字的因數有：1, 2, 3, 4, 6, 12」

function judgeFactor(num) {
	let factorArr = [];
	for(let i = 1; i <= num; i++){
		if (num%i === 0) {
			factorArr.push(i);
		} // num 在跑完 for loop 後就消失惹
	}
	//console.log(factorArr);
	return printFactor(factorArr, num);
}

function printFactor(factorArr, num) {
	if (factorArr[0] === 1 && factorArr[1] === num) {
		console.log(num + ' 是質數。');
	} else {
		console.log(num + ' 的因數有：' + factorArr.join(', '));
	}
	return;
}

judgeFactor(1);
judgeFactor(3);
judgeFactor(7);
judgeFactor(41);
judgeFactor(12);
judgeFactor(87);
judgeFactor(160);