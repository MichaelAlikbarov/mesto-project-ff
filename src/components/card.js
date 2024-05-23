import { cardTemplate } from "./constants";

const handleCardLike = (evt) => evt.target.classList.toggle('card__like-button_is-active');
const removeCard = (evt) => evt.target.closest('.card').remove();

const createCard = (data, handler) => {
    const cardItem = cardTemplate.cloneNode(true);
    const cardImage = cardItem.querySelector('.card__image');
    const buttonDeleteCard = cardItem.querySelector('.card__delete-button');
    const buttonLikeCard = cardItem.querySelector('.card__like-button');
    cardItem.querySelector('.card__title').textContent = data.name;
    cardImage.setAttribute('src', data.link);
    cardImage.setAttribute('alt', data.name);

    buttonDeleteCard.addEventListener('click', removeCard);
    buttonLikeCard.addEventListener('click', handleCardLike);
    cardImage.addEventListener('click', () => handler(data));

    return cardItem;
}

export {createCard};





















