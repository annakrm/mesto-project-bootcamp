export const settings = {
	formSelector: '.popup__form',
	inputSelector: '.popup__input',
	submitButtonSelector: '.popup__submit-button',
	inactiveButtonClass: 'popup__submit-button_disabled',
	inputErrorClass: 'popup__input_type_error',
	errorClass: 'popup__error_visible'
};

export const validateForm = (form) => {
	for (const inputName in form.inputs) {
		if (!form.inputs[inputName].validity.valid) {
			form.submitButton.classList.add(settings.inactiveButtonClass);
			form.submitButton.disabled = true;

			break;
		}
	}
}

const showError = (form, input, settings, errorMessage) => {
	const errorElement = form.querySelector(`#${input.id}-error`);
	input.classList.add(settings.inputErrorClass);
	errorElement.textContent = errorMessage;
	errorElement.classList.add(settings.errorClass);
}

const hideError = (form, input, settings) => {
	const errorElement = form.querySelector(`#${input.id}-error`);

	input.classList.remove(settings.inputErrorClass);
	errorElement.classList.remove(settings.errorClass);
	errorElement.textContent = '';
}

const checkInputValidity = (form, input, settings) => {
	if (input.validity.valid) {
		hideError(form, input, settings);
	} else {
		showError(form, input, settings, input.validationMessage);
	}
}

const hasInvalidInput = (inputList) => {
	return inputList.some((input) => {
		return !input.validity.valid;
	});
};

const toggleButtonState = (inputList, submitButton, settings) => {
	if (hasInvalidInput(inputList, settings)) {
		submitButton.classList.add(settings.inactiveButtonClass);
		submitButton.disabled = true;
	} else {
		submitButton.classList.remove(settings.inactiveButtonClass);
		submitButton.disabled = false;
	}
};

const setEventListeners = (form, settings) => {
	const inputList = Array.from(form.querySelectorAll(settings.inputSelector));
	const submitButton = form.querySelector(settings.submitButtonSelector);

	inputList.forEach((input) => {
		input.addEventListener('input', () => {
			checkInputValidity(form, input, settings);
			toggleButtonState(inputList, submitButton, settings);
		});
	});
};

export const enableValidation = (settings) => {
	const formList = Array.from(document.querySelectorAll(settings.formSelector));
	formList.forEach((form) => {
		form.addEventListener('submit', (evt) => {
			evt.preventDefault();
		});

		setEventListeners(form, settings);
	});
}