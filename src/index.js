import { mestoApi } from './components/api';
import { cardsContainer, createCard } from './components/card';
import { validateForm, enableValidation, settings } from './components/validate';
import { openPopup, closePopup, closeOverlay, toggleModalButtonLoadingState } from './components/modal';

import './styles/index.css';

const DEFAULT_ID = -1;

// Profile
const profile = {
	id: DEFAULT_ID,
	name: document.querySelector('.profile__name'),
	description: document.querySelector('.profile__description'),
	avatar: document.querySelector('.profile__avatar'),
};

const profileModal = {
	ref: document.querySelector('.popup_profile'),
	form: {
		ref: document.querySelector('.popup__profile-form'),
        inputs: {
            name: document.querySelector('.input__profile_name'),
            description: document.querySelector('.input__profile_description'),
        },
        submitButton: document.querySelector('.popup__profile-form .popup__submit-button'),
	},
	openButton: document.querySelector('.profile__edit-button'),
};

const initProfile = async () => {
	const { _id: id, name, about, avatar } = await mestoApi.profile.getProfileInfo();
  
	profile.id = id;
    profile.name.textContent = name;
    profile.description.textContent = about;
    profile.avatar.src = avatar;
  }

const openProfileModal = () => {
	const { name, description } = profileModal.form.inputs;

	name.value = profile.name.textContent;
  	description.value = profile.description.textContent;

	validateForm(profileModal.form);
	openPopup(profileModal.ref);
};

const submitProfileForm = async (event) => {
  	event.preventDefault();

	const { inputs, submitButton } = profileModal.form;

	try {
		toggleModalButtonLoadingState(submitButton, true);
	
		const { name, about } = await mestoApi.profile.updateProfileInfo(inputs.name.value, inputs.description.value);
	
		profile.name.textContent = name;
		profile.description.textContent = about;

		closePopup(profileModal.ref);
	} catch (err) {
		console.error(err);
	} finally {
		toggleModalButtonLoadingState(submitButton, false);
	}
}

const initProfileModalListeners = () => {
    profileModal.openButton.addEventListener('click', openProfileModal);
    profileModal.form.ref.addEventListener('submit', submitProfileForm);
    profileModal.ref.addEventListener('mousedown', closeOverlay);
}

// Profile Avatar
const profileAvatarModal = {
	ref: document.querySelector('.popup_profile-avatar'),
	form: {
		ref: document.querySelector('.popup__profile-avatar-form'),
        inputs: {
            url: document.querySelector('.input__profile-avatar-url'),
        },
        submitButton: document.querySelector('.popup__profile-avatar-form .popup__submit-button'),
	},
	openButton: document.querySelector('.profile__edit-avatar-button'),
};

const openProfileAvatarModal = () => {
	const { url } = profileAvatarModal.form.inputs;

	url.value = profile.avatar.src;

	validateForm(profileAvatarModal.form);
	openPopup(profileAvatarModal.ref);
};

const submitProfileAvatarForm = async (event) => {
	event.preventDefault();

  const { inputs, submitButton } = profileAvatarModal.form;

  try {
	  toggleModalButtonLoadingState(submitButton, true);
  
	  await mestoApi.profile.updateProfileAvatar(inputs.url.value);

	  const { avatar } = await mestoApi.profile.getProfileInfo();

	  profile.avatar.src = avatar;

	  closePopup(profileAvatarModal.ref);
  } catch (err) {
	  console.error(err);
  } finally {
	  toggleModalButtonLoadingState(submitButton, false);
  }
}

const initProfileAvatarModalListeners = () => {
    profileAvatarModal.openButton.addEventListener('click', openProfileAvatarModal);
    profileAvatarModal.form.ref.addEventListener('submit', submitProfileAvatarForm);
    profileAvatarModal.ref.addEventListener('mousedown', closeOverlay);
}

// Card
const cardDeletionModal = {
	ref: document.querySelector('.popup_card-deletion'),
	form: {
		ref: document.querySelector('.popup__card-deletion-form'),
        submitButton: document.querySelector('.popup__card-deletion-form .popup__submit-button'),
	},
	cardInfo: {
		ref: null,
		id: DEFAULT_ID,
	},
};

const openCardDeletionModal = (cardRef, cardId) => {
	cardDeletionModal.cardInfo = { ref: cardRef, id: cardId };
	openPopup(cardDeletionModal.ref);
};

const submitCardDeletionForm = async (event) => {
	event.preventDefault();

  const { form, cardInfo } = cardDeletionModal;
  const { submitButton } = form;

  try {
	  toggleModalButtonLoadingState(submitButton, true);
  
	  await mestoApi.card.deleteCard(cardInfo.id);
	  cardInfo.ref.remove();

	  closePopup(cardDeletionModal.ref);
  } catch (err) {
	  console.error(err);
  } finally {
	  toggleModalButtonLoadingState(submitButton, false);
  }
}

const initCardDeletionModalListeners = () => {
    cardDeletionModal.form.ref.addEventListener('submit', submitCardDeletionForm);
    cardDeletionModal.ref.addEventListener('mousedown', closeOverlay);
}

const initCards = async () => {
	const initialCards = await mestoApi.card.getInitialCards();
  
	  initialCards.forEach(({ _id: cardId, name: cardName, link: url, likes, owner }) => {
		const card = createCard({ 
			profileId: profile.id,
			ownerId: owner._id,
			cardId,
			cardName,
			url,
			likes,
			onOpenCardDeletionModal: openCardDeletionModal,
		});

		cardsContainer.append(card);
	  })
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

const submitCardForm = async (event) => {
    event.preventDefault();

	const { inputs, submitButton } = cardModal.form;

	try {
		toggleModalButtonLoadingState(submitButton, true);

		const { _id: cardId, name: cardName, link: url, likes, owner } = await mestoApi.card.addCard(inputs.name.value, inputs.url.value);

		const newCard = createCard({
			profileId: profile.id,
			ownerId: owner._id,
			cardId,
			cardName,
			url,
			likes,
			onOpenCardDeletionModal: openCardDeletionModal,
		});
	
		cardsContainer.prepend(newCard);
		cardModal.form.ref.reset();
	
		closePopup(cardModal.ref);
	} catch (err) {
		console.error(err);
	} finally {
		toggleModalButtonLoadingState(submitButton, false);
	}
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

export const initModalListeners = () => {
    initProfileModalListeners();
	initProfileAvatarModalListeners();
    initCardModalListeners();
	initCardDeletionModalListeners();
    initCloseButtonListeners();
}

const initApp = () => {
	initProfile();
	initCards();
	initModalListeners();
	enableValidation(settings); 
}

initApp();