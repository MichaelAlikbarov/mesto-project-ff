import { deleteCard, deleteLike, handleError, putAddLike } from "./api";
import { cardTemplate } from "./constants";

const handleCardLike = (evt) => evt.target.classList.toggle('card__like-button_is-active');
const removeCard = (evt) => {
    evt.target.closest('.card').remove();
};
const showDeleteCardIcon = (buttonDeleteCard, userId, ownerId) => {
    if (userId !== ownerId) {
        buttonDeleteCard.remove('card__delete-button');
    }
};

const calculateLikes = (dataCard) => {
    return  dataCard.likes.length;
}

const showCardLikeIconActive = (buttonLikeCard, userId, dataCard) => {
    if (dataCard.likes.find((item) => item._id = userId)) {
        buttonLikeCard.classList.add('card__like-button_is-active');
    }
}

const createCard = (dataCard, clickImageHandler, clickCardLikeHandler, clickDeleteCardHandler, userId) => {
    const cardItem = cardTemplate.cloneNode(true);
    const cardImage = cardItem.querySelector('.card__image');
    const buttonDeleteCard = cardItem.querySelector('.card__delete-button');
    const buttonLikeCard = cardItem.querySelector('.card__like-button');
    const countLikes = cardItem.querySelector('.card__like-counter');
    cardItem.querySelector('.card__title').textContent = dataCard?.name;
    cardImage.setAttribute('src', dataCard?.link);
    cardImage.setAttribute('alt', dataCard?.name);
    countLikes.textContent = calculateLikes(dataCard);
    // let quantityLikes = calculateLikes(dataCard);
    // calculateLikes(dataCard, countLikes);

    showDeleteCardIcon(buttonDeleteCard, userId, dataCard.owner._id);
    showCardLikeIconActive(buttonLikeCard, userId, dataCard);

    buttonDeleteCard.addEventListener('click', (evt) => {
        deleteCard(dataCard._id)
        .then(() => clickDeleteCardHandler(evt))
        .catch(handleError);
    });
    buttonLikeCard.addEventListener('click', (evt) => {
        dataCard.likes.forEach((item) => {
            console.log(item._id)
        })
        // console.log(userId)
        // console.log(dataCard._id)
        // console.log(dataCard.likes);
        // console.log(dataCard.likes._id)
        // dataCard.likes.forEach((item) => {
        //         console.log(item)
        // })

        if (dataCard.likes.find(item => item._id === userId)) {
            deleteLike(dataCard._id)
                .then((res) => {
                    console.log(res)
                    console.log(res.likes + ' удалить лайк')
                    clickCardLikeHandler(evt);
                    countLikes.textContent = calculateLikes(res);
                    // console.log(calculateLikes(res))
                })
                .catch(handleError);
        } else {
            putAddLike(dataCard._id)
                .then((res) =>{
                    console.log(res)
                    console.log(res.likes)
                    clickCardLikeHandler(evt);
                    console.log(' добавить лайк')
                    countLikes.textContent = calculateLikes(res);
                })
                .catch(handleError);
        }
    });
    cardImage.addEventListener('click', () => clickImageHandler(dataCard));

    return cardItem;
}

export {createCard, handleCardLike, removeCard, showDeleteCardIcon};





















