import { mestoApi } from './api';
import { openPopup } from './modal';

import LIKE_IMAGE_URL from '../images/like.svg';
import LIKE_IMAGE_FILLED_URL from '../images/like-filled.svg';

export const cardViewModal = {
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

const cardTemplate = document.getElementById('cardTemplate').content.querySelector('.card');

export const cardsContainer = document.querySelector('.cards');

export const createCard = ({ profileId, cardId, cardName, url, likes, ownerId, onOpenCardDeletionModal }) => {
	const card = cardTemplate.cloneNode(true);

	const name = card.querySelector('.card__name');
	const image = card.querySelector('.card__image');
	const likeValue = card.querySelector('.card__like-value');

	const likeButton = card.querySelector('.card__like-button');
	const deleteButton = card.querySelector('.card__delete-button');

	const likeButtonImage = likeButton.querySelector('.card__like-image');

	name.textContent = cardName;
	image.src = url;
	image.alt = cardName;
	likeValue.textContent = likes.length;

	const isAlreadyLiked = Boolean(likes.find(({ _id: id }) => id === profileId));

	if (isAlreadyLiked) {
		likeButton.classList.toggle('.card__like-button_active');
		likeButtonImage.src = LIKE_IMAGE_FILLED_URL;
	}

	const toggleLike = async () => {
		const isLiked = likeButton.classList.toggle('.card__like-button_active');

		const handleToggleLikeRequest = (cardId) => {
			if (isLiked) {
				return mestoApi.card.likeCard(cardId).catch((err) => { console.error(err); });
			} 
			
			return mestoApi.card.unlikeCard(cardId);
		}

		await handleToggleLikeRequest(cardId)
			.then(({ likes: updatedLikesArray }) => {
				likeValue.textContent = updatedLikesArray.length;
				likeButtonImage.src = isLiked ? LIKE_IMAGE_FILLED_URL : LIKE_IMAGE_URL;
			})
			.catch((err) => { console.error(err); })
	};

	const deleteCard = (card) => {
		onOpenCardDeletionModal(card, cardId);
	};

	image.addEventListener('click', () => openCardViewModal(cardName, url));
	likeButton.addEventListener('click', toggleLike);

	if (ownerId !== profileId) {
		deleteButton.remove();
	} else {
		deleteButton.addEventListener('click', () => deleteCard(card));
	}

	return card;
}