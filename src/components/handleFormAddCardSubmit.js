import closePopup from "./closePopup";
import { cardTemplate, cardsList, popupImage } from "./constants";
import createCard from "./createCard";
import handleCardLike from "./handleCardLike";
import openPopup from "./openPopup";
import removeCard from "./removeCard";
import showModalImage from "./showModalImage";

export default function handleFormAddCardSubmit(evt) {
    evt.preventDefault();
    const formAddCard = document.forms['new-place'];
    const inputNameCard = formAddCard.elements['place-name'].value;
    const inputLinkCard = formAddCard.elements.link.value;
    
    cardsList.prepend(createCard(
        cardTemplate, 
        {name: inputNameCard, link: inputLinkCard}, 
        removeCard,
        openPopup,
        popupImage,
        showModalImage,
        closePopup,
        handleCardLike
    ));
    formAddCard.reset();
}