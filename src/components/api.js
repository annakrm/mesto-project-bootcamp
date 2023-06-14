const apiConfig = {
    baseUrl: 'https://nomoreparties.co/v1/wbf-cohort-9',
    headers: {
      authorization: '084b94ae-4c65-45f2-a87f-08bffc7ca6ad',
      'Content-Type': 'application/json'
    }
}

// Profile
const getProfileInfo = () => {
    return fetch(`${apiConfig.baseUrl}/users/me`, {
      method: 'GET',
      headers: apiConfig.headers,
    })
    .then(res => {
        if (res.ok) {
          return res.json();
        }
  
        return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
        console.error(err);
    });
}

const updateProfileInfo = (name, about) => {
    return fetch(`${apiConfig.baseUrl}/users/me`, {
        method: 'PATCH',
        headers: apiConfig.headers,
        body: JSON.stringify({ name, about })
      })
      .then(res => {
            if (res.ok) {
            return res.json();
            }
    
            return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err) => {
        console.error(err);
      }); 
}

const updateProfileAvatar = (avatar) => {
    fetch(`${apiConfig.baseUrl}/users/me/avatar`, {
        method: 'PATCH',
        headers: apiConfig.headers,
        body: JSON.stringify({ avatar })
      })
    .catch((err) => {
        console.error(err);
      }); 
}

// Card
const getInitialCards = () => {
    return fetch(`${apiConfig.baseUrl}/cards`, {
      headers: apiConfig.headers
    })
    .then(res => {
        if (res.ok) {
          return res.json();
        }
  
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .catch((err) => {
        console.error(err);
      }); 
} 

const addCard = (name, link) => {
    return fetch(`${apiConfig.baseUrl}/cards`, {
        method: 'POST',
        headers: apiConfig.headers,
        body: JSON.stringify({ name, link })
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
  
        return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
        console.error(err);
    });
}

const deleteCard = (cardId) => {
    return fetch(`${apiConfig.baseUrl}/cards/${cardId}`, {
        method: 'DELETE',
        headers: apiConfig.headers,
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
  
        return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
        console.error(err);
    });
}

const likeCard = (cardId) => {
    return fetch(`${apiConfig.baseUrl}/cards/likes/${cardId}`, {
        method: 'PUT',
        headers: apiConfig.headers,
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
  
        return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
        console.error(err);
    });
}

const unlikeCard = (cardId) => {
    return fetch(`${apiConfig.baseUrl}/cards/likes/${cardId}`, {
        method: 'DELETE',
        headers: apiConfig.headers,
      })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
  
        return Promise.reject(`Ошибка: ${res.status}`);
    })
    .catch((err) => {
        console.error(err);
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