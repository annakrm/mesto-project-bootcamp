import { openPopup, closeOverlay } from './utils';

import LIKE_IMAGE_URL  from '../images/like.svg';
import LIKE_IMAGE_FILLED_URL  from '../images/like-filled.svg';

const cardTemplate = document.getElementById('cardTemplate').content.querySelector('.card');
export const cardsContainer = document.querySelector('.cards');

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

const cardViewModal = {
	ref: document.querySelector('.popup_card-view'),
	name: document.querySelector('.popup__card-view-name'),
	image: document.querySelector('.popup__card-view-image'),
};

const openCardViewModal = (name, url) => {
	cardViewModal.name.textContent = name;
	cardViewModal.image.src = url;
	cardViewModal.image.alt = name;

	openPopup(cardViewModal.ref);
};

cardViewModal.ref.addEventListener('mousedown', closeOverlay);

export const createCard = (cardName, url) => {
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

export const initCards = () => {
	initialCards.forEach(({ name, url }) => {
		const card = createCard(name, url);
		cardsContainer.append(card);
	})
}
