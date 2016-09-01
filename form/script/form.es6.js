'use strict';

document.addEventListener('DOMContentLoaded', ()=> {
	document.getElementById('testForm').addEventListener('submit', e => {
		let formValid = true;
		document.querySelectorAll('input').forEach(input => {
			if (!inputValidate(input)) {
				formValid = false;
			}
		});
		if (formValid) {
			alert('submit');
		}
		else {
			e.preventDefault();
		}
	});
	document.querySelectorAll('input').forEach(input => {
		input.addEventListener('change', (event) => inputValidate(event.srcElement));
	});

	function inputValidate(element) {
		const mailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		let error = element.value.trim().length > 0 ? null: `${element.getAttribute('placeholder')} required`;
		error = element.type === 'email' ? error ? error : mailRegexp.test(element.value) ? error : 'Invalid email address' : error;
		element.parentElement.nextElementSibling.innerText = error ? error : '';
		return error ? false : true;
	}
});