// const popup = document.querySelector('.popup');

function openPopup(popup) {
	popup.classList.add('popup_visible');
	popup.classList.remove('popup_hidden');

	document.addEventListener('keydown', closeByEsc)
};

function closePopup(popup) {
	popup.classList.add('popup_hidden');
	popup.classList.remove('popup_visible');

	document.addEventListener('keydown', closeByEsc)
};

const closeButtons = document.querySelectorAll('.popup__close-button');
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

// Закрытие кликом на overlay
function closeOverlay(evt) {
	const openedPopup = document.querySelector('.popup_visible');

	if (evt.target.classList.contains('popup'))  {
		closePopup(openedPopup);
	}
};
// Закрытие кликом на ESC
function closeByEsc(evt) {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_visible');
      closePopup(openedPopup);
    }
};

// ---------------------------------------------------------------------------

const profile = {
	name: document.querySelector('.profile__name'),
	description: document.querySelector('.profile__description'),
};

// Модалка редактирования профиля
const profileModal = {
	ref: document.querySelector('.popup_profile'),
	form: {
		ref: document.querySelector('.popup__profile-form'),
		nameInput: document.querySelector('.input__profile_name'),
		descriptionInput: document.querySelector('.input__profile_description'),
	},
	openButton: document.querySelector('.profile__edit-button'),
	//closeButton: document.querySelector('.popup__close-profile-modal-button'),
};

const openProfileModal = () => {
    //profileModal.ref.classList.add('popup_visible');
	//profileModal.ref.classList.remove('popup_hidden');

	const { nameInput, descriptionInput } = profileModal.form;

	nameInput.value = profile.name.textContent;
    descriptionInput.value = profile.description.textContent;

	openPopup(profileModal.ref); // Вызвала, передала в параметр попап профиля
};

//const closeProfileModal = () => {
    //profileModal.ref.classList.add('popup_hidden');
	//profileModal.ref.classList.remove('popup_visible');
//};

const submitProfileForm = (event) => {
    event.preventDefault();

	const { nameInput, descriptionInput } = profileModal.form;

    profile.name.textContent = nameInput.value;
    profile.description.textContent = descriptionInput.value;

    closePopup(profileModal.ref);
}

profileModal.openButton.addEventListener('click', openProfileModal);
//profileModal.closeButton.addEventListener('click', closeProfileModal = () => { closePopup(profileModal.ref) });
// closeOverlay(profileModal.ref);
//closeEsc(profileModal.ref);
profileModal.form.ref.addEventListener('submit', submitProfileForm);

profileModal.ref.addEventListener('mousedown', closeOverlay);

// -----------------------------------------------------------------------------------------

const cardTemplate = document.getElementById('cardTemplate').content.querySelector('.card');
const cardsContainer = document.querySelector('.cards');

const LIKE_IMAGE_URL = 'images/like.svg';
const LIKE_IMAGE_FILLED_URL = 'images/like-filled.svg';

const initialCards = [
    {
      name: 'Архыз',
      url: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      url: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      url: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      url: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      url: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      url: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const createCard = (cardName, url) => {
	const card = cardTemplate.cloneNode(true);

	const name = card.querySelector('.card__name');
	const image = card.querySelector('.card__image');

	const likeButton = card.querySelector('.card__like-button');
	const deleteButton = card.querySelector('.card__delete-button');

	name.textContent = cardName;
	image.src = url;
	image.alt = cardName;

	const toggleLike = () => {
		const isLiked = likeButton.classList.toggle('.card__like-button_active');
		const likeButtonImage = likeButton.querySelector('.card__like-image');

		likeButtonImage.src = isLiked ? LIKE_IMAGE_FILLED_URL : LIKE_IMAGE_URL;
	};

	const deleteCard = (card) => {
		card.remove();
	};

	image.addEventListener('click', () => openCardViewModal(cardName, url));
	likeButton.addEventListener('click', toggleLike);
	deleteButton.addEventListener('click', () => deleteCard(card));

	return card;
}

const initCards = () => {
	initialCards.forEach(({ name, url }) => {
		const card = createCard(name, url);
		cardsContainer.append(card);
	})
}

initCards();

// Модалка добавления/редактирования карточки
const cardModal = {
	ref: document.querySelector('.popup_card'),
	form: {
		ref: document.querySelector('.popup__card-form'),
		name: document.querySelector('.popup__card-form .input__text_type_title'),
		url: document.querySelector('.popup__card-form .input__text_type_link'),
	},
	openButton: document.querySelector('.profile__add-card-button'),
	//closeButton: document.querySelector('.popup__close-card-modal-button'),
};

//const openCardModal = () => {
    //cardModal.ref.classList.add('popup_visible');
    //cardModal.ref.classList.remove('popup_hidden');
//};

//const closeCardModal = () => {
    //cardModal.ref.classList.remove('popup_visible');
    //cardModal.ref.classList.add('popup_hidden');
//};

const submitCardForm = (event) => {
    event.preventDefault();

	const { name, url } = cardModal.form;
	const newCard = createCard(name.value, url.value);

    cardsContainer.prepend(newCard);
    cardModal.form.ref.reset();

    closePopup(cardModal.ref);
}

cardModal.openButton.addEventListener('click', openCardModal = () => { openPopup(cardModal.ref) }); // !
//cardModal.closeButton.addEventListener('click', closeCardModal = () => { closePopup(cardModal.ref) }); // !
// closeOverlay(cardModal.ref);
cardModal.ref.addEventListener('mousedown', closeOverlay);
cardModal.form.ref.addEventListener('submit', submitCardForm);

// Модалка просмотра карточки
const cardViewModal = {
	ref: document.querySelector('.popup_card-view'),
	name: document.querySelector('.popup__card-view-name'),
	image: document.querySelector('.popup__card-view-image'),
	//closeButton: document.querySelector('.popup__close-card-view-modal-button'),
};

const openCardViewModal = (name, url) => {
	cardViewModal.name.textContent = name;
	cardViewModal.image.src = url;
	cardViewModal.image.alt = name;

	openPopup(cardViewModal.ref);
	//cardViewModal.ref.classList.add('popup_visible');
	//cardViewModal.ref.classList.remove('popup_hidden');
};

cardViewModal.ref.addEventListener('mousedown', closeOverlay);
// closeOverlay(cardViewModal.ref);
//const closeCardViewModal = () => {
	//cardViewModal.ref.classList.remove('popup_visible');
	//cardViewModal.ref.classList.add('popup_hidden');
//};

//cardViewModal.closeButton.addEventListener('click', closeCardViewModal = () => { closePopup(cardViewModal.ref)});

//Валидация

function showError(formElement, inputElement, errorMessage) {
	const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
	inputElement.classList.add('popup__input_type_error');
	errorElement.textContent = errorMessage;
	errorElement.classList.add('popup__error_visible');
}

function hideError(formElement, inputElement) {
	const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

	inputElement.classList.remove('popup__input_type_error');
	errorElement.classList.remove('popup__error_visible');
	errorElement.textContent = '';
}

function checkInputValidity(formElement, inputElement) {
	if (inputElement.validity.valid) {
		hideError(formElement, inputElement);
	} else {
		showError(formElement, inputElement, inputElement.validationMessage);
	}
}

const hasInvalidInput = (inputList) => {
	return inputList.some((inputElement) => {
	  return !inputElement.validity.valid;
	});
  };

const toggleButtonState = (inputList, buttonElement) => {
	if (hasInvalidInput(inputList)) {
	  buttonElement.classList.add('popup__submit-button_disabled');
	} else {
	  buttonElement.classList.remove('popup__submit-button_disabled');
	}
  };

const setEventListeners = (formElement) => {
	const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
	const buttonElement = formElement.querySelector('.popup__submit-button');

	toggleButtonState(inputList, buttonElement);


	inputList.forEach((inputElement) => {
		inputElement.addEventListener('input', function () {
			checkInputValidity(formElement, inputElement);
			toggleButtonState(inputList, buttonElement);
		});
	});
};

const enableValidation = () => {
	const formList = Array.from(document.querySelectorAll('.popup__form'));
	formList.forEach((formElement) => {
	  formElement.addEventListener('submit', function (evt) {
		evt.preventDefault();
	  });

	  setEventListeners(formElement);
	});
};

enableValidation();