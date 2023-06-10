import { openPopup, closeOverlay } from './modal';
import { openCardViewModal, cardViewModal } from '../index';

import LIKE_IMAGE_URL  from '../images/like.svg';
import LIKE_IMAGE_FILLED_URL  from '../images/like-filled.svg';

const cardTemplate = document.getElementById('cardTemplate').content.querySelector('.card');
export const cardsContainer = document.querySelector('.cards');

export const createCard = (cardName, url) => {
	const card = cardTemplate.cloneNode(true);

	const name = card.querySelector('.card__name');
	const image = card.querySelector('.card__image');

	const likeButton = card.querySelector('.card__like-button');
	const deleteButton = card.querySelector('.card__delete-button');

	const likeButtonImage = likeButton.querySelector('.card__like-image');

	name.textContent = cardName;
	image.src = url;
	image.alt = cardName;

	const toggleLike = () => {
		const isLiked = likeButton.classList.toggle('.card__like-button_active');

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