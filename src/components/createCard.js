export default function createCard(cardTemplate, data, deleteCard, openPopup, item, handleImageClick) {
    const cardItem = cardTemplate.cloneNode(true);
    const cardImage = cardItem.querySelector('.card__image');
    const deleteButton = cardItem.querySelector('.card__delete-button');
    
    cardItem.querySelector('.card__title').textContent = data.name;
    cardImage.setAttribute('src', data.link);
    cardImage.setAttribute('alt', data.name);
    // const popupImage = document.querySelector('.popup_type_image');
    
    deleteButton.addEventListener('click', deleteCard);
    cardImage.addEventListener('click', () => openPopup(item));
    handleImageClick(item, data);

    return cardItem;
}