import { cardsContainer, createCard } from './components/card';
import { validateForm, enableValidation, settings } from './components/validate';
import { openPopup, closePopup, closeOverlay, closeByEsc } from './components/modal';

import './styles/index.css';

const profile = {
	name: document.querySelector('.profile__name'),
	description: document.querySelector('.profile__description'),
};

const profileModal = {
	ref: document.querySelector('.popup_profile'),
	form: {
		ref: document.querySelector('.popup__profile-form'),
        inputs: {
            nameInput: document.querySelector('.input__profile_name'),
            descriptionInput: document.querySelector('.input__profile_description'),
        },
        submitButton: document.querySelector('.popup__profile-form .popup__submit-button'),
	},
	openButton: document.querySelector('.profile__edit-button'),
};

const openProfileModal = () => {
	const { nameInput, descriptionInput } = profileModal.form.inputs;

	nameInput.value = profile.name.textContent;
    descriptionInput.value = profile.description.textContent;

	validateForm(profileModal.form);
	openPopup(profileModal.ref);
};

const submitProfileForm = (event) => {
    event.preventDefault();

	const { nameInput, descriptionInput } = profileModal.form.inputs;

    profile.name.textContent = nameInput.value;
    profile.description.textContent = descriptionInput.value;

    closePopup(profileModal.ref);
}

const initProfileModalListeners = () => {
    profileModal.openButton.addEventListener('click', openProfileModal);
    profileModal.form.ref.addEventListener('submit', submitProfileForm);
    profileModal.ref.addEventListener('mousedown', closeOverlay);
}

const cardModal = {
	ref: document.querySelector('.popup_card'),
	form: {
		ref: document.querySelector('.popup__card-form'),
        inputs: {
            name: document.querySelector('.popup__card-form .input__text_type_title'),
            url: document.querySelector('.popup__card-form .input__text_type_link'),
        },
		submitButton: document.querySelector('.popup__card-form .popup__submit-button'),
	},
	openButton: document.querySelector('.profile__add-card-button'),
};

const submitCardForm = (event) => {
    event.preventDefault();

	const { name, url } = cardModal.form.inputs;
	const newCard = createCard(name.value, url.value);

    cardsContainer.prepend(newCard);
    cardModal.form.ref.reset();

    closePopup(cardModal.ref);
}

const initCardModalListeners = () => {
    cardModal.openButton.addEventListener('click', () => {
        validateForm(cardModal.form);
        openPopup(cardModal.ref)
    });

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

export const initCards = () => {
	initialCards.forEach(({ name, url }) => {
		const card = createCard(name, url);
		cardsContainer.append(card);
	})
}

export const cardViewModal = {
	ref: document.querySelector('.popup_card-view'),
	name: document.querySelector('.popup__card-view-name'),
	image: document.querySelector('.popup__card-view-image'),
};
export const openCardViewModal = (name, url) => {
	cardViewModal.name.textContent = name;
	cardViewModal.image.src = url;
	cardViewModal.image.alt = name;

	openPopup(cardViewModal.ref);
};

cardViewModal.ref.addEventListener('mousedown', closeOverlay);

export const initModalListeners = () => {
    initProfileModalListeners(settings);
    initCardModalListeners(settings);
    initCloseButtonListeners();
}

const initApp = () => {
	initCards();
	initModalListeners();
	enableValidation(settings); 
}

initApp();