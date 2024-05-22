const cardTemplate = document.querySelector('#card-template').content;
const cardsList = document.querySelector('.places__list');
const buttonEditProfile = document.querySelector('.profile__edit-button');
const buttonAddCardProfile = document.querySelector('.profile__add-button');

const popupEditProfile = document.querySelector('.popup_type_edit');
const buttonSaveEditProfile = popupEditProfile.querySelector('.popup__button');

const popupAddCard = document.querySelector('.popup_type_new-card');
const popupImage = document.querySelector('.popup_type_image');

const buttonPopupImageClose = popupImage.querySelector('.popup__close'); 
const buttonSaveAddCard = popupAddCard.querySelector('.popup__button');

const buttonCloseEditProfile = popupEditProfile.querySelector('.popup__close');
const buttonCloseAddCard = popupAddCard.querySelector('.popup__close');

const profileInfo = document.querySelector('.profile__info');
const profileTitle = profileInfo.querySelector('.profile__title');
const profileDescription = profileInfo.querySelector('.profile__description');

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
    buttonSaveEditProfile,
    buttonSaveAddCard
 };