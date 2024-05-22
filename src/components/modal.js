const closePopup = (item) => {
    item.classList.remove('popup_is-opened');
    item.removeEventListener('mousedown', closePopupByClickingOn);
    document.removeEventListener('keydown', handleEscapeClose);
};
const closePopupByClickingOn = (evt) => {
    if (evt.target === evt.currentTarget ) {
        closePopup(evt.target);
    }
};
const openPopup = (item) => {
    item.classList.add('popup_is-opened');
    item.classList.add('popup_is-animated');
    item.addEventListener('mousedown', closePopupByClickingOn);
    document.addEventListener('keydown', handleEscapeClose);
};

const handleEscapeClose = (evt) => {
    if (evt.key === 'Escape') {
        const popupIsOpened = document.querySelector('.popup_is-opened');
        closePopup(popupIsOpened);
    }
};
export { openPopup, closePopup };