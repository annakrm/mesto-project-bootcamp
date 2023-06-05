
const showError = (form, input, errorMessage) => {
	const errorElement = form.querySelector(`#${input.id}-error`);
	input.classList.add('popup__input_type_error');
	errorElement.textContent = errorMessage;
	errorElement.classList.add('popup__error_visible');
}

const hideError = (form, input) => {
	const errorElement = form.querySelector(`#${input.id}-error`);

	input.classList.remove('popup__input_type_error');
	errorElement.classList.remove('popup__error_visible');
	errorElement.textContent = '';
}

const checkInputValidity = (form, input) => {
	if (input.validity.valid) {
		hideError(form, input);
	} else {
		showError(form, input, input.validationMessage);
	}
}

const hasInvalidInput = (inputList) => {
	return inputList.some((input) => {
	  return !input.validity.valid;
	});
  };

const toggleButtonState = (inputList, submitButton) => {
	if (hasInvalidInput(inputList)) {
		submitButton.classList.add('popup__submit-button_disabled');
	} else {
		submitButton.classList.remove('popup__submit-button_disabled');
	}
  };

const setEventListeners = (form) => {
	const inputList = Array.from(form.querySelectorAll('.popup__input'));
	const submitButton = form.querySelector('.popup__submit-button');

	toggleButtonState(inputList, submitButton);

	inputList.forEach((input) => {
		input.addEventListener('input', () => {
			checkInputValidity(form, input);
			toggleButtonState(inputList, submitButton);
		});
	});
};

export const enableValidation = () => {
	const formList = Array.from(document.querySelectorAll('.popup__form'));
	formList.forEach((form) => {
	  form.addEventListener('submit', (evt) => {
		evt.preventDefault();
	  });

	  setEventListeners(form);
	});
}
