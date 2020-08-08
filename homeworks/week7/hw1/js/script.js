/* eslint-disable no-tabs, indent, no-alert */

const form = document.querySelector('.lazy-form');
const inputText = document.querySelectorAll('.required input[type="text"]');
const inputRadio = document.querySelectorAll('input[name="choice"]');

// 檢查 <input type="text">
function hasValue() {
	for(let text of inputText) {
		if (text.value) {
			text.parentNode.querySelector('p').classList.remove('error__show');
		} else {
			text.parentNode.querySelector('p').classList.add('error__show');
		}
	}
}

// 檢查 <input type="radio">
function hasChecked() {
	for(let radio of inputRadio) {
		let radioParent = radio.parentNode.parentNode.parentNode.querySelector('.error');
		if (radio.checked) {
			radioParent.classList.remove('error__show');
			return radio.nextElementSibling.innerText;
			break;
		} else {
			radioParent.classList.add('error__show');
		}
	}
}

form.addEventListener('submit', (e) => {
	if (form.outerHTML.includes('error__show')) {
		e.preventDefault();
	} else {
		//
	}
});
