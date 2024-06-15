import './pages/index.css';
import { 
    cardsList,
    buttonEditProfile,
    popupEditProfile,
    popupAddCard,
    buttonPopupImageClose,
    popupImage,
    buttonCloseEditProfile,
    buttonCloseAddCard,
    profileTitle,
    profileDescription,
    buttonAddCardProfile,
    formEditProfile,
    formAddCard,
    validationConfig,
    buttonOpenEditAvatar,
    popupEditAvatar,
    formEditAvatar,
    profileImageAvatar
} from './components/constants.js';

import { openPopup, closePopup } from './components/modal.js';
import { createCard, handleCardLike, removeCard, showDeleteCardIcon } from './components/card.js';
import { clearValidation, enableValidation } from './components/validation.js';
import { getInfoUser, getInitialCards, postAddCard, handleError, deleteCard, patchInfoUser, patchUserAvatar } from './components/api.js';

const showModalEditProfile = (name, description) => {
    const formEditProfile = document.forms['edit-profile'];
    const nameInput = formEditProfile.elements.name;
    const descriptionInput = formEditProfile.elements.description;
    nameInput.value = name?.textContent;
    descriptionInput.value = description?.textContent;
    clearValidation(formEditProfile, validationConfig);
    openPopup(popupEditProfile);
};

const showModalImage = (data) => {
    const cardSignature = popupImage.querySelector('.popup__caption');
    const cardImage = popupImage.querySelector('.popup__image');
    cardImage.setAttribute('src', data.link);
    cardImage.setAttribute('alt', data.name);
    cardSignature.textContent = data.name;
    openPopup(popupImage);
};

const handleFormEditProfileSubmit = (evt) => {
    evt.preventDefault();
    const inputUserName = formEditProfile.elements.name;
    const inputUserDescription = formEditProfile.elements.description;

    profileTitle.textContent = inputUserName.value;
    profileDescription.textContent = inputUserDescription.value;

    const data = {name: inputUserName.value, about: inputUserDescription.value};

    patchInfoUser(data)
        .then((res) => {
            profileTitle.textContent = res.name;
            profileDescription.textContent = res.about;
        })
        .catch(handleError);
  
    closePopup(popupEditProfile);
};

const createCardsList = (dataCards, dataUser) => {
    dataCards.forEach((dataCard) => {
        cardsList.append(createCard(dataCard, showModalImage, handleCardLike, removeCard, dataUser._id));
    })
};

const handleFormEditAvatarSubmit = (evt) => {
    evt.preventDefault();
    const inputUserAvatar = formEditAvatar.elements.avatar;
    profileImageAvatar.style.backgroundImage = `url(${inputUserAvatar.value})`;

    patchUserAvatar({avatar: inputUserAvatar.value})
        .then((res) => {
           profileImageAvatar.style.backgroundImage = res.avatar;
        })
        .catch(handleError);
    formEditAvatar.reset();
    closePopup(popupEditAvatar);
};

let userId = null;

Promise.all([getInfoUser(), getInitialCards()])
    .then(([dataUser, dataCards]) => {
        createCardsList(dataCards, dataUser);
        return dataUser;
    })
    .then((dataUser)=>{
        userId = dataUser._id;
        profileTitle.textContent = dataUser.name;
        profileDescription.textContent = dataUser.about;
        profileImageAvatar.style.backgroundImage = `url(${dataUser.avatar})`;
    })
    .catch(handleError);

const handleFormAddCardSubmit = (evt) => {
    evt.preventDefault();
    const inputNameCard = formAddCard.elements['place-name'].value;
    const inputLinkCard = formAddCard.elements.link.value;
    const data = {name: inputNameCard, link: inputLinkCard};

    postAddCard(data)
        .then((dataCard) => {
            cardsList.prepend(createCard(dataCard, showModalImage, handleCardLike, removeCard, userId));
        })
        .catch(handleError);
    
    formAddCard.reset();
    closePopup(popupAddCard);
};

buttonEditProfile.addEventListener('click', () => showModalEditProfile(profileTitle, profileDescription));
buttonAddCardProfile.addEventListener('click', () => {
    clearValidation(formAddCard, validationConfig);
    openPopup(popupAddCard);
});
buttonCloseEditProfile.addEventListener('click', () => closePopup(popupEditProfile));
buttonCloseAddCard.addEventListener('click', () => closePopup(popupAddCard));
formEditProfile.addEventListener('submit', handleFormEditProfileSubmit);
formAddCard.addEventListener('submit', handleFormAddCardSubmit);
formEditAvatar.addEventListener('submit', handleFormEditAvatarSubmit);
buttonPopupImageClose.addEventListener('click', () => closePopup(popupImage));
buttonOpenEditAvatar.addEventListener('click', () => {
    openPopup(popupEditAvatar)
})

enableValidation(validationConfig);



