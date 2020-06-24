// hw5：自己的函式自己寫
// 其實仔細思考的話，你會發現那些陣列內建的函式你其實都寫得出來，因此這一題就是要讓你自己動手實作那些函式！
// 我們要實作的函式有兩個：join 以及 repeat。（再次強調，這一題要你自己實作這些函式，所以你不會用到內建的 join 以及 repeat）
// join 會接收兩個參數：一個陣列跟一個字串，會在陣列的每個元素中間插入一個字串，最後回傳合起來的字串。
// repeat 的話就是回傳重複 n 次之後的字串。

function join(arr, concatStr) {
	if (arr.length === 0) {
		return '';
	}
	let str = arr[0];
	for(let i = 1; i < arr.length; i++){
		str += concatStr + arr[i];
	}
	return str;
}

console.log(join(['a'], '!')); // a
console.log(join([1, 2, 3], '')); // 123
console.log(join(['a', 'b', 'c'], '!')); // a!b!c
console.log(join(['a', 1, 'b', 2, 'c', 3], ',')); //a,1,b,2,c,3

function repeat(str, times) {
	let output = '';
	for(let i = 1; i <= times; i++){
		output = output + str;
	}
	return output;
}

console.log(repeat('a', 5)); // aaaaa
console.log(repeat('yoyo', 2)); // yoyoyoyo
console.log(repeat('foxco ', 3)); // foxco foxco foxco
