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
	closeButton: document.querySelector('.popup__close-card-modal-button'),
};

const openCardModal = () => {
    cardModal.ref.classList.add('popup_visible');
    cardModal.ref.classList.remove('popup_hidden');
};

const closeCardModal = () => {
    cardModal.ref.classList.remove('popup_visible');
    cardModal.ref.classList.add('popup_hidden');
};

const submitCardForm = (event) => {
    event.preventDefault();

	const { name, url } = cardModal.form;
	const newCard = createCard(name.value, url.value);

    cardsContainer.prepend(newCard);
    cardModal.form.ref.reset();

    closeCardModal();
}

cardModal.openButton.addEventListener('click', openCardModal);
cardModal.closeButton.addEventListener('click', closeCardModal);
cardModal.form.ref.addEventListener('submit', submitCardForm);

// Модалка просмотра карточки
const cardViewModal = {
	ref: document.querySelector('.popup_card-view'),
	name: document.querySelector('.popup__card-view-name'),
	image: document.querySelector('.popup__card-view-image'),
	closeButton: document.querySelector('.popup__close-card-view-modal-button'),
};

const openCardViewModal = (name, url) => {
	cardViewModal.name.textContent = name;
	cardViewModal.image.src = url;

	cardViewModal.ref.classList.add('popup_visible');
	cardViewModal.ref.classList.remove('popup_hidden');
};

const closeCardViewModal = () => {
	cardViewModal.ref.classList.remove('popup_visible');
	cardViewModal.ref.classList.add('popup_hidden');
};

cardViewModal.closeButton.addEventListener('click', closeCardViewModal);
