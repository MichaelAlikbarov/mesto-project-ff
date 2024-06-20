import { deleteCard, deleteLike, handleError, putAddLike } from "./api";
import { cardTemplate } from "./constants";

const handleCardLike = (evt) => evt.target.classList.toggle('card__like-button_is-active');
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
}

const showCardLikeIconActive = (buttonLikeCard, userId, dataCard) => {
    if (dataCard.likes.find((item) => item._id === userId)) {
        buttonLikeCard.classList.add('card__like-button_is-active');
    }
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

    buttonDeleteCardIcon.addEventListener('click', (evt) => {
        deleteCard(dataCard._id)
            .then(() => clickDeleteCardHandler(evt))
            .catch(handleError);
    });

    buttonLikeCard.addEventListener('click', (evt) => {
        if (dataCard.likes.find(item => item._id === userId)) {
            deleteLike(dataCard._id)
                .then((res) => {
                    dataCard.likes = res.likes;
                    return res;
                })
                .then((res)=> {
                    clickCardLikeHandler(evt);
                    countLikes.textContent = calculateLikes(res);
                })
                .catch(handleError);
        } else {
            putAddLike(dataCard._id)
                .then((res) => {
                    dataCard.likes = res.likes;
                    return res;
                })
                .then((res) => {
                    clickCardLikeHandler(evt);
                    countLikes.textContent = calculateLikes(res);
                })
                .catch(handleError);
        }
    });
    cardImage.addEventListener('click', () => clickImageHandler(dataCard));

    return cardItem;
}

export {createCard, handleCardLike, removeCard};





















