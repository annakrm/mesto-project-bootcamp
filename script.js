//6 карточек из коробки

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

// Открытие и закрытие окна изменения профиля
const modalProfile = document.querySelector(".popup_profile");
const openEditModalBtn = document.querySelector(".profile__edit-button");
const closeEditModalBtn = document.querySelector(".popup__close-button_profile");

const openProfileModal = function () {
    modalProfile.classList.add("popup_opened");
  };

openEditModalBtn.addEventListener("click", openProfileModal);

const closeProfileModal = function () {
    modalProfile.classList.remove("popup_opened");
  };

closeEditModalBtn.addEventListener("click", closeProfileModal);

//Изменение данных профиля
const formElement = document.querySelector('.popup__editing-form');
const nameInput = document.querySelector('.input__text_type_name');
const jobInput = document.querySelector('.input__text_type_bio');

function handleFormSubmit(evt) {
    evt.preventDefault();

    const nameIn = document.querySelector('.profile__name');
    const bioIn = document.querySelector('.profile__description');

    nameIn.textContent = nameInput.value;
    bioIn.textContent = jobInput.value;
    closeProfileModal();
}

formElement.addEventListener('submit', handleFormSubmit); 

//Открытие и закрытие окна добавления карточки
const modalNewCard = document.querySelector(".popup_newCard");
const openAddModalBtn = document.querySelector(".profile__add-button");
const closeAddModalBtn = document.querySelector(".popup__close-button_new-card");

const openNewCardModal = function () {
    modalNewCard.classList.add("popup_opened");
  };

openAddModalBtn.addEventListener("click", openNewCardModal);

const closeNewCardModal = function () {
    modalNewCard.classList.remove("popup_opened");
  };

closeAddModalBtn.addEventListener("click", closeNewCardModal);

//Добавление карточки

const template = document.getElementById('cardTemplate').content.querySelector('.element');
const addCardForm = document.querySelector('.popup__editing-form_newCard');
const inputNameElement = addCardForm.querySelector('.input__text_type_title');
const inputLinkElement = addCardForm.querySelector('.input__text_type_link');
const itemContainer = document.querySelector('.elements');

function createNewCard(name, link) {
    const toDoElement = template.cloneNode(true);
    
    toDoElement.querySelector('.element__title').textContent = name;
    toDoElement.querySelector('.element__image').src = link;

    const likeButton = toDoElement.querySelector('.element__like-button');

    const handleLikeButtonClick = function () {
        const isLiked = likeButton.classList.toggle('element__like-button_active');
        const likeButtonImage = likeButton.firstChild;
        
        if (isLiked) {
            likeButtonImage.src = 'images/like-filled.svg'
        } else {
            likeButtonImage.src = 'images/like.svg'
        }
    };
    
    likeButton.addEventListener('click', handleLikeButtonClick);

    //toDoElement.querySelector('.element__like-button').addEventListener('click', function (evt) {
      // evt.target.classList.toggle('element__like-button_active');   
   // });

    return toDoElement;
}

function handleFormSubmitAddCard(event) {
    event.preventDefault();
    const newCard = createNewCard(inputNameElement.value, inputLinkElement.value);
    itemContainer.prepend(newCard);
    addCardForm.reset();
    closeNewCardModal();
}

addCardForm.addEventListener('submit', handleFormSubmitAddCard);

//Добавление 6 карточек из коробки

initialCards.forEach( item => {
    //const newCard = createNewCard(item);
    const toDoElement = template.cloneNode(true);

    toDoElement.querySelector('.element__title').textContent = item.name;
    toDoElement.querySelector('.element__image').src = item.link;

    const likeButton = toDoElement.querySelector('.element__like-button');

    const handleLikeButtonClick = function () {
        const isLiked = likeButton.classList.toggle('element__like-button_active');
        const likeButtonImage = likeButton.firstChild;
        
        if (isLiked) {
            likeButtonImage.src = 'images/like-filled.svg'
        } else {
            likeButtonImage.src = 'images/like.svg'
        }
    };
    
    likeButton.addEventListener('click', handleLikeButtonClick);

    itemContainer.append(toDoElement);
})

//Удаление карточки
//Открытие попапа с картинкой
//Плавное открытие и закрытие попапов