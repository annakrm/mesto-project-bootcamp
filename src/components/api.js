import { checkResponse } from './utils';

const apiConfig = {
  baseUrl: 'https://nomoreparties.co/v1/wbf-cohort-9',
  headers: {
    authorization: '084b94ae-4c65-45f2-a87f-08bffc7ca6ad',
    'Content-Type': 'application/json'
  }
}

const request = (endpoint, options) => {
	const { baseUrl, headers } = apiConfig;

	return fetch(`${baseUrl}/${endpoint}`, { headers, ...options }).then(checkResponse);
}

// Profile
const getProfileInfo = () => {
	return request('users/me', { method: 'GET' });
}

const updateProfileInfo = (name, about) => {
	return request('users/me', { 
		method: 'PATCH',
		body: JSON.stringify({ name, about }),
	});
}

const updateProfileAvatar = (avatar) => {
	return request('users/me/avatar', { 
		method: 'PATCH',
		body: JSON.stringify({ avatar }),
	});
}

// Card
const getInitialCards = () => {
	return request('cards', { 
		method: 'GET',
	});
}

const addCard = (name, link) => {
	return request('cards', { 
		method: 'POST',
		body: JSON.stringify({ name, link })
	});
}

const deleteCard = (cardId) => {
	return request(`cards/${cardId}`, { 
		method: 'DELETE',
	});
}

const likeCard = (cardId) => {
	return request(`cards/likes/${cardId}`, { 
		method: 'PUT',
	});
}

const unlikeCard = (cardId) => {
	return request(`cards/likes/${cardId}`, { 
		method: 'DELETE',
	});
}

export const mestoApi = {
  profile: {
    getProfileInfo,
    updateProfileInfo,
    updateProfileAvatar,
  },
  card: {
    getInitialCards,
    addCard,
    deleteCard,
    likeCard,
    unlikeCard,
  },
};