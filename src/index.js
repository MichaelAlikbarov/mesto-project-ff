import './pages/index.css';
import { initialCards } from './components/mock.js';
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
    buttonSaveEditProfile,
    buttonSaveAddCard,
    buttonAddCardProfile
} from './components/constants.js';

import { openPopup, closePopup } from './components/modal.js';
import { createCard } from './components/card.js';

const showModalEditProfile = (name, description) => {
    const formEditProfile = document.forms['edit-profile'];
    const nameInput = formEditProfile.elements.name;
    const descriptionInput = formEditProfile.elements.description;
    nameInput.value = name?.textContent;
    descriptionInput.value = description?.textContent;
    openPopup(popupEditProfile);
};

const handleFormEditProfileSubmit = (evt) => {
    evt.preventDefault();
    const formEditProfile = document.forms['edit-profile'] 
    const inputUserName = formEditProfile.elements.name;
    const inputUserDescription = formEditProfile.elements.description;

    profileTitle.textContent = inputUserName.value;
    profileDescription.textContent = inputUserDescription.value;
};

const handleFormAddCardSubmit = (evt) => {
    evt.preventDefault();
    const formAddCard = document.forms['new-place'];
    const inputNameCard = formAddCard.elements['place-name'].value;
    const inputLinkCard = formAddCard.elements.link.value;
    cardsList.prepend(createCard({name: inputNameCard, link: inputLinkCard}));
    formAddCard.reset();
}

const createCardsList = () => {
    initialCards.forEach((data) => {
        cardsList.append(createCard(data));
    })
};

buttonEditProfile.addEventListener('click', () => showModalEditProfile(profileTitle, profileDescription));
buttonAddCardProfile.addEventListener('click', () => openPopup(popupAddCard));
buttonCloseEditProfile.addEventListener('click', () => closePopup(popupEditProfile));
buttonCloseAddCard.addEventListener('click', () => closePopup(popupAddCard));
buttonSaveEditProfile.addEventListener('click', handleFormEditProfileSubmit);
buttonSaveEditProfile.addEventListener('click', () => closePopup(popupEditProfile));
buttonSaveAddCard.addEventListener('click', handleFormAddCardSubmit);
buttonSaveAddCard.addEventListener('click', () => closePopup(popupAddCard));
buttonPopupImageClose.addEventListener('click', () => closePopup(popupImage));

createCardsList();