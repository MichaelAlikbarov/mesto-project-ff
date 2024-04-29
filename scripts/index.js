// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;
// @todo: DOM узлы
const cardsList = document.querySelector('.places__list');

const createCard = (name, link, callback) => {
    const cardItem = cardTemplate.cloneNode(true);
    const cardImage = cardItem.querySelector('.card__image');
    cardItem.querySelector('.card__title').textContent = name;
    cardImage.setAttribute('src', link);
    cardImage.setAttribute('alt', name);
    const deleteButton = cardItem.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', callback);
    return cardItem;
}

function removeCard(evt) {
    const cardElement = evt.target.closest('.card');
    cardElement.remove();
}

function withdrawCards(node, cards) {
    cards.forEach((data) => {
        node.append(createCard(data.name, data.link, removeCard));
    })
};

withdrawCards(cardsList, initialCards);