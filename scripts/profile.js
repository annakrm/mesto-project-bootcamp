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
	closeButton: document.querySelector('.popup__close-profile-modal-button'),
};

const openProfileModal = () => {
    profileModal.ref.classList.add('popup_visible');
	profileModal.ref.classList.remove('popup_hidden');

	const { nameInput, descriptionInput } = profileModal.form;

	nameInput.value = profile.name.textContent;
    descriptionInput.value = profile.description.textContent;
};

const closeProfileModal = () => {
    profileModal.ref.classList.add('popup_hidden');
	profileModal.ref.classList.remove('popup_visible');
};

const submitProfileForm = (event) => {
    event.preventDefault();

	const { nameInput, descriptionInput } = profileModal.form;

    profile.name.textContent = nameInput.value;
    profile.description.textContent = descriptionInput.value;

    closeProfileModal();
}

profileModal.openButton.addEventListener('click', openProfileModal);
profileModal.closeButton.addEventListener('click', closeProfileModal);
profileModal.form.ref.addEventListener('submit', submitProfileForm); 
