// join 會接收兩個參數：一個陣列跟一個字串，會在陣列的每個元素中間插入一個字串，最後回傳合起來的字串。

function join(arr, concatStr) {
	let str = '';
	//
}

join(['a'], '!');
join([1, 2, 3], ''); // 123
join(['a', 'b', 'c'], '!'); // a!b!c
join(['a', 1, 'b', 2, 'c', 3], ','); //a,1,b,2,c,3

/*
console.log(join(['a'], '!'));
console.log(join([1, 2, 3], '')); // 123
console.log(join(['a', 'b', 'c'], '!')); // a!b!c
console.log(join(['a', 1, 'b', 2, 'c', 3], ',')); //a,1,b,2,c,3
*/