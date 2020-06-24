// hw4：印出因數
// 先幫大家複習一下數學，給定一個數字 n，因數就是所有小於等於 n 又可以被 n 整除的數，所以最明顯的例子就是 1 跟 n，這兩個數一定是 n 的因數。現在請寫出一個函式來「印出」所有的因數

// my thoughts:
// n 除以 1~n 之間的每個數字，印出餘數為零的數字

function printFactor(n) {
	for(let i = 1; i <= n; i++){
		if (n%i === 0) {
			console.log(i);
		}
	}
}

// function: 接收數字
// for loop: 跑 1~n
// if: 若餘數為零，回傳

printFactor(41);
printFactor(12);
