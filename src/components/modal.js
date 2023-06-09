
export const openPopup = (popup) => {
	popup.classList.add('popup_visible');
	popup.classList.remove('popup_hidden');

	document.addEventListener('keydown', closeByEsc)
};

export const closePopup = (popup) => {
	popup.classList.add('popup_hidden');
	popup.classList.remove('popup_visible');

	document.removeEventListener('keydown', closeByEsc)
};

export const closeOverlay = (evt) => {
	if (evt.target.classList.contains('popup')) {
		closePopup(evt.target);
	}
};

export const closeByEsc = (evt) => {
	if (evt.key === 'Escape') {
		const openedPopup = document.querySelector('.popup_visible');

		closePopup(openedPopup);
	}
};
