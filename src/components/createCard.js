export default function createCard(
        cardTemplate, 
        data, 
        deleteCard, 
        openPopup, 
        item, 
        showModalImage,
        closePopup,
        handleCardLike
    ) {
    const cardItem = cardTemplate.cloneNode(true);
    const cardImage = cardItem.querySelector('.card__image');
    const deleteButton = cardItem.querySelector('.card__delete-button');
    const likeCard = cardItem.querySelector('.card__like-button');
    
    cardItem.querySelector('.card__title').textContent = data.name;
    cardImage.setAttribute('src', data.link);
    cardImage.setAttribute('alt', data.name);
    
    deleteButton.addEventListener('click', deleteCard);
    cardImage.addEventListener('click', () => {
        openPopup(item);
        showModalImage(data, item, closePopup)
    });

    likeCard.addEventListener('click', handleCardLike);

    return cardItem;
}