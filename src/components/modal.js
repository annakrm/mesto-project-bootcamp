import { cardsContainer, createCard } from './card';
import { openPopup, closePopup, closeOverlay } from './utils';

// Модалка редактирования профиля
const profile = {
	name: document.querySelector('.profile__name'),
	description: document.querySelector('.profile__description'),
};

const profileModal = {
	ref: document.querySelector('.popup_profile'),
	form: {
		ref: document.querySelector('.popup__profile-form'),
		nameInput: document.querySelector('.input__profile_name'),
		descriptionInput: document.querySelector('.input__profile_description'),
	},
	openButton: document.querySelector('.profile__edit-button'),
};

const openProfileModal = () => {

	const { nameInput, descriptionInput } = profileModal.form;

	nameInput.value = profile.name.textContent;
    descriptionInput.value = profile.description.textContent;

	openPopup(profileModal.ref);
};

const submitProfileForm = (event) => {
    event.preventDefault();

	const { nameInput, descriptionInput } = profileModal.form;

    profile.name.textContent = nameInput.value;
    profile.description.textContent = descriptionInput.value;

    closePopup(profileModal.ref);
}

const initProfileModalListeners = () => {
    profileModal.openButton.addEventListener('click', openProfileModal);
    profileModal.form.ref.addEventListener('submit', submitProfileForm);
    profileModal.ref.addEventListener('mousedown', closeOverlay);
}

// Модалка добавления/редактирования карточки
const cardModal = {
	ref: document.querySelector('.popup_card'),
	form: {
		ref: document.querySelector('.popup__card-form'),
		name: document.querySelector('.popup__card-form .input__text_type_title'),
		url: document.querySelector('.popup__card-form .input__text_type_link'),
	},
	openButton: document.querySelector('.profile__add-card-button'),
};

const submitCardForm = (event) => {
    event.preventDefault();

	const { name, url } = cardModal.form;
	const newCard = createCard(name.value, url.value);

    cardsContainer.prepend(newCard);
    cardModal.form.ref.reset();

    closePopup(cardModal.ref);
}

const initCardModalListeners = () => {
    cardModal.openButton.addEventListener('click', () => openPopup(cardModal.ref));
    cardModal.ref.addEventListener('mousedown', closeOverlay);
    cardModal.form.ref.addEventListener('submit', submitCardForm);
};

const initCloseButtonListeners = () => {
    const closeButtons = document.querySelectorAll('.popup__close-button');

    closeButtons.forEach((button) => {
      const popup = button.closest('.popup');

      button.addEventListener('click', () => closePopup(popup));
    });
}

export const initModalListeners = () => {
    initProfileModalListeners();
    initCardModalListeners();
    initCloseButtonListeners();
}