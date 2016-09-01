document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('testForm').addEventListener('submit', function (e) {
		var formValid = true;
		document.querySelectorAll('input').forEach(function (input) {
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
	var inputs = document.querySelectorAll('input');
	for (var i = 0, l = inputs.length; i < l; i++) {
		inputs[i].addEventListener('change', function (event) { inputValidate(event.srcElement); });
	}
	console.log(inputs);
	// inputs.forEach(function (input) {
	// 	console.log(input);
	// 	input.addEventListener('change', function (event) { inputValidate(event.srcElement); });
	// });

	function inputValidate(element) {
		var mailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		var error = element.value.trim().length > 0 ? null: element.getAttribute('placeholder') + ' required';
		error = element.type === 'email' ? error ? error : mailRegexp.test(element.value) ? error : 'Invalid email address' : error;
		element.parentElement.nextElementSibling.innerText = error ? error : '';
		return error ? false : true;
	}
});