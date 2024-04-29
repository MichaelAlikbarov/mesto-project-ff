// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы
const cardsList = document.querySelector('.places__list');

const createCard = (name, link, callback) => {
    const cardItem = cardTemplate.cloneNode(true);
    cardItem.querySelector('.card__title').textContent = name;
    cardItem.querySelector('.card__image').setAttribute('src', link);
    cardItem.querySelector('.card__image').setAttribute('alt', name);
    const deleteButton = cardItem.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', callback);
    cardsList.append(cardItem);
}

function removeCard(evt) {
    const cardElement = evt.target.closest('.card');
    cardElement.remove();
}

function withdrawCards(cards) {
    cards.forEach((data) => {
        createCard(data.name, data.link, removeCard);
    })
};

withdrawCards(initialCards);