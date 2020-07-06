/* eslint-disable no-tabs, indent, no-unused-vars, no-use-before-define, function-paren-newline, prefer-template, max-len */

const request = require('request');

const url = 'https://lidemy-book-store.herokuapp.com/books';
const argv = process.argv[2];

switch (argv) {
	case 'list':
		List();
		break;
	case 'read':
		Read();
		break;
	case 'delete':
		Delete();
		break;
	case 'create':
		Create();
		break;
	case 'update':
		Update();
		break;
	default:
}

function List() { // 印出前二十本書的 id 與書名
	request(
		`${url}?_limit=20`,
		(error, response, body) => {
			const json = JSON.parse(body);
			for (let i = 0; i < json.length; i += 1) {
				console.log(json[i].id + '. ' + json[i].name);
			}
		},
	);
}

function Read() { // 輸出 id 為 process.argv[3] 的書籍
	const bookId = process.argv[3];
	request(
		`${url}/${bookId}`,
		(error, response, body) => {
			const json = JSON.parse(body);
			// console.log(json); // { name: '哈利波特-神秘的魔法石', id: 11 }
			console.log('name: ' + json.name);
		},
	);
}

function Delete() { // 刪除 id 為 process.argv[3] 的書籍
	const bookId = process.argv[3];
	request.delete(
		`${url}/${bookId}`, // path: /bookprocess.argv[3]s/:id
		(error, response, body) => {
			const json = JSON.parse(body);
			delete json[bookId]; // ref.: MDN - delete operator
			console.log('statusCode:', response && response.statusCode); // 200 OK
			console.error('error:', error);
			console.log(json[bookId]); // should be undefined
		},
	);
}

function Create() { // 新增一本名為 process.argv[3] 的書
	const newBook = process.argv[3];
	request.post({
		url: `${url}`,
		form: {
			name: newBook,
		},
	},
		(error, response, body) => {
			console.log('statusCode:', response && response.statusCode);
			console.error('error:', error);
		},
	);
}

function Update() { // 更新 id 為 process.argv[3] 的書名為 process.argv[4]
	const bookId = process.argv[3];
	const newName = process.argv[4];
	request.patch({
		url: `${url}/${bookId}`,
		form: {
			name: newName,
		},
	},
		(error, response, body) => {
			console.log('statusCode:', response && response.statusCode);
			console.error('error:', error);
		},
	);
}
