/* eslint-disable no-tabs, indent, no-alert */

const lazy = document.querySelector('.lazy-form');

lazy.addEventListener('submit', (e) => {
	const name = document.querySelector('input[name=name]');
	const email = document.querySelector('input[name=email]');
	const mobile = document.querySelector('input[name=mobile]');
	const signupChoice1 = document.querySelector('#bed');
	const signupChoice2 = document.querySelector('#floor');
	const signupChoice3 = document.querySelector('#couch');
	const channel = document.querySelector('input[name=channel]');

	// 取出 signup 勾選的值
	function signup() {
		let form = document.querySelector('form[name=lazy');
		for(let i = 0; i < form.signup.length; i++){
			if (form.signup[i].checked) {
				let signupChecked = form.signup[i].value;
				console.log(signupChecked);
			}
		}
	}

	if ((name.value === '') || (email.value === '') || (mobile.value === '') || (channel.value === '') || !(signupChoice1.checked || signupChoice2.checked || signupChoice3.checked)) {
		alert('你有資料沒填喔！');
		e.preventDefault();
	} else {
		alert(`暱稱：${name.value} \n電子郵件：${email.value} \n手機號碼：${mobile.value} \n報名類型：${signupCheckedValue} \n怎麼知道這個活動的：${channel.value}`);
	}

	if (name.value === '') {
		const noName = document.querySelector('#nameId');
		const remind = document.createElement('p');
		remind.classList.add('form__desc', 'required');
		remind.innerText = '欸，填一下暱稱啊';
		noName.appendChild(remind);
		e.preventDefault();
	}
	if (email.value === '') {
		const noEmail = document.querySelector('#emailId');
		const remind = document.createElement('p');
		remind.classList.add('form__desc', 'required');
		remind.innerText = '欸，填一下電子郵件啊';
		noEmail.appendChild(remind);
		e.preventDefault();
	}
	if (mobile.value === '') {
		const noMobile = document.querySelector('#mobileId');
		const remind = document.createElement('p');
		remind.classList.add('form__desc', 'required');
		remind.innerText = '欸，填一下手機號碼啊';
		noMobile.appendChild(remind);
		e.preventDefault();
	}
	if (!(signupChoice1.checked || signupChoice2.checked || signupChoice3.checked)) {
		const noSignup = document.querySelector('#signupId');
		const remind = document.createElement('p');
		remind.classList.add('form__desc', 'required');
		remind.innerText = '欸，勾一下報名類型啊';
		noSignup.appendChild(remind);
		e.preventDefault();
	}
	if (channel.value === '') {
		const noChannel = document.querySelector('#channelId');
		const remind = document.createElement('p');
		remind.classList.add('form__desc', 'required');
		remind.innerText = '欸，填一下怎麼知道這個活動的啊';
		noChannel.appendChild(remind);
		e.preventDefault();
	}
});
