import './pages/index.css';
import { initialCards } from './components/mock.js';
import { 
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
} from './components/constants.js';
import openPopup from './components/openPopup.js';
import removeCard from './components/removeCard.js';
import createCardsList from './components/createCardsList.js';
import showModalImage from './components/showModalImage.js';
import closePopup from './components/closePopup.js';
import handleCardLike from './components/handleCardLike.js';
import handleFormSubmit from './components/handleFormSubmit.js';
import handleFormAddCardSubmit from './components/handleFormAddCardSubmit.js';

profileEditButton.addEventListener('click', () => openPopup(popupEditProfile, profileTitle, profileDescription));
profileAddButton.addEventListener('click', () => openPopup(popupAddCard));
profileCloseEditButton.addEventListener('click', () => closePopup(popupEditProfile));
profileCloseAddCardButton.addEventListener('click', () => closePopup(popupAddCard));
profileSaveEditButton.addEventListener('click', handleFormSubmit);
profileSaveEditButton.addEventListener('click', () => closePopup(popupEditProfile));
profileSaveAddCardButton.addEventListener('click', handleFormAddCardSubmit);
profileSaveAddCardButton.addEventListener('click', () => closePopup(popupAddCard));


createCardsList(
    cardTemplate, 
    cardsList, 
    initialCards, 
    removeCard, 
    openPopup,
    popupImage,
    showModalImage,
    closePopup,
    handleCardLike
);