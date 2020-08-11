/* eslint-disable no-tabs, indent, no-alert, prefer-template, no-restricted-syntax, consistent-return, max-len */

const form = document.querySelector('.lazy-form');
const inputText = document.querySelectorAll('.required input[type="text"]');
const inputRadio = document.querySelectorAll('input[name="choice"]');

form.addEventListener('submit', (e) => {
	// text.value
	// 檢查 <input type="text">
	for (const text of inputText) {
		if (text.value) {
			text.parentNode.querySelector('p').classList.remove('error__show');
		} else {
			text.parentNode.querySelector('p').classList.add('error__show');
		}
	}
	// 檢查 <input type="radio">
	// radio.nextElementSibling.innerText
	for (const radio of inputRadio) {
		const radioParent = radio.parentNode.parentNode.parentNode.querySelector('.error');
		if (radio.checked) {
			radioParent.classList.remove('error__show');
			break;
		} else {
			radioParent.classList.add('error__show');
		}
	}
	// 展示使用者填寫的資料
	function getRadio() {
		for (let i = 0; i < form.choice.length; i += 1) {
			if (form.choice[i].checked) {
				return form.choice[i].nextElementSibling.innerText;
			}
		}
	}
	if (form.outerHTML.includes('error__show')) {
		e.preventDefault();
	} else {
		console.log('你都填好了！');
		alert(`暱稱：${form.elements.name.value} \n電子郵件：${form.elements.email.value} \n手機號碼：${form.elements.mobile.value} \n報名類型：` + getRadio() + `\n怎麼知道這個活動的？${form.elements.channel.value}`);
	}
});
