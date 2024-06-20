import { deleteCard, deleteLike, handleError, putAddLike } from "./api";
import { cardTemplate } from "./constants";

const handleCardLikeToggle = (evt) => evt.target.classList.toggle('card__like-button_is-active');

const deleteLikeCard = (dataCard, clickCardLikeHandler, calculateLikes, countLikes, evt) => {
    deleteLike(dataCard._id)
        .then((res) => {
            dataCard.likes = res.likes;
            clickCardLikeHandler(evt);
            countLikes.textContent = calculateLikes(res);
        })
        .catch(handleError);
};

const addLikeCard = (dataCard, clickCardLikeHandler, calculateLikes, countLikes, evt) => {
    putAddLike(dataCard._id)
        .then((res) => {
            dataCard.likes = res.likes;
            clickCardLikeHandler(evt);
            countLikes.textContent = calculateLikes(res);
        })
        .catch(handleError);
};

const handleCardLikeMethod = (dataCard, userId, clickCardLikeHandler, calculateLikes, countLikes, evt) => {
    dataCard.likes.some(item => item._id === userId) 
    ? deleteLikeCard(dataCard, clickCardLikeHandler, calculateLikes, countLikes, evt)
    : addLikeCard(dataCard, clickCardLikeHandler, calculateLikes, countLikes, evt);
}

const removeCard = (evt) => {
    evt.target.closest('.card').remove();
};
const showDeleteCardIcon = (buttonDeleteCardIcon, userId, ownerId) => {
    if (userId !== ownerId) {
        buttonDeleteCardIcon.remove('card__delete-button');
    }
};

const calculateLikes = (dataCard) => {
    return  dataCard.likes.length;
};

const showCardLikeIconActive = (buttonLikeCard, userId, dataCard) => {
    if (dataCard.likes.some((item) => item._id === userId)) {
        buttonLikeCard.classList.add('card__like-button_is-active');
    }
};

const handleDeleteCard = (dataCard, evt, clickDeleteCardHandler) => {
    deleteCard(dataCard._id)
    .then(() => clickDeleteCardHandler(evt))
    .catch(handleError);
}

const createCard = (
    dataCard,
    clickImageHandler, 
    clickCardLikeHandler,
    clickDeleteCardHandler,
    userId
) => {
    const cardItem = cardTemplate.cloneNode(true);
    const cardImage = cardItem.querySelector('.card__image');
    const buttonDeleteCardIcon = cardItem.querySelector('.card__delete-button');
    const buttonLikeCard = cardItem.querySelector('.card__like-button');
    const countLikes = cardItem.querySelector('.card__like-counter');
    cardItem.querySelector('.card__title').textContent = dataCard?.name;
    cardImage.setAttribute('src', dataCard?.link);
    cardImage.setAttribute('alt', dataCard?.name);
    countLikes.textContent = calculateLikes(dataCard);

    showDeleteCardIcon(buttonDeleteCardIcon, userId, dataCard.owner._id);
    showCardLikeIconActive(buttonLikeCard, userId, dataCard);

    buttonDeleteCardIcon.addEventListener('click', (evt) => {handleDeleteCard(dataCard, evt, clickDeleteCardHandler)});

    buttonLikeCard.addEventListener('click', (evt) => {handleCardLikeMethod(dataCard, userId, clickCardLikeHandler, calculateLikes, countLikes, evt)});
    cardImage.addEventListener('click', () => clickImageHandler(dataCard));

    return cardItem;
}

export {createCard, handleCardLikeToggle, removeCard};





















