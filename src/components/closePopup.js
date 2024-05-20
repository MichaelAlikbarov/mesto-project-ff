import handleEscapeClose from "./handleEscapeClose";

export default function closePopup(item) {
    item.classList.remove('popup_is-opened');
    document.removeEventListener('keydown', handleEscapeClose);
}