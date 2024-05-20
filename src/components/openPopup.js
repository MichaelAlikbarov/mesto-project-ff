import closePopupByClickingOn from "./closePopupByClickingOn";
import handleEscapeClose from "./handleEscapeClose";

export default function openPopup(item, name, description) {
    item.classList.add('popup_is-opened');
    item.classList.add('popup_is-animated');
    item.addEventListener('mousedown', closePopupByClickingOn);
    document.addEventListener('keydown', handleEscapeClose);   

    const formEditProfile = document.forms['edit-profile'];
    const nameInput = formEditProfile.elements.name;
    const descriptionInput = formEditProfile.elements.description;
    nameInput.value = name?.textContent;
    descriptionInput.value = description?.textContent;
}