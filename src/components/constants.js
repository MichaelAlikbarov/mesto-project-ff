const cardTemplate = document.querySelector('#card-template').content;
const cardsList = document.querySelector('.places__list');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');

const popupEditProfile = document.querySelector('.popup_type_edit');
const profileSaveEditButton = popupEditProfile.querySelector('.popup__button');

const popupAddCard = document.querySelector('.popup_type_new-card');
const popupImage = document.querySelector('.popup_type_image');
const profileSaveAddCardButton = popupAddCard.querySelector('.popup__button');

const profileCloseEditButton = popupEditProfile.querySelector('.popup__close');
const profileCloseAddCardButton = popupAddCard.querySelector('.popup__close');

const profileInfo = document.querySelector('.profile__info');
const profileTitle = profileInfo.querySelector('.profile__title');
const profileDescription = profileInfo.querySelector('.profile__description');

export { 
    cardTemplate, 
    cardsList,
    profileEditButton,
    profileAddButton,
    popupEditProfile,
    popupAddCard,
    popupImage,
    profileCloseEditButton,
    profileCloseAddCardButton,
    profileTitle,
    profileDescription,
    profileSaveEditButton,
    profileSaveAddCardButton
 };