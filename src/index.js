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
    // popup
} from './components/constants.js';
import openPopup from './components/modal.js';
import removeCard from './components/removeCard.js';
import createCardsList from './components/createCardsList.js';
import showModalImage from './components/showModalImage.js';

profileEditButton.addEventListener('click', () => openPopup(popupEditProfile));
profileAddButton.addEventListener('click', () => openPopup(popupAddCard));

createCardsList(cardTemplate, cardsList, initialCards, removeCard, openPopup, popupImage, showModalImage);