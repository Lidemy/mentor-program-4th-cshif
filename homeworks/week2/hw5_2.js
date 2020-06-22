// repeat 的話就是回傳重複 n 次之後的字串。

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
