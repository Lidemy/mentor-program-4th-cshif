const newTodo = document.querySelector('input[type="text"]');
const addBtn = document.querySelector('#add-btn');
const list = document.querySelector('#list');

// add new todo by enter
newTodo.addEventListener('keyup', (e) => {
	if (newTodo.value === '') {
		e.preventDefault();
	}
	if (e.keyCode === 13) {
		addBtn.click();
	}
})

// add new todo
addBtn.addEventListener('click', (e) => {
	if (newTodo.value === '') {
		e.preventDefault();
	} else {
		let todo = document.createElement('div');
		todo.className = 'todo';
		todo.innerHTML = '<label for=""><input type="checkbox">' + escapeHtml(newTodo.value) + '<span></span></label><button class="remove">remove</button>';
		list.appendChild(todo);
		newTodo.value = '';
	}
});

function escapeHtml(unsafe) {
	return unsafe
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#039;");
}

list.addEventListener('click', (e) => {
	// remove a todo from list
	if (e.target.classList.contains('remove')) {
		list.removeChild(e.target.closest('.todo'));
	}

	// mark complete
	if (e.target.classList.contains('check')) {
		if (e.target.checked) {
			e.target.parentNode.classList.add('done');
		} else {
			e.target.parentNode.classList.remove('done');
		}
	}
})
