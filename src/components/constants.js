const cardTemplate = document.querySelector('#card-template').content;
const cardsList = document.querySelector('.places__list');
const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonAddCardProfile = document.querySelector('.profile__add-button');

const popupEditProfile = document.querySelector('.popup_type_edit');
const popupAddCard = document.querySelector('.popup_type_new-card');
const popupImage = document.querySelector('.popup_type_image');
const popupEditAvatar = document.querySelector('.popup_type_edit-avatar');
const profileImageAvatar = document.querySelector('.profile__image');

const buttonPopupImageClose = popupImage.querySelector('.popup__close'); 
const buttonCloseEditProfile = popupEditProfile.querySelector('.popup__close');
const buttonCloseAddCard = popupAddCard.querySelector('.popup__close');
const buttonCloseEditAvatar = popupEditAvatar.querySelector('.popup__close');

const profileInfo = document.querySelector('.profile__info');
const profileTitle = profileInfo.querySelector('.profile__title');
const profileDescription = profileInfo.querySelector('.profile__description');
const buttonOpenEditAvatar = document.querySelector('.profile__image-hover');

const formEditProfile = document.forms['edit-profile'];
const formAddCard = document.forms['new-place'];
const formEditAvatar = document.forms['edit-avatar'];

const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
  }

const baseURL = 'https://mesto.nomoreparties.co/v1/wff-cohort-16/';
const tokenAuth = '1e34b2ef-e058-4b59-91e0-0235c0d93704';

export { 
    cardTemplate, 
    cardsList,
    buttonEditProfile,
    buttonAddCardProfile,
    popupEditProfile,
    popupAddCard,
    popupImage,
    buttonCloseEditProfile,
    buttonCloseAddCard,
    buttonPopupImageClose,
    profileTitle,
    profileDescription,
    formEditProfile,
    formAddCard,
    validationConfig,
    baseURL,
    tokenAuth,
    buttonOpenEditAvatar,
    popupEditAvatar,
    formEditAvatar,
    profileImageAvatar,
    buttonCloseEditAvatar
 };