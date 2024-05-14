const cardTemplate = document.querySelector('#card-template').content;
const cardsList = document.querySelector('.places__list');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');

const popup = document.querySelectorAll('.popup');
const popupEditProfile = document.querySelector('.popup_type_edit');
const popupAddCard = document.querySelector('.popup_type_new-card');
const popupImage = document.querySelector('.popup_type_image');

export { 
    cardTemplate, 
    cardsList,
    profileEditButton,
    profileAddButton,
    popupEditProfile,
    popupAddCard,
    popupImage,
    popup
 };