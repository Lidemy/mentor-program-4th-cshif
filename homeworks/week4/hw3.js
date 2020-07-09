/* eslint-disable no-tabs, indent, no-unused-vars, dot-notation */

const request = require('request');

const url = 'https://restcountries.eu/rest/v2';
const argv = process.argv[2];

request(
	`${url}/name/${argv}`,
	(error, response, body) => {
		const countryInfo = JSON.parse(body);
		if (error) {
			console.error('error:', error);
		}
		if (countryInfo.statusCode === 404) {
			console.log(response && response.statusCode, '找不到國家資訊');
		}
		for (let i = 0; i < countryInfo.length; i += 1) {
			console.log('國家：', countryInfo[i]['name']);
			console.log('首都：', countryInfo[i]['capital']);
			console.log('貨幣：', countryInfo[i]['currencies'][0]['code']);
			console.log('國碼：', countryInfo[i]['callingCodes'][0]);
			console.log('============');
		}
	},
);
