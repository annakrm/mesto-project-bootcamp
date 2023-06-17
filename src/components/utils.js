export const checkResponse = (response) => {
	if (response.ok) {
		return response.json();
	}

	return Promise.reject(`Ошибка: ${response.status}`);
}

export const toggleModalButtonLoadingState = (submitButton, isLoading) => {
	if (isLoading) {
		submitButton.disabled = true;
		submitButton.textContent = 'Загрузка...';
	} else {
		submitButton.disabled = false;
		submitButton.textContent = 'Сохранить';
	}
}