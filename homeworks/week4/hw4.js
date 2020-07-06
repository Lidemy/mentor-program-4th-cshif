/* eslint-disable no-tabs, indent, no-unused-vars, dot-notation, prefer-template */

const request = require('request');

const options = {
	url: 'https://api.twitch.tv/kraken/games/top',
	headers: {
		Accept: 'application/vnd.twitchtv.v5+json',
		'Client-ID': 'i1c5rlket7e6x18dx2hdkyuajmf6qh',
	},
};

function callback(error, response, body) {
	const data = JSON.parse(body);
	for (let i = 0; i < 10; i += 1) {
		console.log(data['top'][i]['viewers'] + ' ' + data['top'][i]['game']['name']);
	}
}

request(options, callback);
