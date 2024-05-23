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
    buttonAddCardProfile,
    formEditProfile,
    formAddCard
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
    closePopup(popupEditProfile);
    console.log('test')
};

const handleFormAddCardSubmit = (evt) => {
    evt.preventDefault();
    const inputNameCard = formAddCard.elements['place-name'].value;
    const inputLinkCard = formAddCard.elements.link.value;
    cardsList.prepend(createCard({name: inputNameCard, link: inputLinkCard}, showModalImage));
    formAddCard.reset();
    closePopup(popupAddCard);
}

const createCardsList = () => {
    initialCards.forEach((data) => {
        cardsList.append(createCard(data, showModalImage));
    })
};

buttonEditProfile.addEventListener('click', () => showModalEditProfile(profileTitle, profileDescription));
buttonAddCardProfile.addEventListener('click', () => openPopup(popupAddCard));
buttonCloseEditProfile.addEventListener('click', () => closePopup(popupEditProfile));
buttonCloseAddCard.addEventListener('click', () => closePopup(popupAddCard));
formEditProfile.addEventListener('submit', handleFormEditProfileSubmit);
formAddCard.addEventListener('submit', handleFormAddCardSubmit);
buttonPopupImageClose.addEventListener('click', () => closePopup(popupImage));

createCardsList();