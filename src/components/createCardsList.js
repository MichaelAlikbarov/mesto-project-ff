import createCard from "./createCard.js";

export default function createCardsList(node, place, cards, deleteCard, openPopup, item, showModalImage, closePopup, handleCardLike) {
    cards.forEach((data) => {
        place.append(createCard(node, data, deleteCard, openPopup, item, showModalImage, closePopup, handleCardLike));
    })
}